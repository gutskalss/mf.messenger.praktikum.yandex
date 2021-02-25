const copyfiles = require('copyfiles')

copyfiles(['./static/**/*', './build'], { up: 1 }, () => {})
