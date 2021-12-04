function gosht(...input){
  let sum = 0
  for (let i of input)
    sum += i
  return sum
}

// console.log(gosht(1,2,3))

let arr = [1, 2, 3]
let arr2 = [4, 5, 6]
arr = [...arr, ...arr2]
// console.log(arr)


let list = ['China','Indonesia','Germany', ,'Canada','Camerun','Laos']
let data = ['3','4','76','22','52','9']
let numbers = [3,4,76,22,52,9]
let test = [null, undefined, false, 0, 3,4,76,22,52,9]
let result = 0

// isArray, check if an element is an array
console.log('isArray')
console.log(Array.isArray(list))
console.log(Array.isArray(false))

//join, join all elements inside the list by a separator indicated inside the join function
console.log('join')
console.log(list.join())
console.log(list.join(''))
console.log(list.join(', '))

//key, show keys iterator from a list
console.log('keys');
console.log(list[3]);
console.log(list.length);
const iterator = list.keys()
for(const key of iterator){
  console.log(key);
}
var sparseKeys = Object.keys(list);
var denseKeys = [...list.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);

// pop, remove an element at the end of the list and can be saved in a variable
console.log('pop')
const lastElement = list.pop('Singapur')
console.log(lastElement);
console.log(list);

// push, add one or more elements at the end of the list
console.log('push')
list.push('Singapur')
console.log(list);
list.push('Russia', 'Finland')
console.log(list);

//reduce, execute a function, operating with two values, accumulating a value and an element already analyzed
console.log('reduce')
result = numbers.reduce((acc, value) => acc < value ? value : acc)
console.log(result)

result = test.reduce((acc, value) => {
  console.log(acc);
  if (value){
    acc.push(value)
  }
  return acc
}, [])
console.log(result)

//reverse, change the order of the list, the first element will be the last and the last'll be the first
console.log('reverse');
let changedList = list.reverse()
console.log(changedList);

// shift, remove the first element of the list, and can be saved in a variable
console.log('shift')
const firstElement = list.shift()
console.log(firstElement);
console.log(list);

// sort, order a list
console.log('sort')
list.sort()
data.sort()
numbers.sort()
console.log(list);
console.log(data);
console.log(numbers);
numbers.sort(function(a, b) {
  return a-b
})
console.log(numbers);
numbers.sort(function(a, b) {
  return b-a
})
numbers.sort((a, b) => {a-b})
console.log(numbers);

//unshift, add one or more elements at the beginning of a list
console.log('unshift')
list.unshift('France')
console.log(list);

const stranger = {
  0: "Hola",
  1: "Hello",
  length: 2
}

Array.prototype.pop.call(stranger)
console.log(stranger);
