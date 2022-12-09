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
        <h1 className="font-bold mb-8 text-xl">Form Schedule</h1>
        <div className="bg-white grid grid-cols-2 py-7 px-7 w-full">
          <div className="p-5 border-2 border-secondary rounded-xl h-fit flex w-fit">
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
                  <div className="border- py-1 rounded-lg px-5 flex -items-center justify-center ">
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
                    to="/ViewAll"
                    className="mr-10 p-3 text-center w-1/2 border-2 border-black rounded-lg text-white font-bold bg-[#665A48] hover:bg-[#3A8891]"
                  >
                    Reset
                  </Link>
                  <Link
                    to="/ViewAll"
                    className="p-3 text-center w-1/2 border-2 border-black rounded-lg font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white"
                  >
                    Submit
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageSchedule;
