import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import ViewAllComponent from "../components/ViewAllComponent"
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";


const ViewAll = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      {token ?<NavBarAfterLogin /> : <Navbar />  }
      <div>
        <ViewAllComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ViewAll;
