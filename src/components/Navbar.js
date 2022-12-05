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
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="ml-[40px]">
            <li>
              <Link to="/">List Movie</Link>
            </li>
          </ul>
        </div>
        <div>
            <Link to='/Signin' className="bg-[#FAAB78] mr-[40px] p-3 rounded-[10px]">Sign In</Link>
            <Link to='/' className="bg-[#FCF9BE] p-3 rounded-[10px]">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
