import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Home from "./Home";
import ViewAll from "./ViewAll";
import MovieDetail from "./MovieDetail";
import OrderPage from "./OrderPage";
import PaymentPage from "./PaymentPage";
import ProfilePage from "./ProfilePage";
import History from "./History";
import TicketResult from "./TicketResult";
import ManageMovie from "./ManageMovie";
import Dashboard from "./Dashboard";
import ManageSchedule from "./ManageSchedule";
import PrivateRoute from "../components/PrivateRoute";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ViewAll" element={<ViewAll />} />
        <Route path="/MovieDetail/:id" element={<MovieDetail />} />
        <Route
          path="/OrderPage"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/PaymentPage"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/History"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        <Route
          path="/TicketResult/:id"
          element={
            <PrivateRoute>
              <TicketResult />
            </PrivateRoute>
          }
        />

        <Route path="/ManageMovie" element={<ManageMovie />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ManageSchedule" element={<ManageSchedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
