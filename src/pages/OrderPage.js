import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import OrderPageComponent from "../components/OrderPage/OrderPageComponent";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />} 
      <OrderPageComponent />
      <Footer />
    </div>
  );
};

export default OrderPage;
