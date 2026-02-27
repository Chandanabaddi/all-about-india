import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import States from "./pages/States";
import Login from "./pages/Login";
import Options from "./pages/Options";
import Culture from "./pages/Culture";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/states" element={<States />} />
      <Route path="/login/:stateName" element={<Login />} />
      <Route path="/options/:stateName" element={<Options />} />
      <Route path="/culture/:stateName" element={<Culture />} />
    </Routes>
  );
}

export default App;