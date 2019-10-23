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

export function formISODateToStr(dateForm) {
    if (isObjNull(dateForm)) {
        return '';
    } else {
        let date = new Date(formISODate(dateForm));
        let dateStr = date.getDate() + ' ';
        switch(date.getMonth()) {
            case 0: dateStr += 'Jan'; break;
            case 1: dateStr += 'Feb'; break;
            case 2: dateStr += 'Mar'; break;
            case 3: dateStr += 'Apr'; break;
            case 4: dateStr += 'May'; break;
            case 5: dateStr += 'Jun'; break;
            case 6: dateStr += 'Jul'; break;
            case 7: dateStr += 'Aug'; break;
            case 8: dateStr += 'Sep'; break;
            case 9: dateStr += 'Oct'; break;
            case 10: dateStr += 'Nov'; break;
            case 11: dateStr += 'Dec'; break;
            default: break;
        }
        return dateStr + ', ' + date.getFullYear();
    }
}