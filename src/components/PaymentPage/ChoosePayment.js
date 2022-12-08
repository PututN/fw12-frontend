import { Link } from "react-router-dom";
import Logo_BCA from "../../assets/images/logo-BCA.png";
import Logo_BRI from "../../assets/images/logo-BRI.png";
import Logo_Dana from "../../assets/images/logo-dana.png";
import Logo_Gopay from "../../assets/images/logo-gopay.png";
import Logo_Gpay from "../../assets/images/logo-gpay.png";
import Logo_OVO from "../../assets/images/logo-OVO.png";
import Logo_Paypal from "../../assets/images/logo-paypal.png";
import Logo_Visa from "../../assets/images/logo-visa.png";

const ChoosePayment = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mt-10 mb-6">
          Choose a Payment Method
        </h1>

        <div className="bg-white rounded-md p-16">
          <div className="grid grid-cols-4 gap-3">
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_BCA} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_BRI} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_Dana} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_Gopay} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_Gpay} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_OVO} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_Paypal} alt=""></img>
              </div>
            </div>
            <div className="border-2 border-black flex items-center justify-center py-2 rounded-md hover:bg-[#E6DDC4] cursor-pointer">
              <div>
                <img src={Logo_Visa} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mt-10 flex ">
          <Link
            to="/OrderPage"
            className="p-3 w-1/3 border-2 text-center rounded-md font-semibold bg-[#665A48] text-white hover:bg-[#3A8891]
"
          >
            {" "}
            Previous Step
          </Link>
          <Link
            to="/"
            className="p-3 w-1/3 border-2 bg-[#0E5E6F] hover:bg-[#3A8891] text-white
 rounded-md font-semibold text-center"
          >
            Pay your Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChoosePayment;
