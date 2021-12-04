const checkBingoCard = data => {
  const validLines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24]
  ]

  return validLines.map((tableIndexes) => {
    return ![...tableIndexes].map(tableIndex => data[tableIndex] === "X").some(value => !value)
  }).some(value => value)
}



const getWinningBingoCard = (data, pulledNumber) => {
  let recordedNumberPerCard = []
  data.forEach(() => recordedNumberPerCard.push([]))
  let dataSaved = [...data]


  pulledNumber.forEach(currentNumber => {
    dataSaved = dataSaved.map((card, cardIndex) => {
      return card.map((value, valueIndex) => {
        if (value === currentNumber) {
          recordedNumberPerCard[cardIndex].push(value)
          return "X"
        }
        return value

      })
    })
    isACardValid = dataSaved.map(card => checkBingoCard(card))

    if (isACardValid.some(value => value)) {
      const indexOfCard = isACardValid.findIndex(value => value === true)
      const sumOfUnmarkedNumber = dataSaved[indexOfCard].filter(value => value !== "X").reduce((prev, current) => prev + current)
      //take first console.log
      console.log(indexOfCard, sumOfUnmarkedNumber * currentNumber)

      return
    }

  })



}

const getLoosingBingoCard = (data, pulledNumber) => {
  let recordedNumberPerCard = []
  data.forEach(() => recordedNumberPerCard.push([]))
  let dataSaved = [...data]
  let indexOfCard = 0

  pulledNumber.forEach(currentNumber => {
    dataSaved = dataSaved.map((card, cardIndex) => {
      return card.map((value, valueIndex) => {
        if (value === currentNumber) {
          recordedNumberPerCard[cardIndex].push(value)
          return "X"
        }
        return value

      })
    })
    isACardValid = dataSaved.map(card => checkBingoCard(card))

    if (isACardValid.reduce((prev, current) => {
        return !current ? prev + 1 : prev
      }, 0) === 1) {
      console.log(isACardValid)
      indexOfCard = isACardValid.findIndex(value => value === false)
    }
    if ((isACardValid.reduce((prev, current) => {
        return !current ? prev + 1 : prev
      }, 0) === 0)) {
      console.log(indexOfCard)
      const sumOfUnmarkedNumber = dataSaved[indexOfCard].filter(value => value !== "X").reduce((prev, current) => prev + current)
            //take first console.log
      console.log(indexOfCard, sumOfUnmarkedNumber * currentNumber)
    }


  })


}
