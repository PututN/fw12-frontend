import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Warning from "../assets/images/vektor-warning.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import http from "../helpers/http";
import { transaction } from "../redux/reducers/transactionReducers";
import moment from "moment/moment";
import Skeleton from "../components/Skeleton";

const PaymentPage = () => {
  const {
    movieTitle,
    price,
    cinemaPicture,
    bookingDate,
    time,
    userId,
    movieId,
    cinemaId,
    movieScheduleId,
    seatNum,
    cinemaName,
    totalPrice,
  } = useSelector((state) => state?.transaction);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const date = moment(bookingDate).format("LLLL").split(" ");
  const day = date[0];
  const month = date[1];
  const newDate = date[2];
  const year = date[3];
  const fixDate = `${day} ${month} ${newDate} ${year}`;

  //FETCHING PAYMENT METHOD
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const fetchPaymentMethod = async () => {
    try {
      const response = await http(token).get("/paymentMethod?limit=6");
      setPaymentMethod(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchPaymentMethod();
    }
  }, [token]);

  //set selected payment method
  const [selectPaymentMethod, setSelectPaymentMethod] = React.useState(null);
  //FETCHING PROFILE ID
  const [profile, setProfile] = React.useState({});
  const fetchProfile = async () => {
    try {
      const response = await http(token).get("/profile");
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);
  console.log(`${profile.firstName} ${profile.lastName}`);
  //set profile
  const [fullName, setFullName] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [newPhoneNumber, setNewPhoneNumber] = React.useState("");
  //alert success
  const [successMessage, setSuccessMessage] = React.useState(false);

  //alert error
  const [errorPayment, setErrorPayment] = React.useState(false);

  //handle payorder
  const handlePayOrder = async () => {
    if (!selectPaymentMethod) {
      setErrorPayment("Please choose your payment");
      setTimeout(() => {
        setErrorPayment(false);
      }, 3000);
    } else {
      dispatch(
        transaction({
          userId,
          bookingDate,
          movieId,
          cinemaId,
          movieScheduleId,
          fullName,
          email: newEmail ? newEmail : `${profile?.email}`,
          phoneNumber: newPhoneNumber
            ? newPhoneNumber
            : `${profile?.phoneNumber}`,
          statusId: 1,
          paymentId: selectPaymentMethod,
          seatNum,
          time,
          cinemaName,
          price,
          cinemaPicture,
          movieTitle,
          totalPrice,
        })
      );
      createTransaction();
    }
  };

  //create transaction
  const createTransaction = async () => {
    try {
      const response = await http(token).post(`/transaction/order`, {
        bookingDate,
        fullName,
        email: newEmail ? newEmail : `${profile?.email}`,
        movieId,
        movieScheduleId,
        paymentId: selectPaymentMethod,
        statusId: 1,
        cinemaId,
        seatNum,
        phoneNumber: newPhoneNumber
          ? newPhoneNumber
          : `${profile?.phoneNumber}`,
        time,
        totalPrice,
      });
      setSuccessMessage("Payment Success");
      setTimeout(() => {
        setSuccessMessage(false);
        navigate("/History");
      }, 3000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div className="bg-[#F5D5AE] md:hidden block">
        <div className="flex justify-between p-5 rounded-b-2xl bg-white">
          <div>Total Payment</div>
          <div className="text-xl font-bold">
            Rp {Number(totalPrice).toLocaleString("id")}
          </div>
        </div>
      </div>
      <div className="bg-[#F5D5AE] lg:p-20 p-5">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-2/3 w-full">
            <div className="md:block hidden">
              <h1 className="text-xl font-bold mb-6">Payment Info</h1>
              <div className="bg-white p-5 rounded-md">
                <div className="flex">
                  <div className="flex items-center flex-1 text-xl leading-6">
                    Date & time
                  </div>
                  <div>
                    <div className="p-3 text-xl leading-6">
                      {fixDate} at{" "}
                      {time.split(":")[0] + ":" + time.split(":")[1] + " WIB"}
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full my-4"></div>
                <div className="flex">
                  <div className="flex items-center flex-1 text-xl leading-6">
                    Movie title
                  </div>
                  <div>
                    <div className="p-3 text-xl leading-6">{movieTitle} </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full my-4"></div>
                <div className="flex">
                  <div className="flex items-center flex-1 text-xl leading-6">
                    Cinema name
                  </div>
                  <div>
                    <div className="p-3 text-xl leading-6">
                      {cinemaName} Cinema{" "}
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full my-4"></div>
                <div className="flex">
                  <div className="flex items-center flex-1 text-xl leading-6">
                    Number of tickets
                  </div>
                  <div>
                    <div className="p-3 text-xl leading-6">
                      {totalPrice / price} pieces{" "}
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full my-4"></div>
                <div className="flex">
                  <div className="flex items-center flex-1 text-xl leading-6">
                    Total payment
                  </div>
                  <div>
                    <div className="p-3 leading-6 text-2xl font-bold">
                      Rp {Number(totalPrice).toLocaleString("id")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mt-10 mb-6">
                Choose a Payment Method
              </h1>
              {paymentMethod ? (
                <div className="bg-white rounded-md lg:p-16 p-4">
                  <div className="flex md:flex-row justify-center flex-wrap gap-3">
                    {paymentMethod?.map((item) => {
                      return (
                        <button
                          key={String(item.id)}
                          onClick={() => setSelectPaymentMethod(item?.id)}
                          className={
                            selectPaymentMethod === item?.id
                              ? "border-2 md:w-[150px] w-[115px] border-black flex items-center justify-center py-2 rounded-md bg-[#F5D5AE] cursor-pointer"
                              : "border-2 md:w-[150px] w-[115px] border-black flex items-center justify-center py-2 rounded-md bg-white cursor-pointer"
                          }
                        >
                          <img src={item.picture} alt={`${item.name}`}></img>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Skeleton />
              )}
              <div className="justify-between mt-10 md:flex hidden ">
                <Link
                  to="/OrderPage"
                  className="w-1/3 border-2 text-center rounded-md font-semibold  text-white btn bg-[#852999]"
                >
                  {" "}
                  Previous Step
                </Link>
                <button
                  onClick={handlePayOrder}
                  className="w-1/3 border-2 btn bg-[#C539B4] text-white rounded-md font-semibold text-center"
                >
                  Pay your Order
                </button>
              </div>
              {errorPayment && (
                <div className="mt-5 md:block hidden font-bold text-red-500 text-center text-lg">
                  {errorPayment}{" "}
                </div>
              )}
              {successMessage && (
                <div className="mt-5 md:block hidden font-bold text-green-500 text-center text-lg">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="md:ml-3 ml-0">
              <h1 className="text-xl font-bold mb-6 md:mt-0 mt-10">
                Personal Info
              </h1>
              <div className="bg-white rounded-md p-5">
                <div>
                  <form for="Full Name">
                    <div className="text-base	leading-5 mb-3">Full Name</div>
                    {profile ? (
                      <input
                        type="text"
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border"
                        placeholder="Write your full Name"
                      ></input>
                    ) : (
                      <Skeleton />
                    )}
                    <div className="text-base	leading-5 mb-3">Email</div>
                    <input
                      type="email"
                      onChange={(e) => setNewEmail(e.target.value)}
                      defaultValue={profile?.email}
                      className="w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border"
                      placeholder="Write your email"
                    ></input>
                    <div className="text-base	leading-5 mb-3">Phone Number</div>
                    <input
                      type="text"
                      onChange={(e) => setNewPhoneNumber(e.target.value)}
                      defaultValue={profile?.phoneNumber}
                      className="flex w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border"
                    ></input>
                  </form>
                  <div className="flex gap-5 bg-[#F4B7404D] p-4 items-center mt-7">
                    <div>
                      <img src={Warning} alt="" />
                    </div>
                    <span className="text-[#4E4B66]">
                      Fill your data correctly.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePayOrder}
          className="w-full btn bg-[#C539B4] mt-10 md:hidden block"
        >
          Pay your order
        </button>
        {errorPayment && (
          <div className="mt-5 md:hidden block font-bold text-red-500 text-center text-lg">
            {errorPayment}{" "}
          </div>
        )}
        {successMessage && (
          <div className="mt-5 md:hidden block font-bold text-green-500 text-center text-lg">
            {successMessage}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
