import NavbarAdmin from "../components/NavAdmin";
import Footer from "../components/Footer";
import Grafik from "../assets/images/img-graphic.png";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="bg-[#F2DEBA] px-20 py-20 flex">
        <div className="w-3/4">
          <h1 className="font-bold text-lg">Dashboard</h1>
          <div className="mt-5">
            <img src={Grafik} alt="" />
          </div>
        </div>
        <div className="w-1/4 ml-10">
          <h3 className="font-bold text-lg">Filtered</h3>
          <div className="bg-white mt-5 p-5 rounded-md flex flex-col gap-5">
            <select className="select w-full border border-2 p-2">
              <option className="hidden">Select Movie</option>
              <option>Spiderman</option>
              <option>Cek Toko Sebelah 2</option>
            </select>
            <select className="select w-full border border-2 p-2">
              <option className="hidden">Select Premiere</option>
              <option>Ebv.id</option>
              <option>Cinema21</option>
              <option>hiflix</option>
            </select>

            <select className="select w-full border border-2 p-2 text-[#4E4B66]">
              <option className="hidden">Select Location</option>
              <option>Purwokerto</option>
              <option>Yogyakarta</option>
            </select>
            <Link
            to="/ViewAll"
            className="w-full p-3 text-center border-2 border-black rounded-lg text-white font-bold bg-[#665A48] hover:bg-[#3A8891]"
          >
            Reset
          </Link>
          <Link
            to="/ViewAll"
            className="w-full p-3 text-center border-2 border-black rounded-lg font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white"
          >
            Submit
          </Link>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
