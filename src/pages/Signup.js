import Background from "../assets/images/Logo-Bg.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar-removebg.png"

const Signup = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="w-[60%] max-[768px]:hidden">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full relative"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#E8F3D6] opacity-80">
              <div className="flex items-center justify-center h-full w-11/12">
                <div className="text-center">
                  <h1 className="text-7xl text-black font-bold">Cinemnar</h1>
                  <p className="text-5xl text-black font-thin">
                    Book, Watch, Happy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-[40%] px-[40px] py-[100px] max-[768px]:w-screen max-[768px]:py-[50px] max-[375px]:pt-[15px]">
        <div className="flex justify-center">
          <img src={Logo} alt="cinemnar" className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]"></img>
        </div>
        <h1 className="mb-[12px] text-[48px] font-bold max-[768px]:text-[36px]">Sign Up</h1>
        <p className="text-[18px] mb-[38px] font-light max-[768px]:">
          Fill your additional details
        </p>
        <form>
          <div className="flex  flex-col">
            <label className="mb-2.5">First Name</label>
            <input
              type="text"
              placeholder="Write your first name"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>
          <div className="flex  flex-col mt-[15px]">
            <label className="mb-2.5">Last Name</label>
            <input
              type="text"
              placeholder="Write your last name"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>
          <div className="flex  flex-col mt-[15px]">
            <label className="mb-2.5">Phone Number</label>
            <input
              type="number"
              placeholder="Write your phone number"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>
          <div className="flex  flex-col mt-[15px]">
            <label className="mb-2.5">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>

          <div className="flex  flex-col mt-[15px]">
            <label className="mb-2.5">Password</label>
            <input
              type="Password"
              placeholder="Write your password"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>

          <div className="bg-[#FFDCA9] text-center mt-[32px] rounded-xl p-2.5 mb-5">
            <Link to="/Home" className="font-bold">
              Sign Up
            </Link>
          </div>
          <div className="text-center text-[16px]">
            <p className="mb-2.5 font-light">
              Already have account ?{" "}
              <Link
                to="/Signin"
                className="underline underline-offset-4 text-[#46C2CB] font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
