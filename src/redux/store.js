import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";
import thunkMiddleWare from "redux-thunk";
import viewReducer from "./viewReducer";

let reducer = combineReducers({
    goods: goodsReducer,
    view: viewReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleWare));
export default store;