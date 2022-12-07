import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const NowShowing = () => {
  const [Char, Setchar] = React.useState([]); //data awal berupa array
  console.log(Char)
  React.useEffect(() => {
    GetMovies().then((data) => {
      Setchar(data);
    });
  }, []); //[] standar kode dijalankan ketika page nya direfresh

  const GetMovies = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/nowShowing");
    const res = await data.results;
    return res;
  };
  return (
    <>
      <div className="bg-[#F2DEBA] h-[550px] px-20 py-20">
        {/* Movie now showing */}
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl font-semibold">Now Showing</div>
            <div className="text-medium font-semibold">
              <Link to="/ViewAll">View All</Link>
            </div>
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto">
            {Char.map((movie) => (
              <div className="relative group" key={movie.id}>
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#0E5E6F] text-center hover:bg-white">
                  <img className="rounded-lg"
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
                    <button className="bg-[#3A8891] hover:bg-[#0E5E6F] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]">
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
export default NowShowing;
