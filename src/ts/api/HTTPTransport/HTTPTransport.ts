const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}

function queryStringify(data: object): string {
  return (
    '?' +
    Object.keys(data)
      .map(key => key + '=' + data[key])
      .join('&')
  )
}

class HTTPTransport {
  get = (url, options = {}) => {
    if (typeof options.data === 'object') {
      url = url + queryStringify(options.data)
    }
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    )
  }

  put = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    )
  }

  post = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    )
  }

  delete = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    )
  }

  request = (url, options, timeout = 5000) => {
    const { method, headers, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      if (typeof headers === 'object') {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
      }

      xhr.timeout = timeout
      xhr.withCredentials = true

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}

export { HTTPTransport }
