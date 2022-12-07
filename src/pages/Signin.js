import { Link } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";

const Signin = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="w-[60%]">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full relative"
          style={{ backgroundImage: `url(${Background})` }}>
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#E8F3D6] opacity-80">
              <div className="flex items-center justify-center h-screen w-11/12">
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
      <div className="w-[40%] px-[40px] py-[100px]">
        <h1 className="mb-[12px] text-[48px] font-bold">Sign In</h1>
        <p className="text-[18px] mb-[38px] font-light">
          Sign in with your data that you entered during your registration
        </p>
        <form>
          <div className="flex  flex-col">
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
          <div className="bg-[#FFDCA9] text-center mt-[32px] rounded-xl p-2 mb-5">
            <Link to="/Home" className="font-bold">
              Sign In
            </Link>
          </div>
          <div className="text-center text-[16px]">
            <p className="mb-2.5 font-light">
              Forgot your password?{" "}
              <Link
                to="/ForgotPassword"
                className="underline underline-offset-4 text-[#46C2CB] font-medium"
              >
                Reset now
              </Link>
            </p>
            <p className="font-light">
              Don't have an account?{" "}
              <Link
                to="/Signup"
                className="underline underline-offset-4 text-[#46C2CB] font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
