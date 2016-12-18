const worries = ['Death', 'Taxes', 'Brexit', 'Trump', 'Stress']

const randomWorry = () => {
  if (worries.length) {
    const randIndex = Math.floor(Math.random() * worries.length)
    const worry = worries[ randIndex ]
    worries.splice(randIndex, 1)
    return worry
  } else {
    return 'Your insatiable desire to be worried'
  }
}

export default randomWorry
