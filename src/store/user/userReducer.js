import {
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILED,
  MAP_INFOS,
  GAME_DIFFICULTY,
} from "./userType";
import CITIES from "../../assets/data/cities.json";

const INITIAL_STATE = {
  loading: false,
  isFiltered: false,
  filterData: CITIES,
  filterError: "",
  error: "",
  map: "",
  gameDifficulty: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_REQUEST:
      return {
        ...state,
        loading: true,
        isFiltered: false,
        filterError: "",
        error: "",
      };
    case FILTER_FAILED:
      return {
        ...state,
        loading: false,
        isFiltered: false,
        filterError: action.error,
      };
    case FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isFiltered: true,
        filterData: action.filter,
      };
    case MAP_INFOS:
      return {
        ...state,
        map: action.mapData,
      };
    case GAME_DIFFICULTY:
      return {
        ...state,
        gameDifficulty: action.difficulty,
      };
    default:
      return state;
  }
};

export default userReducer;
