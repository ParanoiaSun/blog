import { isObjNull, getStrValue } from "./CommonUtil";

const serverUrl = 'http://127.0.0.1:8000/api';

export function fetchFile(url, header, type) {

    const request = fetch(serverUrl + url, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            'Accept': type,
            'Content-Type': 'application/x-www-form-urlencoded',
            ...header
        })
    });

    return request.then(response => {
        if (response.status >= 200 && response.status < 500) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }).then((response => Promise.resolve(response)))
    .catch(error => {
        if (error.json) {
            return error.json();
        } else {
            return error;
        }
    });
}

export function fetchPost(url, params, bodyParams, header) {
    if(isObjNull(header))
        header = {};

    let formData = '';

    // if (!isObjNull(params)) {
    //     params.forEach(function(value, key, map) {
    //         console.log(key + ': ' + value);
    //         formData.append(key, value);
    //     });
    // }
    if (params) {
        let paramsArray = [];
        params.forEach(function(value, key) {
            paramsArray.push(key + '=' + encodeURI(getStrValue(value)));
        });

        if (paramsArray.length > 0) {
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
        }
    }

    if (bodyParams) {
        let paramsArray = [];
        //拼接参数
        bodyParams.forEach(function(value, key, map) {
            paramsArray.push(key + '=' + encodeURI(getStrValue(value)));
        });
        formData = paramsArray.join('&');
    }

    const request = fetch(serverUrl + url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        // credentials: 'include',
        // cache: "force-cache",
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            ...header
        })
    });

    return fetchResult(request)
}

export function fetchGet(url, params, header) {
    if (isObjNull(header)) {
        header = {}
    }

    if (params) {
        let paramsArray = [];
        //拼接参数
        params.forEach(function(value, key, map) {
            paramsArray.push(key + '=' + encodeURI(getStrValue(value)));
        });

        if (paramsArray.length > 0) {
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
        }
    }

    const request = fetch(serverUrl + url, {
        method: 'GET',
        mode: 'cors',
        // credentials: 'include',
        // cache: "force-cache",
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            ...header
        })
    });

    return fetchResult(request);
}

/**
 * 处理网络请求结果
 * @param request
 * @returns {*}
 */
function fetchResult(request) {
    try {
        return request.then(response => {
            if (response.status >= 200 && response.status < 500) {
                return response.json();
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).then((response => Promise.resolve(response)))
            .catch(error => {
            if (error.json) {
                return error.json();
            } else {
                return error;
            }
        });
    } catch (e) {
        return Promise.reject('服务器请求异常');
    }
}