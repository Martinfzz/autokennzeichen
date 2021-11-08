import {
  FILTER_REQUEST,
  FILTER_SUCCESS,
  FILTER_FAILED,
} from "./userType";

const INITIAL_STATE = {
  loading: false,
  isFilteringSucceed: false,
  filter: {
    code: "", city: "",
  },
  filterError: "",
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdateSucceed: false,
        filterError: "",
        error: "",
      };
    case FILTER_FAILED:
      return {
        ...state,
        loading: false,
        filterError: action.error,
      };
    case FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        filter: action.filterData,
      };
    default:
      return state;
  }
};

export default userReducer;
