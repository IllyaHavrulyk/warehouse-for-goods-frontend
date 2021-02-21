import { goodsApi } from "../api/api";

const INITIAL_GOODS = "SET_GOODS";

const initialState = {
    goods: [],
    isLoading: false
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

export default goodsReducer;

export const initialGoods = (goods) => ({
    type: INITIAL_GOODS,
    goods
}) 