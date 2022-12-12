import ProfilePageComponent from "../components/ProfilePage/ProfilePageComponent";
import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      {token ? <NavBarAfterLogin /> : <Navbar />}
      <ProfilePageComponent />
      <Footer />
    </>
  );
};

export default ProfilePage;
