import { goodsApi } from "../api/api";
import { setIsAuth } from "./appReducer";
import { setError } from "./errorReducer";

const REGISTRATION = "warehouse/registration/REGISTRATION";

const initialState = {
    isRegistration: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {
                ...state,
                isRegistration: action.isRegistration
            }
        }
        default:
            return state;
    }
}

export default registrationReducer;

export const registration = (login, password) => {
    return (dispatch) => {
        goodsApi.registration(login, password).then(response => {
            localStorage.setItem(
                "userData",
                window.btoa(login + ":" + password)
            );
            dispatch(setIsAuth(true));
            dispatch(registrationAC());
        }).catch((e) => {
            dispatch(setError(true, "error registration", "problem with server or internet connection"));
        })
    }
}


const registrationAC = () => {
    return {
        type: REGISTRATION,
        isRegistration: true
    }
}