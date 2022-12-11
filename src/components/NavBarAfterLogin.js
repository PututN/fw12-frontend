import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar.jpg";
import searchIcon from "../assets/images/nav-search.png";
import profileImage from "../assets/images/nav-photo.png";
import NavMenu from "../assets/images/nav-menu.png";

const NavBarAfterLogin = () => {
  return (
    <nav className="flex px-[80px] py-[30px] items-center relative">
      <div className="flex items-center flex-1">
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="Cinemnar" className="h-20 w-auto"></img>
            </Link>
          </li>
        </ul>
        <ul className="ml-[40px] max-[768px]:hidden">
          <li>
            <Link to="/" className="font-semibold	text-base	leading-5	">
              Home
            </Link>
          </li>
        </ul>
        <ul className="ml-[40px] max-[768px]:hidden">
          <li>
            <Link to="/ViewAll" className="font-semibold	text-base	leading-5	">
              List Movie
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-10 max-[768px]:hidden">
        <div className="group flex hover:border-2 hover:border-[#dedede] hover:bg-[#FEFCF3] rounded-xl">
          <img className="pl-3 mr-3" src={searchIcon} alt="search" />
          <div>
            <input
              className="hidden group-hover:flex py-1 pr-2.5 text-xs rounded-2xl bg-[#FEFCF3] focus:outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search Movie Name ..."
            />
          </div>
        </div>
        <div className="group relative">
          <img src={profileImage} alt="profile" />
          <div className="hidden group-hover:block absolute right-0 border-2 border-[#dedede] bg-[#FEFCF3] py-2 pl-4 pr-8">
            <div>
              <Link to="#">Profile</Link>
            </div>
            <div>
              <Link to="/Signin">Logout</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="group hidden max-[768px]:block">
        <div>
          <img src={NavMenu} alt="" />
        </div>
        <div className="hidden w-full group-hover:block absolute right-0 py-2 pl-4 pr-8 bg-white">
          <div className="relative">
            <div className="absolute top-3 left-4">
              <img src={searchIcon} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="
              w-full pl-16 border-1 border py-2.5"
            />
          </div>
          <div className="font-bold text-center">
            <div className="pt-3">
              <div className="border border-1 mt-3 mb-3"></div>

              <Link to="/">Home</Link>
              <div className="border border-1 mt-3 mb-3"></div>
            </div>
            <div className="">
              <Link to="/ViewAll">List Movie</Link>
              <div className="border border-1 mt-3 mb-3"></div>
            </div>
            <div className="">
              <Link to="/Profile">Profile</Link>
              <div className="border border-1 mt-3 mb-3"></div>
            </div>
            <div className="">
              <Link to="/Signin">Logout</Link>
              <div className="border border-1 mt-3 mb-3"></div>
            </div>
            <div>
              <p className="font-thin py-6">
                © 2022 Cinemnar. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarAfterLogin;
