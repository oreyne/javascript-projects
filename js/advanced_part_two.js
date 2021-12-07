let list = ['China','Indonesia','Germany', ,'Canada','Camerun','Laos']
let data = ['3','4','76','22','52','9']
let numbers = [3,4,76,22,52,9]
let test = [null, 1, 4, undefined, false, 0, 3,4,76,3,42, 2, 52, 9, 3, 4]//16

//concat, merge several list in one
console.log('concat');
const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = arr1.concat(arr2);
const arr4 = [[5], [6, 7]]
const arr5 = arr3.concat(arr4, arr1)

// every, return true or false, if all values inside the list meet the condition
console.log('every');
console.log(numbers.every(item => item > -1));
console.log(numbers.every(item => item > 4));

//find, return the first element that satisfies a condition
console.log('find');
console.log(test.find((item) => item > 33 ));
console.log(test.find((item, index) => item > 33 && index > 9 ));

//includes, return true or false, if a element exist in a list
console.log('includes');
console.log(test.includes(55));
console.log(test.includes(42));
console.log(test.includes(42, 12));

//indexOf, return first index of a element in a list
console.log('indexOf');
console.log(test.indexOf(4));
console.log(test.indexOf(4, 5));
console.log(test.indexOf(4, -1));

//lastIndexOf, find the last index of an element
console.log('lastIndexOf');
let lastFind = test.lastIndexOf(4)
console.log(lastFind)
lastFind = test.lastIndexOf(34)
console.log(lastFind)
lastFind = test.lastIndexOf(3, 11)
console.log(lastFind)

//map, apply the function to all elements in a list
console.log('map');
const l1 = numbers.map(item => item + 2)
console.log(l1);

//slice, extract elements from a list, from an index, to an index, not include the second index
console.log('slice');
const newList = test.slice(3, 5)
console.log(newList);
// dudas con respecto a los indices negativos
