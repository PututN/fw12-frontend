import { Link, useNavigate } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { setErr } from "../redux/reducers/authReducers";
import { Eye, EyeOff } from "react-feather";

YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6 Char")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "min uppercase 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
});

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, token } = useSelector((state) => state.auth);
  const handleSubmit = async (value) => {
    try {
      const email = value.email;
      const password = value.password;
      dispatch(loginAction({ email, password, cb: () => navigate("/") }));
    } catch (err) {
      console.log(err);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    // dispatch(cancelTransaction());
    if (error) {
      setTimeout(() => {
        dispatch(setErr());
      }, 3000);
    }
    if (token) {
      navigate("/");
    }

  }, [error]);

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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <div className="flex  flex-col">
                <label className="mb-2.5" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Write your email"
                  className="input"
                  // onChange={(event) =>
                  //   setValue({ ...value, email: event.target.value })
                  // }
                  // value={value.email}
                ></Field>
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex  flex-col mt-[15px] relative">
                <label className="mb-2.5" htmlFor="password">
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Write your password"
                  className="input"
                ></Field>
                {showPassword ? (
                  <Eye
                    className="absolute top-12 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-12 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}

                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={!dirty || loading}
                className=" btn bg-[#C539B4] w-full my-5"
              >
                Sign In
              </button>
              {loading && (
                <div className="text-center mb-3 text-blue-600 font-bold">
                  Loading...
                </div>
              )}
              {error && (
                <div className=" text-red-500 mb-3 text-center  font-bold">
                  {error}
                </div>
              )}

              <div className="text-center text-[16px]">
                <p className="mb-2.5 font-light">
                  Forgot your password?{" "}
                  <Link
                    to="/ForgotPassword"
                    className="underline underline-offset-4 text-[#C539B4] font-medium"
                  >
                    Reset now
                  </Link>
                </p>
                <p className="font-light">
                  Don't have an account?{" "}
                  <Link
                    to="/Signup"
                    className="underline underline-offset-4 text-[#C539B4] font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signin;
