const SET_ERROR = "warehouse/error/SET_ERROR";

const initialState = {
    error: {
        isError: false,
        errorMessage: "",
        errorCorrectionMessages: ""
    },
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default errorReducer;

export const setError = (isError, errorMessage, errorCorrectionMessages) => ({
    type: SET_ERROR,
    error: {
        isError,
        errorMessage,
        errorCorrectionMessages
    }

})