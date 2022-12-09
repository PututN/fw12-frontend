import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
import profileImage from "../assets/images/nav-photo.png";
import searchIcon from "../assets/images/nav-search.png";


const NavbarAdmin = () => {
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
              <Link to="/" className="font-semibold	text-base	leading-5	">
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="ml-[40px]">
            <li>
              <Link to="/ViewAll" className="font-semibold	text-base	leading-5	">
                Manage Movie
              </Link>
            </li>
          </ul>
          <ul className="ml-[40px]">
            <li>
              <Link to="/ViewAll" className="font-semibold	text-base	leading-5	">
                Manage Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="group flex hover:border-2 hover:border-[#dedede] hover:bg-[#FEFCF3] rounded-xl">
            <img src={searchIcon} alt="" className="pl-3 mr-3" />
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
      </div>
    </nav>

    // <div classname="flex items-center py-5 px-24 font-semibold md:px-5 lg:px-10">
    //   <div className="md:flex-1 lg:flex-1">
    //     <img src={Logo} alt=""></img>
    //   </div>
    //   <li className="flex-1 list-none ml-20 md:hidden lg:ml-10 lg:hidden">
    //     <Link to="#" className="px-7 md:px-0">
    //       Dashboard
    //     </Link>
    //     <Link to="#" className="px-7 md:px-0">
    //       Manage Movie
    //     </Link>
    //     <Link to="#" className="px-7 md:px-0">
    //       Manage Schedule
    //     </Link>
    //   </li>
    //   <div className="items-center flex gap-10 md:hidden lg:hidden">
    //     <div>
    //       <Search />
    //     </div>
    //     <div classname="dropdown dropdown-end">
    //       <img />
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavbarAdmin;
