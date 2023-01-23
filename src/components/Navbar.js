import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar.jpg";
import NavMenu from "../assets/images/nav-menu.png";

const Navbar = () => {


  return (
    <nav className="flex px-10 md:px-20 py-[30px] items-center relative">
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
      <div className="max-[768px]:hidden">
        <Link
          to="/Signin"
          className="btn w-[100px] bg-[#C539B4] font-bold mr-[40px] px-5 py-3 rounded-lg"
        >
          Sign In
        </Link>
        <Link
          to="/Signup"
          className="btn w-[100px] bg-[#C539B4]  font-bold px-5 py-3 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
      <div className="group hidden max-[768px]:block">
        <div>
          <img src={NavMenu} alt="" />
        </div>
        <div className="hidden w-full group-hover:block absolute right-0 py-2 pl-4 pr-8 bg-white">
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
              <Link to="/Signin">Sign In</Link>
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

export default Navbar;
