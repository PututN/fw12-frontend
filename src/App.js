import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Signin from './pages/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/Signin" element= {<Signin />} />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
