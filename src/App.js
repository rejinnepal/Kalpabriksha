import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home,
   Main, 
   Faq, 
   About, 
   Kalpa,
   Fiskies,
   NavBar,
   ContactUs
  } from './components'
  
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
function App() {
  return (
    <div className="App" style={{'height': '100vh'}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/Home'
          element={<Home/>}
          />
          <Route path='/Main'
          element={<Main/>}
          />
          <Route path='/FAQs'
          element={<Faq/>}
          />
          <Route path='/About'
          element={<About/>}
          />
          <Route path='/Advice'
          element={<Kalpa/>}
          />
          <Route path='/Contact'
          element={<ContactUs/>}
          />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
