import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import HomepageBanner from "../assets/images/img-homepage.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../helpers/http";
import Skeleton from "../components/Skeleton";
import { cancelTransaction } from "../redux/reducers/transactionReducers";

const month = [
  {
    id: 1,
    time: "January",
  },
  {
    id: 2,
    time: "February",
  },
  {
    id: 3,
    time: "March",
  },
  {
    id: 4,
    time: "April",
  },
  {
    id: 5,
    time: "May",
  },
  {
    id: 6,
    time: "June",
  },
  {
    id: 7,
    time: "July",
  },
  {
    id: 8,
    time: "August",
  },
  {
    id: 9,
    time: "September",
  },
  {
    id: 10,
    time: "October",
  },
  {
    id: 11,
    time: "November",
  },
  {
    id: 12,
    time: "December",
  },
];

const Homepage = () => {
  const token = useSelector((state) => state.auth.token);

  // NOW SHOWING
  const [nowShowing, setNowShowing] = useState([]);
  useEffect(() => {
    const fetchNowShowing = async () => {
      try {
        const response = await http().get("/movies/nowShowing");
        setNowShowing(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNowShowing();
    cancelTransaction();
  }, []);

  //UP COMING

  const [upComing, setUpComing] = useState([]);
  const [selectMonth, setSelectMonth] = useState(1);
  useEffect(() => {
    const fetchUpComing = async () => {
      try {
        const response = await http().get(
          `/movies/upComingMovies?month=${selectMonth}`
        );
        setUpComing(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpComing();
  }, [selectMonth]);

  return (
    <>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20">
        <div className="flex-1 text-center ">
          <div className="text-2xl md:text-5xl font-semibold leading-relaxed text-[#FAAB78]">
            Find out now!
          </div>
          <div className="text-lg md:text-2xl font-extralight">
            Watch and Happy your favorite movie with your Family and Friends
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={HomepageBanner} alt="banner" title="Banner" />
        </div>
      </div>
      {/* NOW SHOWING */}
      <div className="bg-[#EF9A53] px-10 md:px-20 py-20">
        {/* Movie now showing */}
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <div className="md:text-2xl text-lg font-bold">Now Showing</div>
            <div className="text-medium font-semibold">
              <Link to="/ViewAll">View All</Link>
            </div>
          </div>
          {nowShowing[0] ? (
            <div className="flex gap-8 mt-8 md:px-8 px-0 overflow-x-auto ">
              {nowShowing.map((item) => (
                <div
                  className="relative md:w-auto w-[150px] md:h-auto h-[403px]"
                  key={item.id}
                >
                  <div className="md:w-auto flex flex-col md:p-8 p-3 border-2 items-center border-[#C539B4] rounded-lg text-center h-full md:h-auto">
                    <img
                      src={item.picture}
                      alt={item.title}
                      title={item.title}
                      className="rounded-lg md:w-[180px] w-[125px]"
                    ></img>
                    <div className="flex flex-col text-center w-full items-center md:flex-auto flex-1">
                      <div className="pt-6 pb-3 min-h-[100px] md:flex-auto flex-1">
                        <div className="md:text-lg text-sm font-bold text-white mb-2 md:w-[180px] w-32">
                          {" "}
                          {item.title}{" "}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-white">{item.genre}</div>
                        <Link
                          to={"/MovieDetail/" + item.id}
                          className="btn bg-[#C539B4] py-2 px-4 text-medium text-white rounded-md font-medium w-[100px] mt-3"
                        >
                          Details{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      {/* UPCOMING */}
      <div className="md:px-20 px-5 md:py-15 py-5">
        {/* TITLE UPCOMINGMOVIE */}
        <div className="container mx-auto">
          <div className="items-center justify-between flex-row flex">
            <div className="md:text-2xl text-lg font-bold">Up Coming</div>
            <div className="text-medium font-semibold">
              <Link to="/ViewAll">View All</Link>
            </div>
          </div>
          <div className="overflow-x-auto flex">
            {month.map((time) => {
              return (
                <button
                  key={time.id}
                  onClick={() => setSelectMonth(time.id)}
                  className="mt-5 mr-3 border-2 btn bg-orange-300 rounded-md md:w-32 w-20 items-center justify-center"
                >
                  <div className="font-bold md:text-lg text-sm">{time.time}</div>
                </button>
              );
            })}
          </div>
          {upComing[0] ? (
            <div className="flex gap-8 mt-8 md:px-8 px-1 overflow-x-auto">
              {upComing.map((item) => (
                <div
                  className="relative md:w-auto w-[150px] md:h-auto h-[403px]"
                  key={item.id}
                >
                  <div className="md:h-auto h-full md:w-auto flex flex-col md:p-8 p-3 border-2 items-center border-[#C539B4] rounded-lg text-center">
                    <img
                      src={item.picture}
                      alt={item.title}
                      title={item.title}
                      className="rounded-lg md:w-[180px] w-[125px]"
                    ></img>
                    <div className="flex flex-col text-center w-full items-center md:flex-auto flex-1">
                      <div className="pt-6 pb-3 min-h-[100px] md:flex-auto flex-1">
                        <div className="items-center md:text-lg text-sm font-bold mb-2 md:w-[180px] w-32">
                          {" "}
                          {item.title}{" "}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-slate-400">
                          {item.genre}
                        </div>
                        <Link
                          to={"/MovieDetail/" + item.id}
                          className="btn bg-[#C539B4] py-2 px-4 text-medium text-white rounded-md font-medium w-[100px] mt-3"
                        >
                          Details{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      {/* MOVIEGOER */}
      <div className="md:px-20 px-5 md:py-20 py-5">
        <div className="shadow-lg text-center w-full rounded-md py-10">
          <div>
            <p>Be the vanguard of the</p>
            <p className="font-bold text-4xl leading-relaxed text-[#FAAB78]">
              Moviegoers
            </p>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Type your Email"
                className="input"
              ></input>
              <button className="py-3 px-6 rounded-md ml-3 font-bold btn bg-[#C539B4]">
                Join Now
              </button>
            </form>
          </div>
          <div className="mt-10 text-sm	leading-6">
            <p>By Joining you as a Cinemnar member,</p>
            <p>we will always send you the latest updates via email.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
