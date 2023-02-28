//console.log('Help me Lord');


//1.Create an array called ages that contains the following values:
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);  //expected output: 3, 9, 23, 64, 2, 8, 28, 93
 
// 1.a. Programmatically subtract the value of the first element in the array
// from the value of the last element in the array

// ages.slice(-1) is how to reference the last element in the array
console.log(ages.slice(-1) - ages[0]);  //expected output: 90

// 1.b. Add a new age to ages array and repeat step 1.a. to ensure it is dynamic
// (works for arrays of different lengths)

ages.push(40);
console.log(ages.slice(-1) - ages[0]); //expected output: 37

// 1.c. Use a loop to iterate thru the array and
// calculate the average age.

//for(let i = 0; i < ages; i++){
  //while(ages[i] !== undefined) {
    //count++;
    //total += grades[i];
   // let avgOfAges = ages.reduce(
      //(accumulator, currentValue) => accumulator + currentValue,
      //initialValue);
      //return avgOfAges;
    //}
    
    //console.log(avgOfAges / ages.length);
//}
//let avg = total / count;
//console.log(ages);
//let initialValue = 0;
//let avgOfAges = ages.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
  //initialValue);
  //console.log(avgOfAges / ages.length);
//}
//console.log(avgOfAges / ages.length);
//console.log(ages);

//////////////////////////////////////////////////////////////////////////////////////////////

// 2. Below, I created a names array and added elements to the array
//Then, I created a function that uses the map method 
// that prints (optional) the length of each element (numberOFLetters)
var names = ["Sam", "Tommy","Tim","Sally", "Buck", "Bob"];
console.log(names);
//let numberOfLetters = names.map(function( element) {
//    return element.length;
//});
//console.log(numberOfLetters);
//
// for( i = 0; names < i; i++);
//console.log(i);
/////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////

// 3. How do you access the last element of any array?

let colors = ['green', 'purple', 'blue',' black', 'brown'] ;
let lastItem = colors.slice(-1);
console.log(lastItem);  //expected output: brown

////////////////////////////////////////////////////

// 4. How do you access the first element of any array?

let firstItem = colors[0];
console.log(firstItem);  //expected output: green

////////////////////////////////////////////////////

// 5. Create a new array called nameLengths.
// Write a loop to iterate over the previously created names 
// array and add the length of each name to the 
// namesLengths array

let nameLengths = [names.forEach ];
names.forEach(element => console.log(element.length));
// expected output: 3, 5, 3. 5, 4, 3

// my answer was based on the forEach method example
// found on MDN website:
//const array1 = ['a', 'b', 'c'];
//array1.forEach(element => console.log(element));


/////////////////////////////////////////////////////

// 6. Write a loop to iterate over the nameLengths array and 
// calculate the sum of all the elements in the array.

for (let i = 0; i < nameLengths; i++);
let i = (nameLengths.forEach);
nameLengths.forEach(element => console.log(element.length));
  


/////////////////////////////////////////////////////

// 7. Write a function that takes two parameters, 
// word and n, as arguments and returns the 
//word concatenated to itself n number of times
// (i.e. if I pass in 'Hello' and 3, I would expect 
// the function to return 'HelloHelloHello')
let n = 3
function greet(word, n){
  return "Hello" 
}
console.log(greet()* n);
/////////////////////////////////////////////////////

// 8. Write a function that takes two parameters,
// firstName and lastName, and returns a full name.
// The full name should be the first and last name 
// seperated by a space

function createFullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}
createFullName('Jesus', 'Christ');  //expected output Jesus Christ
createFullName('King', 'David');   //expected output King David

////////////////////////////////////////////////////

// 9. Write a function that takes an array of numbers 
// and returns true if the sum of all the numbers in the array
// is greater than 100

let myNumbers = [25, 35, 45, 55, 65];

function returnSum(myNumbers) {
let returnSum = myNumbers
  if (returnSum > 100) {
 return true;
  }
 } 
  returnSum();
console.log(returnSum);






//function sumOfNumbers(myNumbers){
  //let myNumbers =
//}

/////////////////////////////////////////////////////

// 10. Write a function that takes an array of numbers and 
// returns the average of all the elements in the array.

//let avg = total / count;
//console.log(ages);
//let initialValue = 0;
//let avgOfAges = ages.reduce(
  //(accumulator, currentValue) => accumulator + currentValue,
  //initialValue);
  //console.log(avgOfAges / ages.length);
//}
//console.log(avgOfAges / ages.length);
//console.log(ages);
////////////////////////////////////////////////////////

// 11. Write a function that takes two arrays of numbers and
// returns true if the average of the elements in the first 
// array is greater than the average of the elements in the
// second array.

///////////////////////////////////////////////////////

// 12. Write a function called willBuyDrink that takes a boolean
// isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50

///////////////////////////////////////////////////////

// 13. Create a function of your own that solves a problem

