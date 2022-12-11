import Cinemas from "../../assets/images/img-footer2.png";
import { Link } from "react-router-dom";

const TicketActive = () => {
  return (
    <>
      <div className="bg-white rounded-md p-10 mt-7">
        <div className="flex">
          <div className="flex-col flex-1">
            <h3 className="text-sm	leading-6 text-[#AAAAAA] mb-3">Monday, 10 March 2020 - 04:00pm</h3>
            <h1 className="text-2xl text-xl	font-semibold	leading-9	">Thor: Ragnarok</h1>
          </div>
          <div className="flex items-center">
            <img src={Cinemas} alt="" />
          </div>
        </div> 
        <div className="border-2 border my-5"></div>
        <div className="flex justify-between">
          <div className="bg-[#6E7191] text-white rounded-md text-center p-2 w-1/4">
            Ticket Expired
          </div>
          <Link
            to="/TicketResultExpired"
            className="flex items-center leading-8	text-lg	text-[#AAAAAA]"
          >
            See Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default TicketActive;
