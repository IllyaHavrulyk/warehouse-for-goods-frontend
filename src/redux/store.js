import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";
import thunkMiddleWare from "redux-thunk";
import viewReducer from "./viewReducer";
import appReducer from "./appReducer";
import registrationReducer from "./registrationReducer";
import warehouseReducer from "./warehouseReducer";
import statsReducer from "./statsReducer";
let reducer = combineReducers({
  goods: goodsReducer,
  view: viewReducer,
  app: appReducer,
  registration: registrationReducer,
  warehouse: warehouseReducer,
  stats: statsReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleWare));
export default store;
