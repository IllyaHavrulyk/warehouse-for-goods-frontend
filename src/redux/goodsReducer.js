import { goodsApi } from "../api/api";
import { setError } from "./errorReducer";

const SET_GOODS = "warehouse/goods/SET_GOODS";
const ADD_GOODS = "warehouse/goods/ADD_GOODS";
const SET_IS_PUT_GOODS = "warehouse/goods/SET_IS_PUT_GOODS";
const DELETE_GOODS = "warehouse/goods/DELETE_GOODS";
const GET_GOODS = "warehouse/goods/GET_GOODS";
const SET_IS_EDIT_GOODS = "warehouse/goods/SET_IS_EDIT_GOODS";
const EDIT_GOODS = "warehouse/goods/EDIT_GOODS";
const SET_IS_LOADING = "warehouse/goods/SET_IS_LOADING";
const SEARCH_GOODS = "warehouse/goods/SEARCH_GOODS";
const FILTER_PRICE = "warehouse/goods/FILTER_PRICE";
const DELETE_FILTER = "warehouse/goods/DELETE_FILTER";
const DELETE_SEARCH = "warehouse/goods/DELETE_SEARCH";

const initialState = {
    goods: [],
    isLoading: false,
    isPutGoods: false,
    goodsEdit: null,
    isEditGoods: false,
    isSearch: false,
    isFilter: false,
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS: {
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
        case EDIT_GOODS:
            return {
                ...state,
                isEditGoods: true,
                goods: state.goods.map(item => {
                    if (item.id === action.goods.id) {
                        return action.goods;
                    }
                    return item
                }),
                goodsEdit: null
            }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SEARCH_GOODS: {
            return {
                ...state,
                goods: action.goods,
                isSearch: true
            }
        }
        case FILTER_PRICE: {
            return {
                ...state,
                goods: action.goods,
                isFilter: true
            }
        }
        case DELETE_SEARCH: {
            return {
                ...state,
                goods: action.goods,
                isSearch: false
            }
        }
        case DELETE_FILTER: {
            return {
                ...state,
                goods: action.goods,
                isFilter: false
            }
        }
        default:
            return state;
    }
}

export const requestGoods = (warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.initialGoods(warehouseId).then(response => {
            dispatch(setGoods(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed to get objects", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })

    }
}


export const addGoods = (goods, warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.putGoods(goods, warehouseId).then(response => {
            dispatch(putGoods(response.data));
            dispatch(setIsPutGoods(true));
        }).catch((e) => {
            dispatch(setError(true, "error: failed add object", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}
export const deleteGoods = (goodsId, warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.deleteGoods(goodsId, warehouseId).then(response => {
            dispatch(deleteGoodsAC(goodsId));
        }).catch((e) => {
            dispatch(setError(true, "error: failed delete object", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export const getGoods = (goodsId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.getGoods(goodsId).then(response => {
            dispatch(getGoodsAC(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed get object", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export const editGoods = (goods) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.editGoods(goods).then(response => {
            dispatch(editGoodsAC(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed edit object", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export const filterPrice = (minPrice, maxPrice, warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.filter(minPrice, maxPrice, warehouseId).then(response => {
            dispatch(filterPriceAC(response.data));
        }).catch(e => {
            dispatch(setError(true, "error: failed to filter product"));
        })
            .finally(() => {
                dispatch(setIsLoadingGoods(false))
            })
    }
}

export const searchGoods = (dateGoods, warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.searchGoods(dateGoods, warehouseId).then(response => {
            dispatch(searchGoodsAC(response.data));
        }).catch(e => {
            dispatch(setError(true, "error: failed to search product"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export const deleteFilter = (warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.initialGoods(warehouseId).then(response => {
            dispatch(deleteFilterAC(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed to get objects"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export const deleteSearch = (warehouseId) => {
    return (dispatch) => {
        dispatch(setIsLoadingGoods(true));
        goodsApi.initialGoods(warehouseId).then(response => {
            dispatch(deleteSearchAC(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed to get objects", "problem with server or internet connection"));
        }).finally(() => {
            dispatch(setIsLoadingGoods(false));
        })
    }
}

export default goodsReducer;

export const setGoods = (goods) => ({
    type: SET_GOODS,
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

export const setIsLoadingGoods = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})

const searchGoodsAC = (goods) => ({
    type: SEARCH_GOODS,
    goods
})

const filterPriceAC = (goods) => ({
    type: FILTER_PRICE,
    goods
})

const deleteFilterAC = (goods) => ({
    type: DELETE_FILTER,
    goods
})

const deleteSearchAC = (goods) => ({
    type: DELETE_SEARCH,
    goods
})

const editGoodsAC = (goods) => ({
    type: EDIT_GOODS,
    goods
})