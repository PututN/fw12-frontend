import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

  // const MoviesUpComing = [
  //   {
  //     id: 1,
  //     title: "Black Widow",
  //     picture: require("../../assets/images/img-icon4.png"),
  //     genre: "Action, Adventure, Sci-fi",
  //   },
  // ];
  
const UpComingMovies = () => {
  const [Char, SetChar] = React.useState([])
  React.useEffect(() => {
    GetMovies().then((data) => {
      SetChar(data)
    })
  }, [])
  const GetMovies = async () => {
    const {data} = await axios.get("http://localhost:8888/movies/upComingMovies")
    const res = await data.results
    return res
  }
  const month = [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  return (
    <>
      <div className="px-20 pt-20 pb-20">
        {/* TITLE UPCOMINGMOVIE */}
        <div className="container mx-auto">
          <div className="items-center justify-between flex-row flex">
            <div className="text-2xl font-bold">Up Coming</div>
            <div className="text-medium font-semibold">
              <Link to="/ViewAll">View All</Link>
            </div>
          </div>
          {/* MONTH */}
          <div className="flex flex-row gap-5 mt-10 overflow-x-auto">
            {month.map((item, index) => (
              <button
                key={`month-${index}`}
                className="border-2 w-[100px] border-[#0E5E6F] rounded-md flex justify-center items-center p-2 hover:bg-[#FFDCA9] text-[#3A8891] hover:text-white font-bold hover:shadow-lg"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto">
             {Char.map((item) => (
              <div className="relative" key={item.id}>
                <div className="flex flex-col p-8 border-2 items-center border-[#0E5E6F] rounded-lg text-center hover:bg-white w-full h-full">
                  <img
                    src={item.picture}
                    alt={item.title}
                    title={item.title} className="rounded-lg"
                  ></img>
                  <div className="flex flex-col text-center w-full items-center">
                    <div className="pt-6 pb-3 min-h-[100px]">
                      <div className="text-lg font-bold mb-2"> {item.title} </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="text-xs text-slate-400">{item.genre}</div>
                    </div>
                    <button className="bg-[#3A8891] hover:bg-[#0E5E6F] py-2 px-4 text-medium text-white rounded-md font-medium w-[100px] mt-3">
                      <Link to="/MovieDetail">Details</Link>
                      
                    </button>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingMovies;
