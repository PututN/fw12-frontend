import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Index from "../components/Homepage/Index";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Index />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
