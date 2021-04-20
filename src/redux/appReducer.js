import { goodsApi } from "../api/api";
import { setError } from "./errorReducer";

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
        dispatch(setIsLoadingApp(true));
        goodsApi.isLogin().then(response => {
            if (response.data === 1) {
                dispatch(setIsAuth(true));
            }
            else {
                dispatch(setIsAuth(false));
            }
        }).catch((e) => {
            console.log(e);
            if (!e.response) {
                dispatch(setError(true, "error initialize app", "problem with server or internet connection"));
            }
            else if (e.response.status !== 401) {
                dispatch(setError(true, "error initialize app", "problem with server or internet connection"));
            }
        }).finally(() => {
            dispatch(setIsLoadingApp(false));
        })
    }
}

export const login = (userData) => {
    return (dispatch) => {
        dispatch(setIsLoadingApp(true));
        goodsApi.login(userData).then(response => {
            localStorage.setItem(
                "userData",
                window.btoa(userData.username + ":" + userData.password)
            );
            dispatch(setIsAuth(true));
        }).catch((e) => {
            if (e.response && e.response.status === 400) {
                dispatch(setError(true, "error login", "check your login or password and try again"));
            }
            else {
                dispatch(setError(true, "error login", "problem with server or internet connection"));
            }
        }).finally(() => {
            dispatch(setIsLoadingApp(false));
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setIsLoadingApp(true));
        goodsApi.logout().then(response => {

        }).catch((e) => {
            localStorage.removeItem("userData");
            dispatch(setIsAuth(false));
            //dispatch(setError(true, "error logout", "problem with server or internet connection"));

        }).finally(() => {
            dispatch(setIsLoadingApp(false));
        })
    }
}

export const setIsLoadingApp = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
})

export const setIsAuth = (isAuth) => ({
    type: SET_IS_AUTH,
    isAuth
})