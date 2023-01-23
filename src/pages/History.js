import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import http from "../helpers/http";
import React from "react";
import { cancelTransaction } from "../redux/reducers/transactionReducers";
import moment from "moment/moment";
import Skeleton from "../components/Skeleton";

const History = () => {
  const dispatch = useDispatch();
  //FETCHING history transaction ID
  const [history, setHistory] = React.useState([]);
  const token = useSelector((state) => state.auth.token);
  const fetchHistory = async () => {
    try {
      const response = await http(token).get("/transaction/history");
      setHistory(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    dispatch(cancelTransaction());
    if (token) {
      fetchHistory();
    }
  }, [token]);

  const [profile, setProfile] = React.useState({});

  const fetchProfile = async () => {
    try {
      const response = await http(token).get("/profile");
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };

  const pictureProfile = profile.picture;

  return (
    <div>
      <NavBarAfterLogin image={pictureProfile} />
      <div className="bg-[#F5D5AE] md:hidden block">
        <div className="flex justify-between p-5 rounded-b-2xl bg-white">
          <div>
            <Link to="/Profile" className="font-bold text-[#AAAAAA] text-lg">
              Details Account
            </Link>
          </div>
          <div className="border-b-4 border-[#C539B4] pb-2">
            <Link to="/History" className="text-xl font-bold">
              Order History
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#F2DEBA] lg:p-20 p-5">
          <div className="flex">
            <div className="w-1/4 hidden lg:block">
              <ProfileCard />
            </div>

            <div className="lg:w-3/4 w-full lg:ml-7 ml-0">
              <div className="bg-white p-7 rounded-md items-center md:flex hidden justify-around">
                <div className="pb-2">
                  <Link
                    to="/Profile"
                    className="leading-8 text-lg text-[#AAAAAA]"
                  >
                    Account Setting
                  </Link>
                </div>
                <div className="border-b-4 border-[#C539B4] pb-2">
                  <Link
                    to="/History"
                    className="leading-8 text-lg text-[#14142B] font-semibold"
                  >
                    Order History
                  </Link>
                </div>
              </div>
              {history?.map((item) => {
                return (
                  <div
                    key={String(item.id)}
                    className="bg-white rounded-md md:p-10 p-5 mt-7"
                  >
                    <div className="flex md:flex-row flex-col-reverse justify-end gap-3">
                      <div className="flex-col flex-1">
                        <h3 className="text-sm	leading-6 text-[#AAAAAA] mb-3">
                          {moment(item?.bookingDate)
                            .format("LLLL")
                            .slice(0, 25)}{" "}
                          -{" "}
                          {item.time.split(":")[0] +
                            ":" +
                            item.time.split(":")[1] +
                            " WIB"}
                        </h3>
                        <h1 className="text-xl	font-semibold	leading-9	">
                          {item?.title}
                        </h1>
                      </div>
                      <div className="flex items-center justify-end w-1/3">
                        <img src={item?.picture} alt="" />
                      </div>
                    </div>
                    <div className="border-2 my-5"></div>
                    <div className="flex justify-between">
                      <Link
                        to={"/TicketResult/" + item.id}
                        className="bg-[#00BA88] btn text-white rounded-md text-center p-2 md:w-1/3 w-1/2"
                      >
                        Ticket In Active
                      </Link>
                      <Link
                        to={"/TicketResult/" + item.id}
                        className="flex items-center leading-8	text-lg	text-[#C539B4]"
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

      {history ? (
        <div className="bg-[#F2DEBA] lg:p-20 p-5">
          <div className="flex">
            <div className="w-1/4 hidden lg:block">
              <ProfileCard />
            </div>

            <div className="lg:w-3/4 w-full lg:ml-7 ml-0">
              <div className="bg-white p-7 rounded-md items-center md:flex hidden justify-around">
                <div className="pb-2">
                  <Link
                    to="/Profile"
                    className="leading-8 text-lg text-[#AAAAAA]"
                  >
                    Account Setting
                  </Link>
                </div>
                <div className="border-b-4 border-[#C539B4] pb-2">
                  <Link
                    to="/History"
                    className="leading-8 text-lg text-[#14142B] font-semibold"
                  >
                    Order History
                  </Link>
                </div>
              </div>
              {history?.map((item) => {
                return (
                  <div
                    key={String(item.id)}
                    className="bg-white rounded-md md:p-10 p-5 mt-7"
                  >
                    <div className="flex md:flex-row flex-col-reverse justify-end gap-3">
                      <div className="flex-col flex-1">
                        <h3 className="text-sm	leading-6 text-[#AAAAAA] mb-3">
                          {moment(item?.bookingDate)
                            .format("LLLL")
                            .slice(0, 25)}{" "}
                          -{" "}
                          {item.time.split(":")[0] +
                            ":" +
                            item.time.split(":")[1] +
                            " WIB"}
                        </h3>
                        <h1 className="text-xl	font-semibold	leading-9	">
                          {item?.title}
                        </h1>
                      </div>
                      <div className="flex items-center justify-end w-1/3">
                        <img src={item?.picture} alt="" />
                      </div>
                    </div>
                    <div className="border-2 my-5"></div>
                    <div className="flex justify-between">
                      <Link
                        to={"/TicketResult/" + item.id}
                        className="bg-[#00BA88] btn text-white rounded-md text-center p-2 md:w-1/3 w-1/2"
                      >
                        Ticket In Active
                      </Link>
                      <Link
                        to={"/TicketResult/" + item.id}
                        className="flex items-center leading-8	text-lg	text-[#C539B4]"
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
      <Footer />
    </div>
  );
};

export default History;
