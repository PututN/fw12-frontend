import Footer from "../components/Footer";
import Index from "../components/Homepage/Index";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <div>
        <Index />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
