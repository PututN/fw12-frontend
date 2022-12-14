import Background from "../assets/images/Logo-Bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/authActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);
// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .required("required")
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Minimal 10 number")
    .max(13, "Minimal 13 number"),
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
  const { error, loading } = useSelector((state) => state.auth);
  // const [value, setValue] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  // });
  const handleSubmit = (value) => {
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
        {error && (
          <div className="bg-red-300 border border-red-700 rounded-md px-5 py-3 text-white text-center mb-2.5 font-semibold">
            {error}
          </div>
        )}
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
                  // onChange={(event) =>
                  //   setValue({ ...value, firstName: event.target.value })
                  // }
                  // value={value.firstName}
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
                  // onChange={(event) =>
                  //   setValue({ ...value, lastName: event.target.value })
                  // }
                  // value={value.lastName}
                ></Field>
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500">{errors.lastName}</div>
                ) : null}
              </div>
              <div className="flex  flex-col mt-[15px]">
                <label className="mb-2.5">Phone Number</label>
                <Field
                  type="number"
                  placeholder="Write your phone number"
                  className="input"
                  name="phoneNumber"
                  // onChange={(event) =>
                  //   setValue({ ...value, phoneNumber: event.target.value })
                  // }
                  // value={value.phoneNumber}
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
                  // onChange={(event) =>
                  //   setValue({ ...value, email: event.target.value })
                  // }
                  // value={value.email}
                ></Field>
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>

              <div className="flex  flex-col mt-[15px]">
                <label className="mb-2.5">Password</label>
                <Field
                  type="Password"
                  placeholder="Write your password"
                  className="input"
                  name="password"
                  // onChange={(event) =>
                  //   setValue({ ...value, password: event.target.value })
                  // }
                  // value={value.password}
                ></Field>
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={!dirty || loading}
                className="font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white text-center mt-[32px] rounded-xl p-2.5 mb-5 w-full"
              >
                Sign Up
              </button>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
