import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const DetailMovie = () => {
  const { id } = useParams();
  const [Char, SetChar] = React.useState({});
  React.useEffect(() => {
    getDetailChar();
  }, []);
  const getDetailChar = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/" + id);
    SetChar(data.results);
  };
  
  let duration = Char?.duration
  let jam = String(duration).split(':').slice(0,1).join(':')
  let menit = String(duration).split(':')[1]

  let NewDate = new Date(Char.releaseDate).toDateString()
  let bulan = NewDate.split(' ')[1]
  let tanggal = NewDate.split(' ')[2]
  let tahun = NewDate.split(' ')[3]

  return (
    <>
      <div className="px-[80px] py-[30px] flex">
        <div className="border-2 border-[#FAAB78] rounded-xl">
          <div className="p-[20px]">
            <img
              className="rounded-xl w-[236px]"
              src={Char.picture}
              alt={Char.title}
            />
          </div>
        </div>
        <div className="ml-[50px] flex-1">
          <div className="mb-5">
            <div className="font-bold text-xl">{Char?.title}</div>
            <div className="font-normal mt-1 mb-5 text-lg">{Char?.genre}</div>
            <div className="flex text-xs font-normal">
              <div className="block mr-[50px]">
                <div className="mb-4">
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                    Release date
                  </div>
                  <div>{bulan} {tanggal}, {tahun}</div>
                </div>
                <div>
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                    Duration
                  </div>
                  <div>{jam} Hours {menit} Minutes</div>
                </div>
              </div>
              <div className="block">
                <div className="mb-4">
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                    Directed by
                  </div>
                  <div>{Char.director}</div>
                </div>
                <div>
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">
                    Casts
                  </div>
                  <div>{Char?.casts},...</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-1 border-[#DEDEDE]"></hr>
          <div className="font-semibold mt-3 mb-1	text-xl	leading-8	">
            Synopsis
          </div>
          <p className="font-normal	text-base	leading-8	text-[#4E4B66]">
            {Char.synopsis}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
