import NavbarAdmin from "../components/NavAdmin";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import picture from "../assets/images/img-icon1.png";
import Premier1 from "../assets/images/img-footer1.png";
import Premier2 from "../assets/images/img-footer2.png";
import Premier3 from "../assets/images/img-footer3.png";
import { Plus } from "react-feather";

const ManageSchedule = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="bg-[#F2DEBA] px-20 py-20">
        <h1 className="font-bold text-2xl mb-8 ">Form Schedule</h1>
        <div className="bg-white flex py-7 px-7 w-full rounded-xl">
          <div className="p-5 border-2 border-[#FAAB78] rounded-xl h-fit flex w-fit">
            <img className="w-46 h-64 bg-cover" src={picture} alt="" />
          </div>
          <div className="flex-1 w-full ml-7">
            <div className="flex-col gap-10 mb-5">
              <div className="mb-2.5">Movie</div>
              <select className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full">
                <option className="hidden">Select Movie</option>
                <option>Spiderman</option>
                <option>Cek Toko Sebelah 2</option>
              </select>
              <div className="my-2.5">Price</div>
              <input
                type="text"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="10"
              ></input>
              <div className="my-2.5">Premiere</div>
              <div className="flex gap-4 items-center">
                <div>
                  <img src={Premier1} alt="" />
                </div>
                <div>
                  <img src={Premier2} alt="" />
                </div>
                <div className="p-4 rounded-xl shadow-md">
                  <img src={Premier3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full ml-7">
            <div className="flex-col gap-10 mb-5">
              <div className="mb-2.5">Location</div>
              <select className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full">
                <option className="hidden">Select Location</option>
                <option>Purwokerto</option>
                <option>Yogyakarta</option>
              </select>
              <div className="flex mb-2.5">
                <div className="flex-col mr-7">
                  <div className="my-2.5">Date Start</div>
                  <input
                    type="date"
                    className="p-3 mr-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="2"
                  ></input>
                </div>
                <div className="flex-col">
                  <div className="my-2.5 flex-col">Date End</div>
                  <input
                    type="date"
                    className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                    placeholder="3"
                  ></input>
                </div>
              </div>
              <div className="mb-2.5">Time</div>
              <div className="flex gap-4 items-center">
                <div className="grid grid-cols-4 gap-5 items-center">
                  <div className="border-2 py-1 rounded-lg px-5 flex items-center justify-center ">
                    <Plus />
                  </div>
                  <div>08:30am</div>
                  <div>10:30am</div>
                  <div>12:00am</div>
                  <div>04:30pm</div>
                  <div>07:30pm</div>
                  <div>08:30pm</div>
                  <div>08:30pm</div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Link
                  to="#"
                  className="mr-10 p-3 text-center w-1/2 border-2 border-black rounded-lg text-white font-bold bg-[#665A48] hover:bg-[#3A8891]"
                >
                  Reset
                </Link>
                <Link
                  to="#"
                  className="p-3 text-center w-1/2 border-2 border-black rounded-lg font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-7">
          <div className="flex-1 flex font-bold text-2xl">Data Schedule</div>
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
          <div className="flex items-center justify-center bg-[ #FCFDFE] rounded-md ml-5 border-1 border-[#DEDEDE]">
            <select
              name="sort"
              className="p-2 rounded-lg font-normal bg-[ #FCFDFE] "
            >
              <option value="sort" className="hidden font-normal">
                Location
              </option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Purwokerto">Purwokerto</option>
              <option value="Solo">Solo</option>
            </select>
          </div>
          <div className="flex items-center justify-center bg-[ #FCFDFE] rounded-md ml-5 border-1 border-[#DEDEDE]">
            <select
              name="sort"
              className="p-2 rounded-lg font-normal bg-[ #FCFDFE] "
            >
              <option value="sort" className="hidden font-normal">
                Movie
              </option>
              <option value="Spiderman">Spiderman</option>
              <option value="Cek Toko Sebelah 2">Cek Toko Sebelah 2</option>
              <option value="Black Panther">Black Panther</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full h-full px-10 py-10 bg-white">
          <div className="bg-white rounded-lg p-3 border border-2 border-black">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier1} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">ebv.id</div>
                <div className="font-light text-sm">
                  Whatever street No.12, South Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-2 border-black">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier2} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">CineOne21</div>
                <div className="font-light text-sm">
                  Downcare street No. 21, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>

            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-2 border-black ">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier3} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">hiflix Cinema</div>
                <div className="font-light text-sm">
                  Colonel street No. 2, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-2 border-black">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier1} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">ebv.id</div>
                <div className="font-light text-sm">
                  Whatever street No.12, South Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-2 border-black">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier2} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">CineOne21</div>
                <div className="font-light text-sm">
                  Downcare street No. 21, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-2 border-black">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Premier3} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">hiflix Cinema</div>
                <div className="font-light text-sm">
                  Colonel street No. 2, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="mt-5 justify-between flex w-full">
              <Link
                to="#"
                className="border-[#3A8891] hover:drop-shadow-2xl shadow-black border border-2 text-[#3A8891] text-medium text-white text-center rounded-md font-medium flex-1 mr-3"
              >
                Update{" "}
              </Link>
              <Link
                to="#"
                className="border-[#ED2E7E]  hover:drop-shadow-2xl shadow-black border border-2 text-[#ED2E7E] text-medium text-white text-center rounded-md font-medium flex-1"
              >
                Delete{" "}
              </Link>
            </div>
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
    </>
  );
};

export default ManageSchedule;
