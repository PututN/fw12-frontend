import Footer from "../components/Footer";
import DetailMovieComponent from "../components/DetailMovieComponent";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import ShowTimeComponent from "../components/ShowTimeComponent"
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const MovieDetail = () => {
  const token = useSelector((state) => state.auth.token)
  return (
    <div>
      {token ? <NavBarAfterLogin /> : <Navbar />  }
      <div>
        <DetailMovieComponent />
        <ShowTimeComponent />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
