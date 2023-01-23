import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import http from "../helpers/http";

const ProfilePage = () => {
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

  //validator update data
  const [newFirstName, setNewFirstName] = React.useState(profile?.firstName);
  const [newEmail, setNewEmail] = React.useState(profile?.email);
  const [newLastName, setNewLastName] = React.useState(profile?.lastName);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState(
    profile?.phoneNumber
  );

  //message success
  const [messageSuccess, setMessageSuccess] = React.useState(false);

  //validator error
  const [errorData, setErrorData] = React.useState(false);

  const handleUpdateData = async (value) => {
    try {
      if (
        (newFirstName !== "" && newEmail !== "" && newLastName !== "",
        newPhoneNumber !== "")
      ) {
        const firstName = newFirstName;
        const lastName = newLastName;
        const email = newEmail;
        const phoneNumber = newPhoneNumber;
        const response = await http(token).patch("/profile/updated", {
          firstName,
          lastName,
          email,
          phoneNumber,
        });
        setMessageSuccess("Update Success");
        setTimeout(() => {
          setMessageSuccess(false);
          fetchProfile();
        }, 3000);
        return response;
      } else {
        setErrorData("Please fill data");
        setTimeout(() => {
          setErrorData(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {token ? <NavBarAfterLogin /> : <Navbar />}
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
            <ProfileCard />
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
            <form onSubmit={handleUpdateData}>
              <div className="lg:hidden block mt-5">
                <ProfileCard />
              </div>
              <div className="mt-5 bg-white rounded-md p-7">
                <h1 className="font-semibold text-[#14142B]">
                  Details Information
                </h1>
                <div className="border border-3 my-5"></div>
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="flex flex-col md:w-1/2 w-full">
                    <div className="mb-2.5">First Name</div>
                    <input
                      type="text"
                      name="firstName"
                      onChange={(e) => setNewFirstName(e.target.value)}
                      defaultValue={profile?.firstName}
                      className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                      placeholder="Write your first name"
                    ></input>
                    {newFirstName === "" && (
                      <div className="text-red-500">Required</div>
                    )}
                    <div className="md:block hidden">
                      <div className="my-2.5 ">E-mail</div>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setNewEmail(e.target.value)}
                        defaultValue={profile?.email}
                        className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your email"
                      ></input>
                      {newEmail === "" && (
                        <div className="text-red-500">Required</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:w-1/2 w-full">
                    <div className="mb-2.5">Last Name</div>
                    <input
                      type="text"
                      name="lastName"
                      onChange={(e) => setNewLastName(e.target.value)}
                      defaultValue={profile?.lastName}
                      className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                      placeholder="Write your last name"
                    ></input>
                    {newLastName === "" && (
                      <div className="text-red-500">Required</div>
                    )}
                    <div className="md:hidden block">
                      <div className="my-2.5 ">E-mail</div>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setNewEmail(e.target.value)}
                        defaultValue={profile?.email}
                        className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your email"
                      ></input>
                      {newEmail === "" && (
                        <div className="text-red-500">Required</div>
                      )}
                    </div>

                    <div className="my-2.5">Phone Number</div>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={(e) => setNewPhoneNumber(e.target.value)}
                      defaultValue={profile?.phoneNumber}
                      placeholder="Write your phone number"
                      className="p-3  border-2 rounded-md bg-[#FEFCF3] w-full"
                    ></input>
                    {newPhoneNumber === "" && (
                      <div className="text-red-500">Required</div>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="md:w-1/4 w-full mt-5 p-4 rounded-lg text-white bg-[#C539B4] btn"
              >
                Update Changes
              </button>
              {errorData && <div className="text-red-500">{errorData}</div>}
            </form>{" "}
            <div>
              {" "}
              <div className="mt-5 bg-white rounded-md p-7">
                <h1 className="font-semibold text-[#14142B]">
                  Details Information
                </h1>
                <div className="border border-3 my-5"></div>
                <div className="flex gap-4 md:flex-row flex-col">
                  <div className="flex flex-col md:w-1/2 w-full">
                    <form for="">
                      <div className="mb-2.5">New Password</div>
                      <input
                        type="password"
                        className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your password"
                      ></input>
                    </form>
                  </div>
                  <div className="flex flex-col md:w-1/2 w-full">
                    <form for="">
                      <div className="mb-2.5">Confirm Password</div>
                      <input
                        type="password"
                        className="p-3 border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your password"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
              <button className="md:w-1/4 w-full mt-5 p-4 rounded-lg text-white bg-[#C539B4] btn">
                Update Changes
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
