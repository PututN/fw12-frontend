import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div className="bg-[#F5D5AE] px-20 py-20">
        <div className="flex">
          <div className="w-1/4">
            <ProfileCard />
          </div>
          <div className="w-3/4 ml-7">
            <div className="bg-white p-7 rounded-md items-center">
              <Link
                to="/Profile"
                className="leading-8 text-lg mr-16 text-[#14142B] font-semibold"
              >
                Account Setting
              </Link>
              <Link to="/History" className="leading-8 text-lg text-[#AAAAAA]">
                Order History
              </Link>
            </div>
            <div>
              {" "}
              <div className="mt-5 bg-white rounded-md p-7">
                <h1 className="font-semibold text-[#14142B]">
                  Details Information
                </h1>
                <div className="border border-3 my-5"></div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <form for="">
                      <div className="mb-2.5">First Name</div>
                      <input
                        type="text"
                        className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Jonas"
                      ></input>
                      <div className="my-2.5">E-mail</div>
                      <input
                        type="email"
                        className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="jonasrodri123@gmail.com"
                      ></input>
                    </form>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <form for="">
                      <div className="mb-2.5">Last Name</div>
                      <input
                        type="text"
                        className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="El Rodriguez"
                      ></input>
                      <div className="my-2.5">Phone Number</div>
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="+62"
                          className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-1/5"
                        ></input>
                        <input
                          type="number"
                          placeholder="81445687121"
                          className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <button className="w-1/4 mt-5 p-4 rounded-lg text-white bg-[#0E5E6F] hover:bg-[#3A8891]">
                Update Changes
              </button>
            </div>{" "}
            <div>
              {" "}
              <div className="mt-5 bg-white rounded-md p-7">
                <h1 className="font-semibold text-[#14142B]">
                  Details Information
                </h1>
                <div className="border border-3 my-5"></div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <form for="">
                      <div className="mb-2.5">New Password</div>
                      <input
                        type="password"
                        className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your password"
                      ></input>
                    </form>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <form for="">
                      <div className="mb-2.5">Confirm Password</div>
                      <input
                        type="password"
                        className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                        placeholder="Write your password"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
              <button className="w-1/4 mt-5 p-4 rounded-lg text-white bg-[#0E5E6F] hover:bg-[#3A8891]">
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
