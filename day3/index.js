const getPowerConsumption = data => {
  const count = []
  let gammaRate = ""
  let epsilonRate = ""

  data.map((value, dataIndex) => {
    const splittedValue = value.split("")
    if (dataIndex === 0) {
      splittedValue.forEach((number, index) => {
        count[index] = {
          "0": 0,
          "1": 0
        }
      })
    }
    splittedValue.forEach((number, index) => {
      count[index][number]++
    })
  })
  count.map(digitCount => {
    if (digitCount["0"] > digitCount["1"]) {
      gammaRate += "0"
      epsilonRate += "1"
    } else {
      epsilonRate += "0"
      gammaRate += "1"
    }
  })
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

const getO2AndCo2Value = async data => {
  let indexToStudy = 0

  const filterRecursive = async (array, valueIndex, isCo2 = false) => {

    let count1 = 0
    let count0 = 0
    const valueToStudy = array.map(value => value[valueIndex])
    valueToStudy.forEach(digit => {
      if (digit === "1") {
        count1++
      } else {
        count0++
      }
    })
    const filteredData = array.filter(value => {
      if (isCo2) {
        return count1 >= count0 ?
          value[valueIndex] === "0" : value[valueIndex] === "1"
      } else {
        return count1 >= count0 ?
          value[valueIndex] === "1" : value[valueIndex] === "0"
      }
    })
    if (filteredData.length > 1) {
      return await filterRecursive(filteredData, valueIndex + 1, isCo2)
    }
    indexToStudy = 0
    return await filteredData[0]

  }

  filteredDataO2 = await filterRecursive(data, indexToStudy)
  filteredDataCO2 = await filterRecursive(data, indexToStudy, true)
  console.log(filteredDataO2, filteredDataCO2)
  console.log(parseInt(filteredDataO2, 2), parseInt(filteredDataCO2, 2))
  console.log(parseInt(filteredDataO2, 2) * parseInt(filteredDataCO2, 2))

}
