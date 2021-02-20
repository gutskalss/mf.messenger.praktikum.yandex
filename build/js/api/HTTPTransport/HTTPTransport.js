const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};
function queryStringify(data) {
    return ('?' +
        Object.keys(data)
            .map(key => key + '=' + data[key])
            .join('&'));
}
export class HTTPTransport {
    constructor() {
        this.get = (url, options = {}) => {
            if (typeof options.data === 'object') {
                url = url + queryStringify(options.data);
            }
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.put = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }), options.timeout);
        };
        this.post = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.POST }), options.timeout);
        };
        this.delete = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }), options.timeout);
        };
        this.request = (url, options, timeout = 5000) => {
            const { method, headers, data } = options;
            const defaultHeaders = {
                'Content-Type': 'application/json',
            };
            const mergedHeaders = Object.assign(Object.assign({}, defaultHeaders), headers);
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                if (headers !== null) {
                    Object.keys(mergedHeaders).forEach(key => {
                        xhr.setRequestHeader(key, mergedHeaders[key]);
                    });
                }
                xhr.timeout = timeout;
                xhr.withCredentials = true;
                xhr.onload = function () {
                    resolve(xhr);
                };
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (method === METHODS.GET || !data) {
                    xhr.send();
                }
                else {
                    xhr.send(data);
                }
            });
        };
    }
}
//# sourceMappingURL=HTTPTransport.js.map