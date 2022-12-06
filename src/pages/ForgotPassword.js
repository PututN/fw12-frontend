import { Link } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";
import Logo from "../assets/images/logo-cinemnar-removebg.png";

const ForgotPassword = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="w-[60%] h-screen">
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
              <div className="relative">
                <div className="items-baseline	flex">
                  <div className="items-center	justify-center	flex mb-[46px] w-[50px] h-[50px] border-solid border-2 border-black rounded-full bg-[#FAAB78] text-2xl font-semibold leading-7">1</div>
                  <label for="1" className="ml-[30px] text-2xl font-semibold leading-7">Fill your complete email</label>
                </div>
                <div className="items-baseline	flex">
                  <div className="items-center	justify-center	flex mb-[46px] w-[50px] h-[50px] border-solid border-2 border-black rounded-full text-2xl font-semibold leading-7">2</div>
                  <label for="2" className="ml-[30px] text-2xl font-semibold leading-7">Check your email</label>
                </div>
                <div className="items-baseline	flex">
                  <div className="items-center	justify-center	flex mb-[46px] w-[50px] h-[50px] border-solid border-2 border-black rounded-full text-2xl font-semibold leading-7">3</div>
                  <label for="3" className="ml-[30px] text-2xl font-semibold leading-7">Enter your new password</label>
                </div>
                <div className="items-baseline	flex">
                  <div className="items-center	justify-center	flex mb-[46px] w-[50px] h-[50px] border-solid border-2 border-black rounded-full text-2xl font-semibold leading-7">4</div>
                  <label for="4" className="ml-[30px] text-2xl font-semibold leading-7">Done</label>
                </div>
                <div class="lineupdatepassword"></div>
                <div class="lineupdatepassword2"></div>
                <div class="lineupdatepassword3"></div>
              </div>

              {/* <div className="text-center">
                  <h1 className="text-7xl text-black font-bold">Cinemnar</h1>
                  <p className="text-5xl text-black font-thin">
                    Book, Watch, Happy!
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-[40%] px-[40px] py-[100px]">
        <h1 className="mb-[12px] text-[30px] font-bold">
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
            <Link to="/" className="font-bold">
              Send
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
