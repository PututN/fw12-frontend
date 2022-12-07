import Footer from "../components/Footer";
import Index from "../components/Homepage/Index";
import NavBarAfterLogin from "../components/NavBarAfterLogin";

const Homepage = () => {
  return (
    <div>
      <NavBarAfterLogin />
      <div>
        <Index />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
