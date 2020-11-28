import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentData: {},
  startIndex: 0,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_DATA:
      return state.set("currentData", action.data);
    case actionTypes.CHANG_START_INDEX:
      return state.set("startIndex", action.data);
    default:
      return state;
  }
};
