import { Link } from "react-router-dom";

const MenuHistory = () => {
  return (
    <>
      <div className="bg-white p-7 rounded-md items-center">
        <Link to="/profile" className="leading-8 text-lg mr-16 text-[#AAAAAA]">
          Account Setting
        </Link>
        <Link to="/" className="leading-8 text-lg text-[#14142B] font-semibold">
          Order History
        </Link>
      </div>
    </>
  );
};

export default MenuHistory;
