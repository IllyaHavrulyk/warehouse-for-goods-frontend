import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";
import thunkMiddleWare from "redux-thunk";

let reducer = combineReducers({
    goods: goodsReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleWare));
export default store;