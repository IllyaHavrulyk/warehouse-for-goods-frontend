import { goodsApi } from "../api/api"
import { setError } from "./errorReducer";

const SET_WAREHOUSES = "warehouse/warehouses/SET_WAREHOUSES";
const ADD_WAREHOUSE = "warehouse/warehouses/ADD_WAREHOUSE";
const SET_ACTIVE_WAREHOUSE_ID = "warehouse/warehouses/SET_ACTIVE_WAREHOUSE_ID";
const DELETE_WAREHOUSE = "warehouse/warehouses/DELETE_WAREHOUSE";
const SET_IS_LOADING = "warehouse/warehouses/SET_IS_LOADING";

const initialState = {
    activeWarehouseId: null,
    warehouses: [],
    isLoading: false
}

const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WAREHOUSES: {
            return {
                ...state,
                warehouses: action.warehouses
            }
        }
        case ADD_WAREHOUSE: {
            return {
                ...state,
                warehouses: [...state.warehouses, action.warehouse]
            }
        }
        case SET_ACTIVE_WAREHOUSE_ID: {
            return {
                ...state,
                activeWarehouseId: action.warehouseId
            }
        }
        case DELETE_WAREHOUSE: {
            return {
                ...state,
                warehouses: state.warehouses.filter(item => (item.id !== action.warehouseId))
            }
        }
        case setIsLoadingWarehouse: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export const requestWarehouses = () => {
    return (dispatch) => {
        goodsApi.getWarehouses().then(response => {
            dispatch(setWarehouses(response.data));
        }).catch((e) => {
            dispatch(setError(true, "error: failed to get warehouses", "problem with server or internet connection"));
        })
    }
}

export const addWarehouse = (name) => {
    return (dispatch) => {
        goodsApi.addWarehouse(name).then(response => {
            dispatch(addWarehouseAC(response.data))
        }).catch((e) => {
            dispatch(setError(true, "error: failed to add warehouse", "problem with server or internet connection"));
        })
    }
}

export const deleteWarehouse = (id) => {
    return (dispatch) => {
        goodsApi.deleteWarehouse(id).then(response => {
            dispatch(deleteWarehouseAC(id));
        }).catch((e) => {
            dispatch(setError(true, "error: failed to delete warehouse", "problem with server or internet connection"));
        })
    }
}

export const setWarehouses = (warehouses) => ({
    type: SET_WAREHOUSES,
    warehouses
})

export const addWarehouseAC = (warehouse) => ({
    type: ADD_WAREHOUSE,
    warehouse
})

export const setActiveWarehouseId = (warehouseId) => ({
    type: SET_ACTIVE_WAREHOUSE_ID,
    warehouseId
})

export const deleteWarehouseAC = (warehouseId) => ({
    type: DELETE_WAREHOUSE,
    warehouseId
})

export const setIsLoadingWarehouse = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})

export default warehouseReducer;