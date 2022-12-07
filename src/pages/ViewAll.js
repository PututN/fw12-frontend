import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import ViewAllComponent from "../components/ViewAllComponent"

const ViewAll = () => {
  return (
    <div>
      <NavBarAfterLogin />
      <div>
        <ViewAllComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ViewAll;
