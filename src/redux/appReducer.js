import { goodsApi } from "../api/api";
import { setIsErrorEndError } from "./goodsReducer";

const SET_IS_LOADING = "warehouse/app/SET_IS_LOADING";
const SET_IS_AUTH = "warehouse/app/SET_IS_AUTH";

const initialState = {
    isAuth: false,
    isLoading: true,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export default appReducer;

export const initialApp = () => {
    return (dispatch) => {
        goodsApi.isLogin().then(response => {
            if (response.data === 1) {
                dispatch(setIsAuth(true));
            }
            else {
                dispatch(setIsAuth(false));
            }
        }).catch((e) => {
            if (!e.response) {
                dispatch(setIsErrorEndError(true, "error initialize app"));
            }
            else if (e.response.status !== 401) {
                dispatch(setIsErrorEndError(true, "error initialize app"));
            }
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    }
}

export const login = (userData) => {
    return (dispatch) => {
        goodsApi.login(userData).then(response => {
            dispatch(setIsAuth(true));
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        goodsApi.logout().then(response => {
            dispatch(setIsAuth(false));
        })
    }
}

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})

export const setIsAuth = (isAuth) => ({
    type: SET_IS_AUTH,
    isAuth
})