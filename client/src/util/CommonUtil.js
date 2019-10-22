export function isStringEmpty(input) {
    return input + '' === 'null' || input + '' === 'undefined' || input.trim ? input.trim() === '' : input.replace(/^\s+|\s+$/gm) === '';
}

export function isObjNull(obj) {
    return obj + '' === 'null' || obj + '' === 'undefined';
}

export function getStrValue(input) {
    return input.toString();
}