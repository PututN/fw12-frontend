import { Link } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";
import Logo from "../assets/images/logo-cinemnar-removebg.png";

const ForgotPassword = () => {
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
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px] bg-[#3A8891]">
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
                  <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px]">
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

        <h1 className="mb-[12px] text-[30px] font-bold max-[768px]:text-[20px]">
          Fill your complete email
        </h1>
        <p className="text-[18px] mb-[38px] font-light">
          we'll send a link to your email shortly
        </p>
        <form>
          <div className="flex  flex-col">
            <label className="mb-2.5">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              className="border-2 border-[##DEDEDE] p-2 rounded-xl bg-[#FEFCF3]"
            ></input>
          </div>
          <div className="bg-[#FFDCA9] text-center mt-[32px] rounded-xl p-2 mb-5">
            <Link to="/ResetPassword" className="font-bold">
              Send
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
