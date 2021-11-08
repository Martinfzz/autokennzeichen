import {
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILED,
} from "./userType";

export const filterRequest = () => ({
  type: FILTER_REQUEST,
});

export const filterSuccess = (user, token) => ({
  type: FILTER_SUCCESS,
  userProfile: user,
  jtwToken: token,
});

export const filterFailed = (error) => ({
  type: FILTER_FAILED,
  error,
});
