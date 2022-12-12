import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import PaymentPageComponent from "../components/PaymentPage/PaymentPageComponent";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <PaymentPageComponent />
      <Footer />
    </div>
  );
};

export default PaymentPage;
