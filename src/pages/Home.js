import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import HomepageBanner from "../assets/images/img-homepage.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../helpers/http";

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
  }, []);

  //UP COMING

  const [upComing, setUpComing] = useState([]);
  useEffect(() => {
    const fetchUpComing = async () => {
      try {
        const response = await http().get("/movies/upComingMovies");
        setUpComing(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpComing();
  }, []);

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
      <div className="bg-[#EF9A53] md:h-[550px] h-[470px] px-10 md:px-20 py-20">
        {/* Movie now showing */}
        <div className="mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="md:text-2xl text-lg font-bold">Now Showing</div>
            <div className="text-medium font-semibold">
              <Link to="/ViewAll">View All</Link>
            </div>
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto ">
            {nowShowing.map((movie) => (
              <div className="relative group w-[1000px]" key={movie.id}>
                <div className="flex flex-col p-2 border-2 border-[#FAAB78] items-center rounded-lg  text-center hover:bg-white">
                  <img
                    className="rounded-lg"
                    src={movie.picture}
                    alt={movie.title}
                    title={movie.title}
                  />
                  <div className="top-2/4 hidden group-hover:flex flex-col gap-2">
                    <div className="text-2x1 font-semibold w-[130px] mt-2">
                      {movie.title}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[130px]">{movie.genre}</div>
                    </div>
                    <Link
                      to={"/MovieDetail/" + movie.id}
                      className="btn bg-[#C539B4] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <div className="flex gap-8 mt-8 md:px-8 px-1 overflow-x-auto">
            {upComing.map((item) => (
              <div className="relative" key={item.id}>
                <div className="flex flex-col md:p-8 p-4 border-2 items-center justify-between border-[#C539B4] rounded-lg text-center hover:bg-white w-full h-full">
                  <img
                    src={item.picture}
                    alt={item.title}
                    title={item.title}
                    className="rounded-lg"
                  ></img>
                  <div className="flex flex-col text-center w-full items-center">
                    <div className="pt-6 pb-3 min-h-[100px]">
                      <div className="md:text-lg text-md font-bold mb-2">
                        {" "}
                        {item.title}{" "}
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="text-xs text-slate-400">
                          {item.genre}
                        </div>
                      </div>
                      <Link
                        to={"/MovieDetail/" + item.id}
                        className="btn bg-[#C539B4] py-2 px-4 text-medium text-white rounded-md font-medium mt-3"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
