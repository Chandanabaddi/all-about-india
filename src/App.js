import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Culture from "./pages/Culture";
import Heritage from "./pages/Heritage";
import HistoricalPlaces from "./pages/HistoricalPlaces";
import Monuments from "./pages/Monuments";
import StateDetails from "./pages/StateDetails";
import VirtualTour from "./pages/VirtualTour";
import Admin from "./pages/Admin";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Options Page */}
        <Route path="/options" element={<Options />} />

        {/* Option Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/historical" element={<HistoricalPlaces />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/virtualtour" element={<VirtualTour />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userLogin" element={<UserLogin />} />

        {/* State Details */}
        <Route path="/state/:name" element={<StateDetails />} />

      </Routes>
    </Router>
  );
}

export default App;