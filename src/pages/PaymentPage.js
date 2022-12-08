import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import PaymentPageComponent from "../components/PaymentPage/PaymentPageComponent";

const PaymentPage = () => {
  return (
    <div>
      <NavBarAfterLogin />
      <PaymentPageComponent />
      <Footer />
    </div>
  );
};

export default PaymentPage;
