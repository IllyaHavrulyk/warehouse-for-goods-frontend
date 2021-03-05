import { goodsApi } from "../api/api";

const SET_GOODS = "warehouse/view/SET_GOODS";

const initialState = {
    goods: null
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                goods: action.goods
            }
        default:
            return state
    }
}

export const getGoods = (goodsId) => {
    return (dispatch) => {
        goodsApi.getGoods(goodsId).then(response => {
            dispatch(setGoods(response.data));
        })
    }
}

export default viewReducer;

export const setGoods = (goods) => ({
    type: SET_GOODS,
    goods
})