import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store/store";
import { filterSuccess, filterFailed } from "../../store/user/userAction";
import CITIES from "../../assets/data/cities.json";
import Map from "../../components/Map";
import GameMenu from "../../components/GameMenu";

const Game = () => {
  const gameDifficulty = useSelector((stock) => stock.gameDifficulty);
  const filteredData = useSelector((stock) => stock.filterData);
  // const selectedCity = useSelector((stock) => stock.selectedCity);
  const [selectedPin, setSelectedPin] = useState({});
  const [selectedCity, setSelectedCity] = useState([]);
  const [newFilteredData, setNewFilteredData] = useState([]);

  const [displayGameMenu, setDisplayGameMenu] = useState(true);

  const playgame = (data) => {
    const oneCity = [data[Math.floor(Math.random() * data.length)]];
    setSelectedCity(oneCity);
    console.log(oneCity.map((e) => e.code).join());
  };

  useEffect(() => {
    if (Object.keys(selectedPin).length !== 0) {
      if (selectedCity.map((e) => e.code).join() === selectedPin.code) {
        console.log("Trouvé");
        const newDatas = newFilteredData.filter((e) => e.code !== selectedPin.code);
        console.log(newDatas);
        setNewFilteredData(newDatas);
        playgame(newDatas);
      } else {
        console.log("dommage");
      }
    }
  }, [selectedPin]);

  const cityFilter = (value, insane) => {
    let filteredCities = null;
    if (insane) {
      filteredCities = CITIES.filter((n) => n.code.length <= value);
    } else {
      filteredCities = CITIES.filter((n) => n.code.length === value);
    }
    store.dispatch(filterSuccess(filteredCities));
    setNewFilteredData(filteredCities);
    setDisplayGameMenu(false);
    playgame(filteredCities);
  };

  useEffect(() => {
    if (gameDifficulty === "Easy") {
      cityFilter(1, false);
    } else if (gameDifficulty === "Medium") {
      cityFilter(2, false);
    } else if (gameDifficulty === "Hard") {
      cityFilter(3, false);
    } else if (gameDifficulty === "Insane") {
      cityFilter(3, true);
    } else {
      store.dispatch(filterFailed("No difficulty selected"));
    }
  }, [gameDifficulty]);

  return (
    <>
      <Map labelsDisplays={false} datas={filteredData} pinClicked={setSelectedPin} />
      {displayGameMenu && <GameMenu />}
    </>
  );
};

export default Game;
