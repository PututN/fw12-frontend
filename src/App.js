import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'
import ViewAll from './pages/ViewAll'
import MovieDetail from './pages/MovieDetail'
import OrderPage from './pages/OrderPage'
import PaymentPage from './pages/PaymentPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/Signin" element= {<Signin />} />
        <Route path="/Signup" element= {<Signup />} />
        <Route path="/ForgotPassword" element= {<ForgotPassword />} />
        <Route path="/ResetPassword" element= {<ResetPassword />} />
        <Route path="/Home" element= {<Home />} />
        <Route path="/ViewAll" element= {<ViewAll />} />
        <Route path="/MovieDetail" element= {<MovieDetail />} />
        <Route path="/OrderPage" element= {<OrderPage />} />
        <Route path="/PaymentPage" element= {<PaymentPage />} />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
