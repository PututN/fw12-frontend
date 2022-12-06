import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/Signin" element= {<Signin />} />
        <Route path="/Signup" element= {<Signup />} />
        <Route path="/ForgotPassword" element= {<ForgotPassword />} />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
