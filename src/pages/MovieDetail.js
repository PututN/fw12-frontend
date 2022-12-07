import Footer from "../components/Footer";
import DetailMovieComponent from "../components/DetailMovieComponent";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import ShowTimeComponent from "../components/ShowTimeComponent"

const MovieDetail = () => {
  return (
    <div>
      <NavBarAfterLogin />
      <div>
        <DetailMovieComponent />
        <ShowTimeComponent />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
