import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../components/Footer";
import HistoryComponent from '../components/History/HistoryComponent'

const History = () => {
  return (
    <div>
      <NavBarAfterLogin />
      <HistoryComponent />
      <Footer />
    </div>
  );
};

export default History;
