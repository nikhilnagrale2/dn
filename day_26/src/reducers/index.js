import changeReducer from "./change";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeReducer: changeReducer,
});

export default rootReducer;
