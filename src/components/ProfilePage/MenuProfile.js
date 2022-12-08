import { Link } from "react-router-dom";

const MenuProfile = () => {
  return (
    <>
      <div className="bg-white p-7 rounded-md items-center">
        <Link to="/profile" className="leading-8 text-lg mr-16 text-[#14142B]">
          Account Setting
        </Link>
        <Link to="/" className="leading-8 text-lg text-[#AAAAAA]">
          Order History
        </Link>
      </div>
    </>
  );
};

export default MenuProfile;
