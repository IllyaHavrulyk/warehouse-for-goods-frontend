import { goodsApi } from "../api/api";

const INITIAL_GOODS = "SET_GOODS";
const ADD_GOODS = "ADD_GOODS";
const SET_IS_PUT_GOODS = "SET_IS_PUT_GOODS";

const initialState = {
    goods: [],
    isLoading: false,
    isPutGoods: false
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_GOODS: {
            return {
                ...state,
                goods: action.goods,
                isLoading: true
            }
        }
        case ADD_GOODS: {
            return {
                ...state,
                goods: state.goods.push(action.goods)
            }
        }
        case SET_IS_PUT_GOODS:
            return {
                ...state,
                isPutGoods: action.isPutGoods
            }
        default:
            return state;
    }
}

export const requestGoods = () => {
    return (dispatch) => {
        goodsApi.initialGoods().then(response => {
            dispatch(initialGoods(response.data));
        })
    }
}

export const addGoods = (goods) => {
    debugger;
    return (dispatch) => {
        goodsApi.putGoods(goods).then(response => {
            dispatch(putGoods(goods));
            dispatch(setIsPutGoods(true));
        })
    }
}

export default goodsReducer;

export const initialGoods = (goods) => ({
    type: INITIAL_GOODS,
    goods
})

export const putGoods = (goods) => ({
    type: ADD_GOODS,
    goods
})

export const setIsPutGoods = (isPutGoods) => ({
    type: SET_IS_PUT_GOODS,
    isPutGoods
})