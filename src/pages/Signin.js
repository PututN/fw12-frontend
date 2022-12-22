import { Link, useNavigate } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const { error, loading } = useSelector((state) => state.auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction({ ...value, cb: () => navigate("/") }));
  };
  // const [alert, setAlert] = React.useState(false)
  // const navigate = useNavigate()

  // const LoginReq = (event) => {
  //   const {value:email} = event.target.email;
  //   const {value:password} = event.target.password;
  //   if(email === 'admin@mail.com' && password === '1234') {
  //     navigate('/Home')
  //   } else {
  //     setAlert(true)
  //   }
  //   event.preventDefault();
  // };
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
      <div className="w-[40%] px-[40px] py-[100px] max-[768px]:w-screen max-[768px]:py-[50px] max-[375px]:pt-[15px]">
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="cinemnar"
            className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]"
          ></img>
        </div>
        <h1 className="mb-[12px] text-[48px] font-bold max-[768px]:text-[36px]">
          Sign In
        </h1>
        <p className="text-[18px] mb-5 font-light">
          Sign in with your data that you entered during your registration
        </p>
        {error && (
          <div className="bg-red-300 border border-red-700 rounded-md px-5 py-3 font-white text-center mb-2.5 font-semibold">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col">
            <label className="mb-2.5">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              className="input"
              onChange={(event) =>
                setValue({ ...value, email: event.target.value })
              }
              value={value.email}
            ></input>
          </div>
          <div className="flex  flex-col mt-[15px]">
            <label className="mb-2.5">Password</label>
            <input
              type="Password"
              name="password"
              placeholder="Write your password"
              className="input"
              onChange={(event) =>
                setValue({ ...value, password: event.target.value })
              }
              value={value.password}
            ></input>
          </div>
          <button
            type="submit"
            disabled={loading}
            className=" w-full font-bold text-center mt-[32px] rounded-xl p-2 mb-5 bg-[#0E5E6F] hover:bg-[#3A8891] text-white">
            Sign In
          </button>
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
