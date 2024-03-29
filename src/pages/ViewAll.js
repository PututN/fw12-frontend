import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import http from "../helpers/http";
import { ArrowLeft, ArrowRight } from "react-feather";
import Skeleton from "../components/Skeleton";

const ViewAll = () => {
  const token = useSelector((state) => state.auth.token);
  const [ViewAll, setViewAll] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchViewAll = async () => {
      try {
        const response = await http().get(
          `/movies?page=${page}&limit=8&sort=${sort}&sortBy=title&search=${search}`
        );
        setViewAll(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchViewAll();
  }, [page, sort, search]);
  //handle page
  const pagePrev = () => {
    setPage(page - 1);
  };
  const pageNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div>
        <div className="bg-[#F2DEBA] md:px-20 md:py-20 px-5 py-10">
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="flex-1 font-bold flex text-2xl">List Movie</div>
            <div className="flex justify-center items-center rounded-md p-2">
              <select
                name="sort"
                onChange={(e) => setSort(e.target.value)}
                className="w-32 p-2 rounded-lg font-normal bg-[ #FCFDFE] "
              >
                <option value="sort" className="hidden font-normal">
                  Sort
                </option>
                <option value="ASC">A - Z</option>
                <option value="DESC">Z - A</option>
              </select>
            </div>
            <div className="flex items-center justify-center bg-[ #FCFDFE] ml-5 border-1 border-[#DEDEDE]">
              <div>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search Movie Name..."
                  className="p-2 font-normal rounded-lg"
                ></input>
              </div>
            </div>
          </div>
          <div className="bg-white md:py-[20px] py-5 md:px-[30px] px-3 mt-5">
            {ViewAll[0] ? (
              <div className="flex gap-8 flex-wrap justify-center">
                {ViewAll.map((item) => (
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
                          <div className="md:text-lg text-sm font-bold mb-2 md:w-[180px] w-32">
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
          <div className="flex justify-around mt-8 mb-3">
            {page > 1 ? (
              <button
                onClick={pagePrev}
                className="btn bg-[#C539B4] flex gap-3"
              >
                <ArrowLeft />
                <div>Prev</div>
              </button>
            ) : (
              <button
                onClick={pagePrev}
                disabled={true}
                className="btn bg-[#C539B4] flex gap-3"
              >
                <ArrowLeft />
                <div>Prev</div>
              </button>
            )}
            <button
              onClick={pageNext}
              disabled={ViewAll.length < 8}
              className="btn bg-[#C539B4] flex gap-3"
            >
              <div>Next</div>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAll;
