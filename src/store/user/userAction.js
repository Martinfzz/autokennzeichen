import {
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILED,
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
