import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const ViewAllComponent = () => {
  const [Char, setChar] = React.useState([]);
  console.log(Char);
  React.useEffect(() => {
    GetViewMovies().then((data) => {
      setChar(data);
    });
  }, []);
  const GetViewMovies = async () => {
    const { data } = await axios.get("http://localhost:8888/movies?limit=8");
    const res = await data.results;
    return res;
  };
  // const MoviesUpComing = [
  //   {
  //     id: 1,
  //     title: "Black Widow",
  //     picture: require("../assets/images/img-icon4.png"),
  //     genre: "Action, Adventure, Sci-fi",
  //   },
  // ];

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
      <div className="bg-[#F2DEBA] px-20 py-20">
        <div className="flex">
          <div className="flex-1 font-bold flex text-2xl">List Movie</div>
          <div className="flex justify-center items-center rounded-md p-2">
            <select
              name="sort"
              className="p-2 rounded-lg font-normal bg-[ #FCFDFE] "
            >
              <option value="sort" className="hidden font-normal">
                Sort
              </option>
              <option value="sort">Ascending</option>
              <option value="sort">Descending</option>
              <option value="sort">Title</option>
            </select>
          </div>
          <div className="flex items-center justify-center bg-[ #FCFDFE] ml-5 border-1 border-[#DEDEDE]">
            <div>
              <input
                type="text"
                placeholder="Search Movie Name..."
                className="p-2 font-normal rounded-lg"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-10 overflow-x-auto">
          {month.map((item, index) => (
            <button
              key={`month-${index}`}
              className="border-2 w-[100px] border-[#FAAB78] rounded-md flex justify-center items-center p-2 hover:bg-[#0E5E6F] text-[#FFDCA9] hover:text-white font-bold hover:shadow-lg bg-[#3A8891]"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="bg-white py-[20px] px-[30px] mt-5">
          <div className="flex gap-8 flex-wrap justify-center">
            {Char.map((item) => (
              <div className="relative" key={item.id}>
                <div className="flex flex-col p-8 border-2 items-center border-[#FAAB78] rounded-lg text-center">
                  <img
                    src={item.picture}
                    alt={item.title}
                    title={item.title}
                    className="rounded-lg w-[180px]"
                  ></img>
                  <div className="flex flex-col text-center w-full items-center">
                    <div className="pt-6 pb-3 min-h-[100px]">
                      <div className="text-lg font-bold mb-2 w-[180px]">
                        {" "}
                        {item.title}{" "}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="text-xs text-slate-400">{item.genre}</div>
                    </div>
                    <Link
                      to={"/MovieDetail/" + item.id}
                      className="bg-[#3A8891] hover:bg-[#0E5E6F] py-2 px-4 text-medium text-white rounded-md font-medium w-[100px] mt-3"
                    >
                      Details{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 mb-3">
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#FAAB78] rounded-lg hover:bg-[#3A8891] hover:text-white focus:bg-[#3A8891] focus:text-white">
              1
            </button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#FAAB78] rounded-lg hover:bg-[#3A8891] hover:text-white focus:bg-[#3A8891] focus:text-white">
              2
            </button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#FAAB78] rounded-lg hover:bg-[#3A8891] hover:text-white focus:bg-[#3A8891] focus:text-white">
              3
            </button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#FAAB78] rounded-lg hover:bg-[#3A8891] hover:text-white focus:bg-[#3A8891] focus:text-white">
              4
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllComponent;
