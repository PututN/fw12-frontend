import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../components/Footer";
import Logo from "../assets/images/logo-cinemnar-removebg.png";
const TicketResultUsed = () => {
  return (
    <>
      <div>
        <NavBarAfterLogin />
        <div className="bg-[#F2DEBA] px-64 py-20">
          <div className="bg-white flex flex-col items-center p-10">
            <h1 className="text-lg font-bold mb-10">Proof of Payment</h1>
            <div className="w-full relative overflow-hidden">
              <div className="bg-[#0E5E6F] pl-20 flex py-3 items-center rounded-t-2xl">
                <div className="flex-1">
                  <img src={Logo} alt="" className="w-1/4" />
                </div>
                <div className="text-lg text-white mr-10">Admit One</div>
                <div className="flex-1 flex justify-center">
                  <img src={Logo} alt="" className="w-1/4" />
                </div>
                <div className="flex-col flex h-full absolute items-center top-0 right-64">
                  <div className="w-[1px] border border-dashed h-full absolute"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-dashed bg-white absolute -top-5"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-dashed bg-white absolute -bottom-5"></div>
                </div>
              </div>
              <div className="pl-20 items-center flex border rounded-b-2xl pb-10">
                <div className="w-3/4">
                  <div className="my-4">
                    <p className="text-[#AAAAAA] leading-6 text-xs">Movie</p>
                    <h1 className="font-semibold text-base leading-8">
                      Spider-Man: Homecoming
                    </h1>
                  </div>
                  <div className="flex gap-7 mb-4">
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Date</p>
                      <h1 className="font-semibold text-base leading-8">
                        07 July
                      </h1>
                    </div>
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Time</p>
                      <h1 className="font-semibold text-base leading-8">
                        02:00pm
                      </h1>
                    </div>
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">
                        Category
                      </p>
                      <h1 className="font-semibold text-base leading-8">
                        Action
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-7">
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Count</p>
                      <h1 className="font-semibold text-base leading-8">
                        3 pieces
                      </h1>
                    </div>
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Seats</p>
                      <h1 className="font-semibold text-base leading-8">
                        C4, C5, C6
                      </h1>
                    </div>
                    <div className="w-1/5">
                      <p className="text-[#AAAAAA] leading-6 text-xs">Price</p>
                      <h1 className="font-semibold text-2xl leading-8">
                        $30.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-end mr-10">
                  <div className="w-[171px] h-[171px] bg-[#F5F6F8] flex items-center justify-center font-semibold px-5 text-center mt-10">
                    Ticket Already Used
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TicketResultUsed;
