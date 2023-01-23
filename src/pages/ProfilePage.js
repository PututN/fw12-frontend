import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import http from "../helpers/http";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Eye, EyeOff } from "react-feather";
import { logout as logoutAction } from "../redux/reducers/authReducers";
import user from "../assets/images/user.png";

YupPassword(Yup);

const UpdatePasswordSchema = Yup.object().shape({
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

const UpdateDataSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .required("required")
    .matches(/^[0-9]+$/, "Phone Number must be only number")
    .min(10, "Minimal 10 number")
    .max(13, "Max 13 number"),
});

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});

  const token = useSelector((state) => state.auth.token);
  const fetchProfile = async () => {
    try {
      const response = await http(token).get("/profile");
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  //Handle Update Data
  const [updateData, setUpdateData] = React.useState(false);
  const handleUpdateData = async (value) => {
    try {
      const firstName = value.firstName;
      const lastName = value.lastName;
      const email = value.email;
      const phoneNumber = value.phoneNumber;
      const response = await http(token).patch("/profile/updated", {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      setUpdateData("Update data success");
      setTimeout(() => {
        setUpdateData(false);
      }, 3000);
      fetchProfile();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //RESET PASSWORD
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const [messageUpdatePassword, setUpdatePassword] = React.useState(false);

  const handleUpdatePassword = async (value) => {
    try {
      const password = value.password;
      const response = await http(token).patch("/profile/updated", {
        password,
      });
      setUpdatePassword("Update Password Success");
      setTimeout(() => {
        setUpdatePassword(false);
      }, 3000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //UPLOAD PHOTO

  const [errorSize, setErrorSize] = useState(false);
  const [successUpload, setSuccessUpload] = useState(false);

  const [errorPicture, setErrorPicture] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [file, setFile] = useState(false);
  const handleUploadPhoto = async (e) => {
    try {
      if (file) {
        if (file?.size <= 5024 * 1024) {
          setLoadingUpload("loading...");
          const form = new FormData();
          form.append("picture", file);
          const response = await http(token).patch("/profile/updated", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setLoadingUpload(false);
          setSuccessUpload(response.data.message);
          setTimeout(() => {
            setSuccessUpload(false);
            fetchProfile();
          }, 3000);
        } else {
          setErrorSize("Please upload photo less than 5 MB");
          setTimeout(() => {
            setErrorSize(false);
          }, 3000);
        }
      } else {
        setErrorPicture("Please Select photo");
        setTimeout(() => {
          setErrorPicture(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const pictureProfile = profile.picture;
  return (
    <>
      {token ? <NavBarAfterLogin image={pictureProfile} /> : <Navbar />}
      <div className="bg-[#F5D5AE] md:hidden block">
        <div className="flex justify-between p-5 rounded-b-2xl bg-white">
          <div className="border-b-4 border-[#C539B4] pb-2">
            <Link to="/Profile" className="font-bold text-lg">
              Details Account
            </Link>
          </div>
          <div>
            <Link to="/History" className="text-xl text-[#AAAAAA] font-bold">
              Order History
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#F2DEBA] lg:p-20 p-5">
        <div className="flex">
          <div className="w-1/4 hidden lg:block">
            {/* PROFILE 1 */}
            <div className="bg-white rounded-lg">
              <div className="p-8">
                <h1>INFO</h1>
                <div className="flex flex-col items-center mt-4 relative gap-5">
                  {profile.picture ? (
                    <img
                      src={profile.picture}
                      alt="profile"
                      className="w-32 rounded-full"
                    />
                  ) : (
                    <img
                      src={user}
                      alt="profile"
                      className="w-32 rounded-full"
                    />
                  )}
                  <div className="flex flex-col">
                    <input
                      accept="image/png, image/jpeg, image/jpg"
                      type="file"
                      name="picture"
                      id="picture"
                      className="hidden"
                      // onChange={(e) => console.log(e.target.files[0])}
                      onChange={(e) => setFile(e.target.files[0])}
                    ></input>
                    <label htmlFor="picture" className="btn bg-[#C539B4]">
                      Select Picture
                    </label>
                    {setFile && (
                      <button
                        className="btn bg-[#EF9A53] mt-5"
                        onClick={handleUploadPhoto}
                      >
                        Upload
                      </button>
                    )}
                    {errorPicture && (
                      <div className="font-bold text-md text-red-500 text-center">
                        {errorPicture}
                      </div>
                    )}
                    {loadingUpload && (
                      <div className="font-bold text-md text-blue-500 text-center">
                        {loadingUpload}
                      </div>
                    )}

                    {errorSize && (
                      <div className="font-bold text-md text-red-500 text-center">
                        {errorSize}
                      </div>
                    )}
                    {successUpload && (
                      <div className="font-bold text-md text-green-500 text-center">
                        {successUpload}
                      </div>
                    )}
                  </div>

                  <div>
                    <h2
                      className="
                font-semibold text-xl leading-8	text-center"
                    >
                      {profile?.firstName} {profile?.lastName}
                    </h2>
                    <p className="text-center text-sm">Moviegoers</p>
                  </div>
                </div>
              </div>
              <div className="border-2 w-full mb-5 border-[#F2DEBA]" />
              <div className="py-8 px-8">
                <button
                  type="button"
                  onClick={() => dispatch(logoutAction())}
                  className="w-full py-3 rounded-lg text-white btn bg-[#852999] "
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 w-full lg:ml-7 ml-0">
            <div className="bg-white md:p-7 p-3 rounded-md items-center md:flex hidden justify-around">
              <div className="border-b-4 border-[#C539B4] pb-2">
                <Link
                  to="/Profile"
                  className="leading-8 text-lg text-[#14142B] "
                >
                  Account Setting
                </Link>
              </div>
              <div className="pb-2">
                <Link
                  to="/History"
                  className="leading-8 text-lg text-[#AAAAAA] font-semibold"
                >
                  Order History
                </Link>
              </div>
            </div>
            <Formik
              initialValues={{
                firstName: profile?.firstName,
                lastName: profile?.lastName,
                email: profile?.email,
                phoneNumber: profile?.phoneNumber,
              }}
              enableReinitialize
              onSubmit={handleUpdateData}
              validationSchema={UpdateDataSchema}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="lg:hidden block mt-5">
                    {/* PROFILE 2  */}
                    <div className="bg-white rounded-lg">
                      <div className="p-8">
                        <h1>INFO</h1>
                        <div className="flex flex-col items-center mt-4 relative gap-5">
                          {profile.picture ? (
                            <img
                              src={profile.picture}
                              alt="profile"
                              className="w-32 rounded-full"
                            />
                          ) : (
                            <img
                              src={user}
                              alt="profile"
                              className="w-32 rounded-full"
                            />
                          )}
                          <div className="flex flex-col w-3/4">
                            <input
                              accept="image/png, image/jpeg, image/jpg"
                              type="file"
                              name="picture"
                              id="picture"
                              className="hidden"
                              // onChange={(e) => console.log(e.target.files[0])}
                              onChange={(e) => setFile(e.target.files[0])}
                            ></input>
                            <label
                              htmlFor="picture"
                              className="btn bg-[#C539B4]"
                            >
                              Select Picture
                            </label>

                            {setFile && (
                              <button
                                className="btn bg-[#EF9A53] mt-5"
                                onClick={handleUploadPhoto}
                              >
                                Upload
                              </button>
                            )}
                            {errorPicture && (
                              <div className="font-bold text-md text-red-500 text-center">
                                {errorPicture}
                              </div>
                            )}
                            {loadingUpload && (
                              <div className="font-bold text-md text-blue-500 text-center">
                                {loadingUpload}
                              </div>
                            )}

                            {errorSize && (
                              <div className="font-bold text-md text-red-500 text-center">
                                {errorSize}
                              </div>
                            )}
                            {successUpload && (
                              <div className="font-bold text-md text-green-500 text-center">
                                {successUpload}
                              </div>
                            )}
                          </div>

                          <div>
                            <h2
                              className="
                font-semibold text-xl leading-8	text-center"
                            >
                              {profile?.firstName} {profile?.lastName}
                            </h2>
                            <p className="text-center text-sm">Moviegoers</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 w-full mb-5 border-[#F2DEBA]" />
                      <div className="py-8 px-8">
                        <button
                          type="button"
                          onClick={() => dispatch(logoutAction())}
                          className="w-full py-3 rounded-lg text-white btn bg-[#852999] "
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 bg-white rounded-md p-7">
                    <h1 className="font-semibold text-[#14142B]">
                      Details Information
                    </h1>
                    <div className="border border-3 my-5"></div>
                    <div className="flex md:flex-row flex-col gap-4">
                      <div className="flex flex-col md:w-1/2 w-full">
                        <div className="mb-2.5">First Name</div>
                        <Field
                          type="text"
                          name="firstName"
                          // defaultValue={profile?.firstName}
                          className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                          placeholder="Write your first name"
                        ></Field>
                        {errors.firstName && touched.firstName ? (
                          <div className="text-red-500">{errors.firstName}</div>
                        ) : null}

                        <div className="md:block hidden">
                          <div className="my-2.5 ">E-mail</div>
                          <Field
                            type="email"
                            name="email"
                            // defaultValue={profile?.email}
                            className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                            placeholder="Write your email"
                          ></Field>
                          {errors.email && touched.email ? (
                            <div className="text-red-500">{errors.email}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col md:w-1/2 w-full">
                        <div className="mb-2.5">Last Name</div>
                        <Field
                          type="text"
                          name="lastName"
                          // defaultValue={profile?.lastName}
                          className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                          placeholder="Write your last name"
                        ></Field>
                        {errors.lastName && touched.lastName ? (
                          <div className="text-red-500">{errors.lastName}</div>
                        ) : null}

                        <div className="md:hidden block">
                          <div className="my-2.5 ">E-mail</div>
                          <Field
                            type="email"
                            name="email"
                            // defaultValue={profile?.email}
                            className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                            placeholder="Write your email"
                          ></Field>
                          {errors.email && touched.email ? (
                            <div className="text-red-500">{errors.email}</div>
                          ) : null}
                        </div>

                        <div className="my-2.5">Phone Number</div>
                        <Field
                          type="text"
                          name="phoneNumber"
                          // defaultValue={profile?.phoneNumber}
                          placeholder="Write your phone number"
                          className="p-3  border-2 rounded-md bg-[#FEFCF3] w-full"
                        ></Field>
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <div className="text-red-500">
                            {errors.phoneNumber}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!dirty}
                    className="md:w-1/4 w-full mt-5 p-4 rounded-lg text-white bg-[#C539B4] btn"
                  >
                    Update Changes
                  </button>
                  {updateData && (
                    <div className="font-bold text-lg text-green-500 text-center">
                      {updateData}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
            <Formik
              initialValues={{
                password: "",
              }}
              onSubmit={handleUpdatePassword}
              validationSchema={UpdatePasswordSchema}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="mt-5 bg-white rounded-md p-7">
                    <h1 className="font-semibold text-[#14142B]">
                      Details Information
                    </h1>
                    <div className="border border-3 my-5"></div>
                    <div className="flex md:flex-row flex-col gap-4">
                      <div className="flex flex-col md:w-1/2 w-full relative">
                        <div className="mb-2.5">New Password</div>
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                          placeholder="Write your password"
                        ></Field>
                        {showPassword ? (
                          <Eye
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-[50px] right-[10px]"
                          />
                        ) : (
                          <EyeOff
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-[50px] right-[10px]"
                          />
                        )}
                        {errors.password && touched.password ? (
                          <div className="text-red-500">{errors.password}</div>
                        ) : null}
                      </div>
                      <div className="flex flex-col md:w-1/2 w-full relative">
                        <div className="mb-2.5">Confirm Password</div>
                        <Field
                          name="confirmPassword"
                          type={showPassword2 ? "text" : "password"}
                          className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                          placeholder="Confirm password"
                        ></Field>
                        {showPassword2 ? (
                          <Eye
                            onClick={() => setShowPassword2(!showPassword2)}
                            className="absolute top-[50px] right-[10px]"
                          />
                        ) : (
                          <EyeOff
                            onClick={() => setShowPassword2(!showPassword2)}
                            className="absolute top-[50px] right-[10px]"
                          />
                        )}

                        {errors.confirmPassword && touched.confirmPassword ? (
                          <div className="text-red-500">
                            {errors.confirmPassword}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!dirty}
                    className="md:w-1/4 w-full mt-5 p-4 rounded-lg text-white bg-[#C539B4] btn"
                  >
                    Update Changes
                  </button>
                  {messageUpdatePassword && (
                    <div className="font-bold text-lg text-green-500 text-center">
                      {messageUpdatePassword}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
