import { goodsApi } from "../api/api";

const SET_GOODS = "warehouse/view/SET_GOODS";
const SET_ERROR = "warehouse/view/SET_ERROR";
const SET_IS_LOADING = "warehouse/view/SET_IS_LOADING";

const initialState = {
    goods: null,
    isError: false,
    error: null
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                goods: action.goods
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.isError,
                error: action.error
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
            dispatch(setError(true, "error: failed get object"));
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

export const setError = (error, isError) => ({
    type: SET_ERROR,
    error,
    isError
})