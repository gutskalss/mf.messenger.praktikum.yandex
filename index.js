const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('static'))

app.get('*', function (req, res, next) {
  let _path = req.path
  _path = _path.substr(-1) === '/' ? _path.substr(0, path.length - 1) : _path
  const lastComp = _path.split('/')
  const name = lastComp[lastComp.length - 1].includes('.')
  if (!name) {
    res.sendFile(path.resolve(__dirname, 'static/index.html'))
  } else {
    next()
  }
})

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`)
})
