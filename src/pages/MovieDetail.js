import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Skeleton from "../components/Skeleton";
import http from "../helpers/http";
import { transaction } from "../redux/reducers/transactionReducers";
import jwt_decode from "jwt-decode";

const MovieDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { id } = jwt_decode(token);
  const { id: getId } = useParams();
  const [movieId, setMovieId] = React.useState(null);
  const fetchMovieId = async () => {
    try {
      const response = await http().get(`/movies/${getId}`);
      setMovieId(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchMovieId();
  }, []);

  let duration = movieId?.duration;
  let Hour = String(duration).split(":").slice(0, 1).join(":");
  let Minute = String(duration).split(":")[1];

  let NewDate = new Date(movieId?.releaseDate).toDateString();
  let Month = NewDate.split(" ")[1];
  let Dates = NewDate.split(" ")[2];
  let Year = NewDate.split(" ")[3];

  const Today = new Date().toLocaleDateString("en-ca");

  const [selectDate, setSelectDate] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [selectedCinema, setSelectedCinema] = React.useState(null);

  //FETCHING CINEMA
  const [cinema, setCinema] = React.useState([]);

  const fetchCinema = async () => {
    try {
      const response = await http(token).get(
        `/movieDetail/${getId}/schedules?city=${selectCity}&date=${selectDate}`
      );
      setCinema(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCinema();
  }, [selectCity, selectDate]);

  //handle select time
  const handleSelectTime = (item, cinemaId) => {
    setSelectedTime(item);
    setSelectedCinema(cinemaId);
  };

  const [errorSelectedTime, setErrorSelectedTime] = React.useState(false);
  const [errorSelectedDate, setErrorSelectedDate] = React.useState(false);
  const movieTitle = movieId?.title;

  //handle onsubmit book now
  const handleSubmitBookNow = async (
    cinemaName,
    price,
    movieScheduleId,
    cinemaPicture
  ) => {
    try {
      if (!selectDate) {
        setErrorSelectedDate("Please select date...");
        setTimeout(() => {
          setErrorSelectedDate(false);
        }, 3000);
      } else if (!selectedTime) {
        setErrorSelectedTime("Please select time...");
        setTimeout(() => {
          setErrorSelectedTime(false);
        }, 3000);
      } else {
        dispatch(
          transaction({
            bookingDate: selectDate,
            userId: id,
            movieId: getId,
            cinemaId: selectedCinema,
            time: selectedTime,
            cinemaName,
            price,
            movieScheduleId,
            cinemaPicture,
            movieTitle,
          })
        );
        navigate("/Order");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div>
        {movieId ? (
          <div className="md:px-[80px] px-5 py-[30px] flex-col md:flex-row flex items-center">
            <div className="w-fit border-2 border-[#C539B4] rounded-xl p-3 justify-center flex">
              <img
                className="rounded-xl w-[236px] "
                src={movieId.picture}
                alt={movieId.title}
              />
            </div>
            <div className="md:ml-[50px] ml-0 md:mt-0 mt-5 flex-1">
              <div className="mb-5 md:block flex md:flex-row flex-col md:items-start items-center">
                <div className="font-bold text-xl">{movieId?.title}</div>
                <div className="font-normal mt-1 mb-5 text-lg">
                  {movieId?.genre}
                </div>
                <div className="flex text-xs font-normal">
                  <div className="block mr-[50px] flex-1">
                    <div className="mb-4">
                      <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                        Release date
                      </div>
                      <div>
                        {Month} {Dates}, {Year}
                      </div>
                    </div>
                    <div>
                      <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                        Duration
                      </div>
                      <div>
                        {Hour} Hours {Minute} Minutes
                      </div>
                    </div>
                  </div>
                  <div className="block flex-1">
                    <div className="mb-4">
                      <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                        Directed by
                      </div>
                      <div>{movieId.director}</div>
                    </div>
                    <div>
                      <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                        Casts
                      </div>
                      <div>{movieId?.casts},...</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-1 border-[#DEDEDE]"></hr>
              <div className="font-semibold mt-3 mb-1	text-xl	leading-8	">
                Synopsis
              </div>
              <p className="font-normal	text-base	leading-8	text-[#4E4B66]">
                {movieId.synopsis}
              </p>
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
        <div className="bg-[#F5D5AE] flex flex-col items-center py-20 gap-10">
          <div className="font-bold text-2xl">Showtimes and Tickets</div>
          <div className="flex md:flex-row flex-col gap-4">
            <div>
              <input
                className="p-3 rounded-md w-[220px]"
                type="date"
                min={Today}
                onChange={(e) => setSelectDate(e.target.value)}
              />
            </div>
            <div>
              <select
                className="p-3 rounded-md w-[220px]"
                name="location"
                id="location"
                onChange={(e) => setSelectCity(e.target.value)}
              >
                <option value="" className="hidden">
                  Select city
                </option>
                <option value="purwokerto">Purwokerto</option>
                <option value="yogyakarta">Yogyakarta</option>
              </select>
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full h-full md:px-20 px-5 justify-center gap-5">
            {cinema?.map((cinema) => (
              <div
                className="bg-white rounded-lg md:p-10 p-3 flex-1 flex-wrap"
                key={String(cinema.id)}
              >
                <div className="grid grid-cols-2 mb-5 gap-3">
                  <div className="flex flex-wrap justify-center w-full h-full content-center">
                    <img src={cinema.picture} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-2xl mb-3">
                      {cinema.name}
                    </div>
                    <div className="font-light text-sm">{cinema.address}</div>
                  </div>
                </div>
                <hr />
                <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
                  {cinema?.time.map((item, index) => (
                    <button
                      onClick={() => handleSelectTime(item, cinema.id)}
                      key={String(index)}
                      className={
                        selectedTime === item && selectedCinema === cinema.id
                          ? "text-[#C539B4] font-bold"
                          : "text-black font-light text-base"
                      }
                    >
                      {item.split(":")[0] + ":" + item.split(":")[1] + " WIB"}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2">
                  <div className="">Price</div>
                  <div className="text-right font-semibold">
                    Rp {Number(cinema.price).toLocaleString("id")}/seat
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleSubmitBookNow(
                      cinema?.name,
                      cinema?.price,
                      cinema?.moviescheduleid,
                      cinema?.picture
                    )
                  }
                  className="w-full btn bg-[#C539B4] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2"
                >
                  Book Now
                </button>
                {errorSelectedTime && (
                  <div className="text-red-500 text-center font-bold text-lg">
                    {errorSelectedTime}
                  </div>
                )}
                {errorSelectedDate && (
                  <div className="text-red-500 text-center font-bold text-lg">
                    {errorSelectedDate}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
