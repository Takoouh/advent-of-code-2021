
const countIncreased = (data) => {
  let increasedNumber = 0
  let PrevData = 0
  data.map((value, index) => {
    if (index > 0) {
      value > PrevData ? increasedNumber++ : ""
    }
    prevdata = value
  })
  return increasedNumber
}

const countThreeIncreased = data => {
  let increasedNumber = 0
  let prevSumData = 0

  data.map((value, index) => {
    if (data.length-1 >= index + 2) {
      const currentSumData = value + data[index + 1] + data[index + 2]
      if (index > 0) {
        currentSumData > prevSumData ? increasedNumber++ : ""
      }
      prevSumData = currentSumData
    }
  })
  return increasedNumber

}
