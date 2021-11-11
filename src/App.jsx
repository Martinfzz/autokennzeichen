/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import CityList from "./components/CityList";

const App = () => (
  <Router>
    <div className="flex">
      <SideBar />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="city-list" element={<CityList />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
