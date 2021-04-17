export const Required = (value) => {
    if (value) {
        return undefined;
    }
    return "Field is required";
}

export const PasswordOrLogin = (value) => {
    if (!value) {
        return "Field is required";
    }
    if (value.match(/[!-~]{6,100}/)) {
        return undefined;
    }
    // return "this expression doesn't not fit";
    return undefined;
}
