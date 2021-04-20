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
    let reg1 = /[!-~]{6,100}/;
    let reg2 = /[^!-~]/;
    if (reg1.test(value) && !reg2.test(value)) {
        return undefined;
    };
    return "the expression must contain only the letters of the Latin alphabet, numbers and special characters";
}

export const IsInteger = (value) => {
    if (!value) {
        return "Field is required";
    }
    value = Number(value);
    if (!Number.isInteger(value)) {
        return "value should be integer";
    }
    return undefined;
}