import ProfilePageComponent from "../components/ProfilePage/ProfilePageComponent"
import Footer from "../components/Footer";
import NavBarAfterLogin from "../components/NavBarAfterLogin";

const ProfilePage = () => {
    return(
        <>
        <NavBarAfterLogin />
        <ProfilePageComponent />
        <Footer />
        </>
    )
}

export default ProfilePage