import React from "react";
import { useSelector } from "react-redux";
import CITIES from "../../assets/data/cities.json";
import Map from "../../components/Map";
import GameMenu from "../../components/GameMenu";

const Game = () => {
  const gameDifficulty = useSelector((store) => store.gameDifficulty);

  let filteredCities = CITIES;

  if (gameDifficulty === "Easy") {
    filteredCities = CITIES.filter((n) => n.code.length === 1);
  } else if (gameDifficulty === "Medium") {
    filteredCities = CITIES.filter((n) => n.code.length <= 2);
  } else if (gameDifficulty === "Hard") {
    filteredCities = CITIES.filter((n) => n.code.length <= 3);
  } else {
    console.log("No difficulty selected");
  }

  return (
    <>
      <Map labelsDisplays={false} datas={filteredCities} />
      <GameMenu />
    </>
  );
};

export default Game;
