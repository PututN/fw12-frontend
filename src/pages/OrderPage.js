import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import moment from "moment/moment";
import { ArrowDown, ArrowRight } from "react-feather";
import { transaction } from "../redux/reducers/transactionReducers";

const OrderPage = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    bookingDate,
    cinemaName,
    cinemaPicture,
    movieTitle,
    time,
    price,
    cinemaId,
    movieId,
    movieScheduleId,
    userId,
  } = useSelector((state) => state?.transaction);
  //set date
  const date = moment(bookingDate).format("LLLL").split(" ");
  const day = date[0];
  const month = date[1];
  const newDate = date[2];
  const year = date[3];
  const fixDate = `${day} ${month} ${newDate} ${year}`;
  //set seatnum
  const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  const column1 = [1, 2, 3, 4, 5, 6, 7];
  const column2 = [8, 9, 10, 11, 12, 13, 14];
  const [selectSeat, setSelectSeat] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleChooseSeat = (seat) => {
    if (!selectSeat.includes(seat)) {
      setSelectSeat([...selectSeat, seat].sort());
    } else {
      setSelectSeat(selectSeat.filter((e) => e !== seat));
    }
  };
  const totalPrice = Number(selectSeat.length * price).toLocaleString("id");

  const handleCheckoutNow = async (totalPrice) => {
    try {
      if (selectSeat.length) {
        dispatch(
          transaction({
            bookingDate,
            time,
            cinemaName,
            cinemaId,
            cinemaPicture,
            movieId,
            movieScheduleId,
            movieTitle,
            seatNum: selectSeat,
            totalPrice : selectSeat.length * price,
            userId,
            price,
          })
        );

        navigate("/Payment");
      } else {
        setErrorMessage("Please choose your seat");
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div className="bg-[#F5D5AE] md:p-20 p-5">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-2/3 w-full">
            <h1 className="text-xl font-bold mb-6 md:block hidden">
              Movie Selected
            </h1>
            <div className="bg-white p-5 rounded-md md:flex hidden">
              <div className="text-xl font-bold flex-1">{movieTitle}</div>
              <div>
                <Link
                  to="/ViewAll"
                  className="p-3 rounded-lg text-white font-semibold btn bg-[#852999]"
                >
                  Change movie
                </Link>
              </div>
            </div>{" "}
            <div>
              <h1 className="text-xl font-bold py-6">Choose Your Seat</h1>
              <div className="rounded-md p-15 bg-white md:p-10 p-3">
                <div className="flex flex-col mb-5 justify-center items-center gap-3">
                  <h3 className="font-semibold">Screen</h3>

                  <div className="border-4 border-black w-full rounded-mb"></div>
                </div>
                <div className="flex justify-center items-center flex-row gap-5">
                  <div>
                    {alphabet.map((alp, i) => {
                      return (
                        <div key={String(i)} className="flex-row flex">
                          {column1.map((num, index) => {
                            const seat = alp + num;
                            return (
                              <button
                                onClick={() => handleChooseSeat(seat)}
                                key={String(index)}
                                className={
                                  selectSeat.includes(seat)
                                    ? "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#C539B4]"
                                    : "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#D6D8E7]"
                                }
                              ></button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {alphabet.map((alp, i) => {
                      return (
                        <div key={String(i)} className="flex-row flex">
                          {column2.map((num, index) => {
                            const seat = alp + num;
                            return (
                              <button
                                onClick={() => handleChooseSeat(seat)}
                                key={String(index)}
                                className={
                                  selectSeat.includes(seat)
                                    ? "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#C539B4]"
                                    : "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#D6D8E7]"
                                }
                              ></button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="text-lg font-semibold">Seating Key</h3>
                  <div className="flex md:hidden justify-around w-2/3 mt-3 gap-3">
                    <div className="gap-3">
                      <div className="flex gap-3 items-center">
                        <ArrowDown /> A - G
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#D6D8E7] rounded-md flex items-center"></div>
                        Available
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#4E4B66] rounded-md flex items-center"></div>
                        Sold
                      </div>
                    </div>
                    <div className="gap-3">
                      <div className="flex gap-3 items-center">
                        <ArrowRight /> 1 - 14
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#C539B4] rounded-md flex items-center"></div>
                        Selected
                      </div>
                    </div>
                  </div>
                  <div className="md:flex gap-7 hidden">
                    <div className="flex mt-3">
                      <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#D6D8E7] rounded-md flex items-center"></div>
                      <div className="flex items-center ml-3">Available</div>
                    </div>
                    <div className="flex mt-3">
                      <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#C539B4] rounded-md flex items-center"></div>
                      <div className="flex items-center ml-3">Selected</div>
                    </div>
                    <div className="flex mt-3">
                      <div className="h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem]  max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 m-1 bg-[#4E4B66] rounded-md flex items-center"></div>
                      <div className="flex items-center ml-3">Sold</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden justify-between mt-10">
                <Link
                  to="/ViewAll"
                  className=" text-center w-1/3 border-2 border-black rounded-lg text-white font-bold btn bg-[#852999]"
                >
                  Change your Movie
                </Link>
                <button
                  className="text-center w-1/3 border-2 border-black rounded-lg font-bold btn bg-[#C539B4] text-white"
                  onClick={() => handleCheckoutNow(totalPrice)}
                >
                  Checkout Now
                </button>
              </div>
              {errorMessage && (
                <div className="font-bold text-red-500 text-center text-lg md:block hidden">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 w-full mt-5 md:mt-0">
            <div className="md:ml-4 ml-0">
              <h1 className="text-xl font-bold mb-6 ml">Order Info</h1>
              <div className="bg-white rounded-md md:p-5 p-2">
                <div className="flex flex-col items-center">
                  <div className="p-3">
                    <img src={cinemaPicture} alt="" />
                  </div>
                  <h3 className="text-2xl">{cinemaName} Cinema</h3>
                </div>
                <div className="py-5 flex-col flex gap-3">
                  <div className="flex justify-between">
                    <div className="text-[#3A8891]">Movie Selected</div>
                    <div className="font-semibold">{movieTitle}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#3A8891]">{fixDate}</div>
                    <div className="font-semibold">
                      {time.split(":")[0] + ":" + time.split(":")[1] + " WIB"}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#3A8891]">One ticket Price</div>
                    <div className="font-semibold">
                      Rp {Number(price).toLocaleString("id")}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#3A8891]">Seat Choosed</div>
                    <div className="font-semibold">
                      {selectSeat.length ? selectSeat.join(", ") : "-"}
                    </div>
                  </div>
                </div>
                <div className="border border-b-[#FFEFD6] mt-3"></div>
                <div className="flex justify-center mt-7">
                  <div className="text-lg font-bold flex-1">Total Payment</div>
                  <div className="text-2xl font-bold">Rp {totalPrice}</div>
                </div>
              </div>
              <button
                onClick={() => handleCheckoutNow(totalPrice)}
                className="btn bg-[#C539B4] w-full mt-5 md:hidden block"
              >
                Checkout now
              </button>
              {errorMessage && (
                <div className="font-bold text-red-500 text-center text-lg md:hidden block">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
