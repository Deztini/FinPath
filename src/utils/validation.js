export function isEmail(value) {
    return value.includes("@");
}

export function isNotEmpty(value) {
    return value.trim() !== "";
}

export function isEqual(value, otherValue) {
    return value === otherValue;
}

export function hasMinLength(value, minLength) {
    return value.length >= minLength;
}