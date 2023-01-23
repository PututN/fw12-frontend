import Footer from "../components/Footer";
import NavAdmin from "../components/NavAdmin";
import picture from "../assets/images/img-icon1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const ManageMovie = () => {
  const [Char, setChar] = React.useState([]);
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

  return (
    <div>
      <NavAdmin />
      <div className="bg-[#F2DEBA] px-20 py-20">
        <h1 className="font-bold text-2xl mb-6">Form Movie</h1>
        <div className="bg-white gap-10 p-10">
          <div className="flex gap-10">
            <div className="p-5 border-2 border-[#FAAB78] rounded-xl h-fit flex w-fit">
              <img src={picture} alt="" className="w-46 bg-cover" />
            </div>
            <div className="w-full flex-1">
              <div className="flex gap-9">
                <div className="flex flex-col flex-1">
                  <div className="mb-2.5">Movie Name</div>
                  <input
                    type="text"
                    className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="Spider-Man: Homecoming"
                  ></input>
                  <div className="my-2.5">Director</div>
                  <input
                    type="email"
                    className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="Jon Watts"
                  ></input>
                  <div className="my-2.5">Release date</div>
                  <input
                    type="email"
                    className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="07/05/2020"
                  ></input>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="mb-2.5">Category</div>
                  <input
                    type="text"
                    className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="Action, Adventure, Sci-Fi"
                  ></input>
                  <div className="my-2.5">Casts</div>
                  <input
                    type="email"
                    className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                  ></input>
                  <div className="flex">
                    <div className="flex-col mr-7">
                      <div className="my-2.5">Duration Hour</div>
                      <input
                        type="email"
                        className="p-3 mr-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="2"
                      ></input>
                    </div>
                    <div className="flex-col">
                      <div className="my-2.5 flex-col">Duration Minute</div>
                      <input
                        type="email"
                        className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="3"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2.5 flex-col">Synopsis</div>
          <input
            type="email"
            className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
            placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
            lives with his Aunt May, | "
          ></input>
          <div className="flex justify-end mt-10">
            <Link
              to="/ViewAll"
              className="mr-10 p-3 text-center w-1/5 border-2 border-black rounded-lg text-white font-bold bg-[#665A48] hover:bg-[#3A8891]"
            >
              Reset
            </Link>
            <Link
              to="/ViewAll"
              className="p-3 text-center w-1/5 border-2 border-black rounded-lg font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white"
            >
              Submit
            </Link>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="flex-1 font-bold flex text-2xl">Data Movie</div>
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
                      to="#"
                      className="border-[#3A8891] hover:drop-shadow-2xl shadow-black  border-2 text-[#3A8891] py-2 px-4 text-medium  rounded-md font-medium w-[100px] mt-3"
                    >
                      Update{" "}
                    </Link>
                    <Link
                      to="#"
                      className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black  border-2 text-[#ED2E7E] py-2 px-4 text-medium  rounded-md font-medium w-[100px] mt-3"
                    >
                      Delete{" "}
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
      <Footer />
    </div>
  );
};

export default ManageMovie;
