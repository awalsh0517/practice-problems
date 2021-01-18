const arr = [[3, 2], [1], [4, 12]]

function arrSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Array.isArray(arr[i]) ? arrSum(arr[i]) : arr[i]
  }
  return sum
}
console.log(arrSum(arr))


function arraySum(arr) {

  let sum = arr.flat().reduce((acc, el) => {
    return acc + el
  }, 0)
  console.log(sum)

}
console.log(arraySum(arr))

