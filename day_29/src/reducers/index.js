import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  placeData: placeDataReducer,
  place: placeReducer,
  theme: themeReducer,
});

export default rootReducer;
