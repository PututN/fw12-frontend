import Background from "../assets/images/Logo-Bg.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
import React, { useEffect, useState } from "react";
import { setErr } from "../redux/reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/authActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Eye, EyeOff } from "react-feather";

YupPassword(Yup);

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .required("required")
    .matches(/^[0-9]+$/, "Phone Number must be only number")
    .min(10, "Minimal 10 number")
    .max(13, "Max 13 number"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6 Char")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "min uppercase 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = async (value) => {
    try {
      const firstName = value.firstName;
      const lastName = value.lastName;
      const email = value.email;
      const phoneNumber = value.phoneNumber;
      const password = value.password;
      dispatch(
        registerAction({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          cb: () => navigate("/"),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

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
          <img
            src={Logo}
            alt="cinemnar"
            className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]"
          ></img>
        </div>
        <h1 className="mb-[12px] text-[48px] font-bold max-[768px]:text-[36px]">
          Sign Up
        </h1>
        <p className="text-[18px] mb-[38px] font-light max-[768px]:">
          Fill your additional details
        </p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <div className="flex  flex-col">
                <label className="mb-2.5">First Name</label>
                <Field
                  type="text"
                  placeholder="Write your first name"
                  className="input"
                  name="firstName"
                ></Field>
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="flex  flex-col mt-[15px]">
                <label className="mb-2.5">Last Name</label>
                <Field
                  type="text"
                  placeholder="Write your last name"
                  className="input"
                  name="lastName"
                ></Field>
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500">{errors.lastName}</div>
                ) : null}
              </div>
              <div className="flex  flex-col mt-[15px]">
                <label className="mb-2.5">Phone Number</label>
                <Field
                  type="text"
                  placeholder="Write your phone number"
                  className="input"
                  name="phoneNumber"
                ></Field>
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-red-500">{errors.phoneNumber}</div>
                ) : null}
              </div>
              <div className="flex  flex-col mt-[15px]">
                <label className="mb-2.5">Email</label>
                <Field
                  type="email"
                  placeholder="Write your email"
                  className="input"
                  name="email"
                ></Field>
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>

              <div className="flex  flex-col mt-[15px] relative">
                <label className="mb-2.5">Password</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  placeholder="Write your password"
                  className="input"
                  name="password"
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
                className="font-bold btn bg-[#C539B4] mt-8  mb-5 w-full"
              >
                Sign Up
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
                  Already have account ?{" "}
                  <Link
                    to="/Signin"
                    className="underline underline-offset-4  text-[#C539B4] font-medium"
                  >
                    Sign In
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

export default Signup;
