import { goodsApi } from "../api/api";

const INITIAL_GOODS = "warehouse/goods/INITIAL_GOODS";
const ADD_GOODS = "warehouse/goods/ADD_GOODS";
const SET_IS_PUT_GOODS = "warehouse/goods/SET_IS_PUT_GOODS";
const DELETE_GOODS = "warehouse/goods/DELETE_GOODS";
const GET_GOODS = "warehouse/goods/GET_GOODS";
const SET_IS_EDIT_GOODS = "warehouse/goods/SET_IS_EDIT_GOODS";
const SET_IS_ERROR_AND_ERROR = "warehouse/goods/SET_IS_ERROR_AND_ERROR";
const SET_IS_LOADING = "warehouse/goods/SET_IS_LOADING";

const initialState = {
    goods: [],
    isLoading: false,
    isPutGoods: false,
    goodsEdit: null,
    isEditGoods: false,
    isError: false,
    error: null
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_GOODS: {
            return {
                ...state,
                goods: action.goods,
            }
        }
        case ADD_GOODS: {
            return {
                ...state,
                goods: [...state.goods, action.goods]
            }
        }
        case SET_IS_PUT_GOODS:
            return {
                ...state,
                isPutGoods: action.isPutGoods
            }
        case DELETE_GOODS:
            return {
                ...state,
                goods: state.goods.filter((item => {
                    return item.id != action.goodsId;
                }))
            }
        case GET_GOODS:
            return {
                ...state,
                goodsEdit: action.goods
            }
        case SET_IS_EDIT_GOODS:
            return {
                ...state,
                isEditGoods: action.isEditGoods,
                goodsEdit: null
            }
        case SET_IS_ERROR_AND_ERROR:
            return {
                ...state,
                isError: action.isError,
                error: action.error
            }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export const requestGoods = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.initialGoods().then(response => {
            dispatch(initialGoods(response.data));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed to get objects"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })

    }
}


export const addGoods = (goods) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.putGoods(goods).then(response => {
            dispatch(putGoods(goods));
            dispatch(setIsPutGoods(true));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed add object"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const deleteGoods = (goodsId) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.deleteGoods(goodsId).then(response => {
            dispatch(deleteGoodsAC(goodsId));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed delete object"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const getGoods = (goodsId) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.getGoods(goodsId).then(response => {
            dispatch(getGoodsAC(response.data));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed get object"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const editGoods = (goods) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.editGoods(goods).then(response => {
            dispatch(setIsEditGoods(true));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed edit object"));
        }).finally(() => {
            dispatch(setIsLoading(false));
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

export const deleteGoodsAC = (goodsId) => ({
    type: DELETE_GOODS,
    goodsId
})

export const getGoodsAC = (goods) => ({
    type: GET_GOODS,
    goods
})

export const setIsEditGoods = (isEditGoods) => ({
    type: SET_IS_EDIT_GOODS,
    isEditGoods
})

export const setIsErrorEndError = (isError, error) => ({
    type: SET_IS_ERROR_AND_ERROR,
    error,
    isError
})

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})