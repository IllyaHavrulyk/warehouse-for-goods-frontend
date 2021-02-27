import { goodsApi } from "../api/api";

const INITIAL_GOODS = "SET_GOODS";
const ADD_GOODS = "ADD_GOODS";
const SET_IS_PUT_GOODS = "SET_IS_PUT_GOODS";
const DELETE_GOODS = "DELETE_GOODS";
const GET_GOODS = "GET_GOODS";
const SET_IS_EDIT_GOODS = "SET_IS_EDIT_GOODS";

const initialState = {
    goods: [],
    isLoading: false,
    isPutGoods: false,
    goodsEdit: null,
    isEditGoods: false
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
                isEditGoods: action.isEditGoods
            }
        default:
            return state;
    }
}

export const requestGoods = () => {
    return (dispatch) => {
        goodsApi.initialGoods().then(response => {
            debugger;
            dispatch(initialGoods(response.data));
        })
    }
}

export const addGoods = (goods) => {
    return (dispatch) => {
        goodsApi.putGoods(goods).then(response => {
            dispatch(putGoods(goods));
            dispatch(setIsPutGoods(true));
        })
    }
}

export const deleteGoods = (goodsId) => {
    return (dispatch) => {
        goodsApi.deleteGoods(goodsId).then(response => {
            dispatch(deleteGoodsAC(goodsId));
        })
    }
}

export const getGoods = (goodsId) => {
    return (dispatch) => {
        goodsApi.getGoods(goodsId).then(response => {
            dispatch(getGoodsAC(response.data));
        })
    }
}

export const editGoods = (goods) => {
    return (dispatch) => {
        goodsApi.editGoods(goods).then(response => {
            dispatch(setIsEditGoods(true));
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