module.exports = api => {
  // Cache configuration is a required option
  api.cache(false)

  const presets = [
    ['@babel/preset-env', { targets: { chrome: 56 } }],
    '@babel/preset-typescript',
  ]

  return { presets }
}
