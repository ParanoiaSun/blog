
const serverErrorCode = 0;
const successCode = 1;
const businessErrorCode = 2;

function responseSuccess(res, message='success', data = {}) {
    let responseData = {};
    responseData.code = successCode;
    responseData.message = message;
    responseData.data = data;
    res.status(200).json(responseData);
}

function responseError(res, httpCode = 500, code = serverErrorCode, message='server error', data = {}) {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData);
}

// 获取本地时间，new Date()获取的时间与本地差8小时
function getLocalDateTime() {
    let date = new Date();
    date.setTime(date.setHours(date.getHours() + 8));
    return date;
}

function checkStringEqual(s1, s2) {
    return s1 + '' === s2 + '';
}

function checkEmpty(data) {
    return data + '' === 'null' || data + '' === 'undefined' || data + '' === '';
}

function getImageExtName(type) {
    let extName = '';
    switch (type) {
        case 'image/pjpeg':
            extName = 'jpg';
            break;
        case 'image/jpeg':
            extName = 'jpg';
            break;
        case 'image/png':
            extName = 'png';
            break;
        case 'image/x-png':
            extName = 'png';
            break;
    }
    return extName;
}

exports.businessErrorCode = businessErrorCode;
exports.responseSuccess = responseSuccess;
exports.responseError = responseError;
exports.getLocalDateTime = getLocalDateTime;
exports.checkStringEqual = checkStringEqual;
exports.checkEmpty = checkEmpty;
exports.getImageExtName = getImageExtName;