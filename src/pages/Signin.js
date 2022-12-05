import { Link } from "react-router-dom";
import Background from "../assets/images/Logo-Bg.jpg";

const Signin = () => {
  return (
    <div className="flex">
      <div className="w-[60%]">kiri</div>
      <div className="w-[40%] px-[80px] py-[100px]">
        <h1 className="mb-[12px] text-[48px]">Sign In</h1>
        <p className="text-[18px] mb-[38px]">
          Sign in with your data that you entered during your registration
        </p>
        <form className="flex  flex-col">
          <div>
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="Password"></input>
          </div>
          <div className="bg-[#FFDCA9] text-center mt-[32px]">
            <Link to="/">Sign In</Link>
          </div>
          <div className="text-center text-[16px]">
            <p>Forgot your password?<Link to="/"> Reset now</Link></p>
            <p>Don't have an account?<Link to="/"> Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
