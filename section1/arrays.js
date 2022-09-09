//  arrays contain semilar data types arrys are dynamic array support indexing and slicing .

const  nums = [ 4,5, 'laraib'];
console.log(nums);

fruits = [ 'apple' , ' mango ' , 'grapes' , 'banana', 'orange'];
console.log(fruits);

// indexing
console.log(fruits);
//  slicing til
console.log(fruits.slice(1,4));

// pushing element into ARRAY at the end
fruits.push('cherry');
console.log(fruits);
//  removing 
fruits.pop();
console.log(fruits);

// splice(starting index, how much index) remove 2 or more element from array
// fruits.splice(1,4);
// console.log(fruits);

fruits.splice(2,1);
console.log(fruits);

fruits.push('grapes');
console.log(fruits);


const numbers= [ 2,3,4,5,6,7,];

// unshift for adding a elemenet at the starting of the array and shift for removing the same 

// console.log(fruits.unshift('pineapple'));

console.log(fruits.unshift( 'pineapple'));
console.log(fruits);

fruits.shift();
console.log(fruits);









