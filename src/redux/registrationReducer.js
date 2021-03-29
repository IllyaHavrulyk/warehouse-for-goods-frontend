import { goodsApi } from "../api/api";

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
            dispatch(registrationAC());
        })
    }
}


const registrationAC = () => {
    return {
        type: REGISTRATION,
        isRegistration: true
    }
}