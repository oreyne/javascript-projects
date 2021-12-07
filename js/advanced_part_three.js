let list = ['China','Indonesia','Germany', ,'Canada','Camerun','Laos']
let data = ['3','4','76','22','52','9']
let numbers = [3,4,76,22,52,9]
let numbersT = [3,4,76,22,52,9]
let test = [null, 1, 4, undefined, false, 0, 3,4,76,3,42, 2, 52, 9, 3, 4]//16

//copyWithIn, copy a part of a list, inside itself but keep its length
console.log('copyWithin');
console.log(numbers.copyWithin(3));
console.log(numbersT.copyWithin(3,1));
console.log(test.copyWithin(4, 6, 8));

//entries, create an iterator of the list
console.log('entries');
const iter = numbers.entries();
console.log(iter.next());
for (let e of iter) {
  console.log(e);
}

//filter, return an array of element, that pass a function
console.log('filter');
const result = list.filter(word => word.length > 6)
console.log(result);

//fill, fill an list with an elemento, from a position to another
console.log('fill');
console.log(test.fill(5, 10));
console.log(test.fill(6, 12, 14));

//findIndex, find index of first element that pass a function
console.log('findIndex');
console.log(numbers.findIndex(item => item > 33));//expected result: 2

// forEach, call a function for each element
console.log('forEach');
numbers.forEach(item => console.log(item + 1))

//from, create an array from a string, or another list
console.log('from');
console.log(Array.from('Hola mundo'));
console.log(Array.from([1,2,3], item => item + 2));

//splice, add elements and remove element at a position
console.log('splice');
let abc = [1,2,4,5,8]
abc.splice(2,0,3)//insert value 3
abc.splice(5,1,6,7)//remove a value(8), and insert 6,7
console.log(abc);

//toString, convert a list to String
console.log('toString');
console.log(abc.toString());

// valueOf,
console.log('valueOf');
