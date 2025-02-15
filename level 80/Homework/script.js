// unshift() meth0d
let nums = [2,3,4,5]
let nums1 = nums.unshift(0)
console.log(nums1)

console.log("------------------------------------")

// shift() methid
let names = ["giorgi", "gigi", "megi", "mari"]
let names1 = names.shift()
console.log(names1)
console.log(names)

console.log("------------------------------------")

// splice() method
let numbers = [10,11,12,14]
let numbers1 = numbers.splice(3,4,13)
console.log(numbers)

console.log("------------------------------------")

// slice() method
console.log(numbers.slice(1,3))

console.log("------------------------------------")

// sort() methid
let numArr = [2,1,6,4]
let newArr = numArr.sort()
console.log(newArr)

console.log("------------------------------------")
// reverse() method
let arr = [3,2,1]
console.log(arr)
let arr1 = arr.reverse()
console.log(arr1)

console.log("------------------------------------")

// concat() method
let originalArr = [5,6,7,8]
let copyArr = originalArr.concat()

console.log(originalArr)
console.log(copyArr)

copyArr = copyArr.concat([9,10])

console.log(copyArr)
console.log(originalArr)

console.log("------------------------------------")

// join() method
let array = [1,2,3]
console.log(array)
array = array.join("")
console.log(array)

let array1 = [10,20,30]
array1 = array1.join(":")
console.log(array1)