// import logo from './logo.svg';
// import './App.css';
// import HomePage from  './component/HomePage';

// function App() {
//   return (
//     <div className="App">
//     <HomePage/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/Loginpage";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

