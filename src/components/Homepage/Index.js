import SectionOne from "./SectionOne";
import NowShowing from "./NowShowing";
import UpComingMovies from "./UpComingMovies"
import MovieGoers from './MovieGoers'

const SectionHome = () => {
  return (
    <>
      <SectionOne />
      <NowShowing />
      <UpComingMovies />
      <MovieGoers />
    </>
  );
};

export default SectionHome;
