
const getTotalDepthMultiplyByTotalDistance = data => {
  let depth = 0
  let distance = 0
  data.map(value => {
    const splitedValue = value.split(" ")
    const direction = splitedValue[0]
    const number = parseInt(splitedValue[1])
    if (direction === "forward") {
      distance += number
    } else if (direction === "down") {
      depth += number
    } else if (direction === "up") {
      depth -= number
    }
  })
console.log(depth, "*", distance)
  return depth * distance
}

const getTotalDepthMultiplyByTotalDistanceWithAim = data => {
  let depth = 0
  let distance = 0
  let aim = 0
  data.map(value => {
    const splitedValue = value.split(" ")
    const direction = splitedValue[0]
    const number = parseInt(splitedValue[1])
    if (direction === "forward") {
      distance += number
      depth += number * aim
    } else if (direction === "down") {
      aim += number
    } else if (direction === "up") {
      aim -= number
    }
  })
console.log(depth, "*", distance)
  return depth * distance
}
