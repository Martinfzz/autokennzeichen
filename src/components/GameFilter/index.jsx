import { useSelector } from "react-redux";
import store from "../../store/store";
import { filterSuccess, filterFailed } from "../../store/user/userAction";
import CITIES from "../../assets/data/cities.json";

const GameFilter = () => {
  const gameDifficulty = useSelector((storee) => storee.gameDifficulty);

  if (gameDifficulty === "Easy") {
    const filteredCities = CITIES.filter((n) => n.code.length === 1);
    store.dispatch(filterSuccess(filteredCities));
  } else if (gameDifficulty === "Medium") {
    const filteredCities = CITIES.filter((n) => n.code.length <= 2);
    store.dispatch(filterSuccess(filteredCities));
  } else if (gameDifficulty === "Hard") {
    const filteredCities = CITIES.filter((n) => n.code.length <= 3);
    store.dispatch(filterSuccess(filteredCities));
  } else {
    store.dispatch(filterFailed("No difficulty selected"));
  }
};

export default GameFilter;
