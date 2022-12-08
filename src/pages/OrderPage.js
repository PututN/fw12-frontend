import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import OrderPageComponent from "../components/OrderPage/OrderPageComponent"

const OrderPage = () => {
  return (
    <div>
      <NavBarAfterLogin />
        <OrderPageComponent />
      <Footer />
    </div>
  );
};

export default OrderPage;
