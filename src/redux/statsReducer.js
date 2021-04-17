import { goodsApi } from "../api/api";
import { setError } from "./errorReducer";

const LOAD_STATS = "stats/LOAD_STATS";

const initialState = {
  isLoading: false,
  stats: {},
};

const statsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_STATS:
      return {
        ...state,
        stats: payload,
      };
    default:
      return state;
  }
};

export const requestStats = () => async (dispatch) => {
  try {
    const result = await goodsApi.listStats();
    dispatch(loadStats(result.data));
  } catch (error) {
    dispatch(setError(true, "error: failed to get stats", "problem with server or internet connection"));
  }
};

export const loadStats = (stats) => {
  return {
    type: LOAD_STATS,
    payload: stats,
  };
};

export default statsReducer;
