import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar.jpg";

const Navbar = () => {
  return (
    <nav>
      <div className="flex px-[80px] py-[30px] items-center">
        <div className="flex items-center flex-1">
          <ul>
            <li>
              <Link to="/">
                <img src={Logo} alt="Cinemnar" className="h-20 w-auto"></img>
              </Link>
            </li>
          </ul>
          <ul className="ml-[40px]">
            <li>
              <Link to="/" className="font-semibold	text-base	leading-5	">Home</Link>
            </li>
          </ul>
          <ul className="ml-[40px]">
            <li>
              <Link to="/ViewAll" className="font-semibold	text-base	leading-5	">List Movie</Link>
            </li>
          </ul>
        </div>
        <div>
            <Link to='/Signin' className="bg-[#3A8891] hover:bg-[#0E5E6F] text-white font-bold mr-[40px] p-3 rounded-[10px]">Sign In</Link>
            <Link to='/Signup' className="bg-[#0E5E6F] hover:bg-[#3A8891] text-white font-bold p-3 rounded-[10px]">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
