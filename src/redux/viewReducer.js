import { goodsApi } from "../api/api";
import { setError } from "./errorReducer";

const SET_GOODS = "warehouse/view/SET_GOODS";
const SET_IS_LOADING = "warehouse/view/SET_IS_LOADING";
const initialState = {
    goods: null,
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                goods: action.goods
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const getGoods = (goodsId) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.getGoods(goodsId).then(response => {
            dispatch(setGoods(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed get object", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export default viewReducer;

export const setGoods = (goods) => ({
    type: SET_GOODS,
    goods
})

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})
