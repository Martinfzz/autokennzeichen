import {
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILED,
  MAP_INFOS,
  GAME_DIFFICULTY,
} from "./userType";

export const filterRequest = () => ({
  type: FILTER_REQUEST,
});

export const filterSuccess = (data) => ({
  type: FILTER_SUCCESS,
  filter: data,
});

export const filterFailed = (error) => ({
  type: FILTER_FAILED,
  error,
});

export const mapInfos = (data) => ({
  type: MAP_INFOS,
  mapData: data,
});

export const gameDifficulty = (data) => ({
  type: GAME_DIFFICULTY,
  difficulty: data,
});
