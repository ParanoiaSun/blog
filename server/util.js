// let express = require('express');

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

exports.businessErrorCode = businessErrorCode;
exports.responseSuccess = responseSuccess;
exports.responseError = responseError;