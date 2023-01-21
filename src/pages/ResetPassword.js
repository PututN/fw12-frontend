import { Link, useNavigate } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
import { Eye, EyeOff } from "react-feather";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { setErr } from "../redux/reducers/authReducers";
import { ResetPasswordAction } from "../redux/actions/authActions";

YupPassword(Yup);

const ResetPasswordSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .matches(/^[0-9]+$/, "Code must be only number"),
  password: Yup.string()
    .password()
    .min(6, "Password must be at least 6 characters")
    .minLowercase(1, "Password must have at least one lowercase letter")
    .minUppercase(1, "Password must have at least one uppercase letter")
    .minNumbers(1, "Password must have at least one number")
    .minSymbols(1, "Password must have at least one symbol")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, token } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
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

  const email = useSelector((state) => state.auth.email.email);

  const handleSubmit = async (value) => {
    try {
      const { password, confirmPassword, code } = value;
      dispatch(
        ResetPasswordAction({
          email,
          password,
          code,
          confirmPassword,
          cb: () => navigate("/Signin"),
        })
      );

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      {/* left */}
      <div className="w-[60%] h-screen max-[768px]:hidden">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full relative"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#E8F3D6] opacity-80">
            <div className="flex-col h-full w-11/12 px-[50px] py-[50px]">
              <div className="mb-2.5">
                <img src={Logo} alt="Cinemnar" className="h-[150px]" />
              </div>
              <div className="font-bold text-4xl leading-10	mb-[20px]">
                Lets reset your password
              </div>
              <div className="leading-8	font-normal	text-2xl mb-[20px]">
                To be able to use your account again, please complete the
                following steps.
              </div>
              <div className="text-black font-bold">
                <div className="flex items-center text-2xl mt-8 relative">
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px]">
                    1
                  </div>
                  <p>Fill your complete email</p>
                </div>
                <div className="flex items-center text-2xl mt-8 relative">
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px]">
                    2
                  </div>
                  <p>Check your email</p>
                </div>
                <div className="flex items-center text-2xl mt-8 relative">
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px] bg-[#3A8891]">
                    3
                  </div>
                  <p>Enter your new password</p>
                </div>
                <div className="flex items-center text-2xl mt-8">
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12">
                    4
                  </div>
                  <p>Done</p>
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

        <h1 className="mb-[12px] text-[30px] font-bold  max-[768px]:text-[20px]">
          Fill your complete password
        </h1>
        <p className="text-[18px] mb-[38px] font-light">
          set your new password
        </p>
        <Formik
          initialValues={{ code: "", password: "", confirmPassword: "" }}
          onSubmit={handleSubmit}
          validationSchema={ResetPasswordSchema}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <div className="flex  flex-col">
                <label className="mb-2.5" htmlFor="email">
                  Code
                </label>
                <Field
                  type="text"
                  name="code"
                  placeholder="Write your code"
                  className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
                ></Field>
                {errors.code && touched.code ? (
                  <div className="text-red-500">{errors.code}</div>
                ) : null}
              </div>
              <div className="flex my-3 flex-col relative">
                <label className="mb-2.5">Password</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  placeholder="Write your password"
                  name="password"
                  className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
                ></Field>
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}

                {showPassword ? (
                  <Eye
                    className="absolute top-11 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-11 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className="flex  flex-col relative">
                <label className="mb-2.5">Confirm Password</label>
                <Field
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Write your confirm password"
                  name="confirmPassword"
                  className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
                ></Field>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-500">{errors.confirmPassword}</div>
                ) : null}

                {showPassword2 ? (
                  <Eye
                    className="absolute top-11 right-5"
                    onClick={() => setShowPassword2(!showPassword2)}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-11 right-5"
                    onClick={() => setShowPassword2(!showPassword2)}
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={!dirty || loading}
                className=" btn bg-[#C539B4] w-full my-5"
              >
                Submit
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ResetPassword;
