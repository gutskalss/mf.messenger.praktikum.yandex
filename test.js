const one = {
  name: 'one',
}

const two = {
  name: 'two',
  ...one,
  disk: 'no',
}

console.log(two)
