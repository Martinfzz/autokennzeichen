/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import CityList from "./components/CityList";
import Game from "./Pages/Game";

const App = () => {
  const filteredData = useSelector((store) => store.filterData);

  return (
    <Router>
      <div className="flex">
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<Map labelsDisplays datas={filteredData} />} />
            <Route path="city-list" element={<CityList />} />
            <Route path="game" element={<Game />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
