// Loop through adding 3 consecutive numbers together to try and reach 7
// Feel like it can do it with a reduce.

// const arr = [1, 2, 4, 3]

// const luckySeven = (arr) => {
//   return arr.reduce((acc, el) => {
//     return
//   }, true)
// }


// for loop way

const arr = [1, 2, 4, 3, 7, 8]

function luckySeven() {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return true
    }
  }
  return false

}
console.log(luckySeven())
