import { goodsApi } from "../api/api";

const SET_GOODS = "warehouse/goods/SET_GOODS";
const ADD_GOODS = "warehouse/goods/ADD_GOODS";
const SET_IS_PUT_GOODS = "warehouse/goods/SET_IS_PUT_GOODS";
const DELETE_GOODS = "warehouse/goods/DELETE_GOODS";
const GET_GOODS = "warehouse/goods/GET_GOODS";
const SET_IS_EDIT_GOODS = "warehouse/goods/SET_IS_EDIT_GOODS";
const EDIT_GOODS = "warehouse/goods/EDIT_GOODS";
const SET_IS_ERROR_AND_ERROR = "warehouse/goods/SET_IS_ERROR_AND_ERROR";
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
    isError: false,
    error: null,
    isSearch: false,
    isFilter: false
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
                    debugger;
                    if (item.id === action.goods.id) {
                        return action.goods;
                    }
                    return item
                }),
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

export const requestGoods = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.initialGoods().then(response => {
            dispatch(setGoods(response.data));
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
            dispatch(editGoodsAC(response.data));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed edit object"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const filterPrice = (minPrice, maxPrice) => {
    return (dispatch) => {
        goodsApi.filter(minPrice, maxPrice).then(response => {
            dispatch(filterPriceAC(response.data));
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        goodsApi.logout().then(response => {
        })
    }
}

export const searchGoods = (dateGoods) => {
    return (dispatch) => {
        goodsApi.searchGoods(dateGoods).then(response => {
            dispatch(searchGoodsAC(response.data));
        })
    }
}

export const deleteFilter = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.initialGoods().then(response => {
            dispatch(deleteFilterAC(response.data));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed to get objects"));
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const deleteSearch = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsApi.initialGoods().then(response => {
            dispatch(deleteSearchAC(response.data));
        }).catch((e) => {
            dispatch(setIsErrorEndError(true, "error: failed to get objects"));
        }).finally(() => {
            dispatch(setIsLoading(false));
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

export const setIsErrorEndError = (isError, error) => ({
    type: SET_IS_ERROR_AND_ERROR,
    error,
    isError
})

export const setIsLoading = (isLoading) => ({
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