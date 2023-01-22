import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../components/Footer";
import QR from "../assets/images/img-QR.png";
import { useParams } from "react-router-dom";
import http from "../helpers/http";
import { useSelector } from "react-redux";
import React from "react";
import moment from "moment/moment";
import Skeleton from "../components/Skeleton";

const TicketResult = () => {
  const { id: idTicket } = useParams();
  const [ticket, setTicket] = React.useState({});
  const token = useSelector((state) => state.auth.token);
  const fetchTicket = async () => {
    try {
      const response = await http(token).get(
        `/transaction/history/${idTicket}`
      );
      setTicket(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchTicket();
    }
  }, [token]);
  console.log(ticket);

  //set Date
  const date = moment(ticket.bookingDate)
    .format("lll")
    .split(",")[0]
    .split(" ");
  const fixDate = `${date[1]} ${date[0]}`;
  console.log(fixDate);

  return (
    <>
      <div>
        <NavBarAfterLogin />
        <div className="bg-[#F5D5AE] xl:px-64 py-20 lg:px-16 px-4">
          {ticket?.title ? (
            <div className="bg-white flex flex-col items-center rounded-lg md:p-10 p-3 relative overflow-hidden">
              <h1 className="text-lg font-bold mb-10">Proof of Payment</h1>
              <div className="w-full relative overflow-hidden md:block hidden">
                <div className="bg-[#C539B4] lg:pl-20 pl-5 flex py-3 items-center rounded-t-2xl">
                  <div className="flex-1 text-white font-bold text-lg">
                    CINEMNAR
                  </div>
                  <div className="text-lg text-white mr-10">Admit One</div>
                  <div className="flex-1 flex justify-center"></div>
                  <div className="flex-col flex h-full absolute items-center top-0 right-64">
                    <div className="w-[1px] border border-dashed h-full absolute"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-dashed bg-white absolute -top-5"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-dashed bg-white absolute -bottom-5"></div>
                  </div>
                </div>
                <div className="lg:pl-20 pl-5 items-center flex border rounded-b-2xl pb-10">
                  <div className="lg:w-3/4 w-2/3">
                    <div className="my-4">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Movie</p>
                      <h1 className="font-semibold text-base leading-8">
                        {ticket?.title}{" "}
                      </h1>
                    </div>
                    <div className="flex gap-7 mb-4">
                      <div className="w-1/5">
                        <p className="text-[#AAAAAA] leading-6 text-xs">Date</p>
                        <h1 className="font-semibold text-base leading-8">
                          {fixDate}
                        </h1>
                      </div>
                      <div className="w-1/5">
                        <p className="text-[#AAAAAA] leading-6 text-xs">Time</p>
                        <h1 className="font-semibold text-base leading-8">
                          {ticket?.time ? ticket?.time.slice(0, 5) : null} WIB
                        </h1>
                      </div>
                      <div className="w-1/5">
                        <p className="text-[#AAAAAA] leading-6 text-xs">
                          Category
                        </p>
                        <h1 className="font-semibold text-base leading-8">
                          {ticket?.genre ? ticket?.genre.split(",")[0] : null}
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-7">
                      <div className="w-1/5">
                        <p className="text-[#AAAAAA] leading-6 text-xs">
                          Count
                        </p>
                        <h1 className="font-semibold text-base leading-8">
                          {ticket?.seatnum
                            ? ticket?.seatnum.split(",").length
                            : null}{" "}
                          pcs
                        </h1>
                      </div>
                      <div className="w-1/5">
                        <p className="text-[#AAAAAA] leading-6 text-xs">
                          Seats
                        </p>
                        <h1 className="font-semibold text-base leading-8">
                          {ticket?.seatnum
                            ? ticket?.seatnum.length <= 10
                              ? ticket?.seatnum
                              : `${ticket?.seatnum.slice(0, 10)}...`
                            : null}
                        </h1>
                      </div>
                      <div className="w-[30%]">
                        <p className="text-[#AAAAAA] leading-6 text-xs">
                          Price
                        </p>
                        <h1 className="font-semibold text-2xl leading-8">
                          Rp{" "}
                          {ticket?.totalPrice
                            ? Number(ticket?.totalPrice).toLocaleString("id")
                            : null}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end mr-10">
                    <div>
                      <img src={QR} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:hidden block">
                <div className="flex justify-center mb-5">
                  <img src={QR} alt="QR" />
                </div>
                <div className="flex flex-row items-center">
                  <div className="border-b-4 border-dashed flex-1 border-b-[#F5D5AE]"></div>
                  <div className="absolute bg-[#F5D5AE] rounded-full w-16 h-16 left-[-30px]"></div>
                  <div className="absolute bg-[#F5D5AE] rounded-full w-16 h-16 right-[-30px]"></div>
                </div>
                <div className="mt-10 flex flex-row justify-between">
                  <div>
                    <div>
                      <div className="text-[#AAAA]">Movie</div>
                      <div className="text-lg font-bold">
                        {ticket?.title
                          ? `${ticket?.title.slice(0, 7)}...`
                          : null}
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="text-[#AAAA]">Date</div>
                      <div className="text-lg font-bold"> {fixDate}</div>
                    </div>
                    <div>
                      <div className="text-[#AAAA]">Count</div>
                      <div className="text-lg font-bold">
                        {" "}
                        {ticket?.seatnum
                          ? ticket?.seatnum.split(",").length
                          : null}{" "}
                        pcs
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="text-[#AAAA]">Category</div>
                      <div className="text-lg font-bold">
                        {" "}
                        {ticket?.genre ? ticket?.genre.split(",")[0] : null}
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="text-[#AAAA]">Time</div>
                      <div className="text-lg font-bold">
                        {" "}
                        {ticket?.time ? ticket?.time.slice(0, 5) : null} WIB
                      </div>
                    </div>
                    <div>
                      <div className="text-[#AAAA]">Seats</div>
                      <div className="text-lg font-bold">
                        {" "}
                        {ticket?.seatnum
                          ? ticket?.seatnum.length <= 10
                            ? ticket?.seatnum
                            : `${ticket?.seatnum.slice(0, 10)}...`
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-10 w-full flex justify-between border-2 border-[#F5D5AE] p-4">
                <div className="font-bold text-xl">Total</div>
                <div className="font-bold text-xl">
                  Rp{" "}
                  {ticket?.totalPrice
                    ? Number(ticket?.totalPrice).toLocaleString("id")
                    : null}
                </div>
              </div>
            </div>
          ) : (
            <Skeleton />
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TicketResult;
