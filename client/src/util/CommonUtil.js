export function isStringEmpty(input) {
    return input + '' === 'null' || input + '' === 'undefined' || input.trim ? input.trim() === '' : input.replace(/^\s+|\s+$/gm) === '';
}

export function isObjNull(obj) {
    return obj + '' === 'null' || obj + '' === 'undefined';
}

export function getStrValue(input) {
    return input.toString();
}

export function formISODate(dateForm) {
    if (isObjNull(dateForm)) {
        return '';
    } else {
        let dateJson = new Date(dateForm).toJSON();
        return new Date(dateJson).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
    }
}