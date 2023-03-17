//console.log('Help me Lord');


//1.Create an array called ages that contains the following values:
console.log("Question 1: ");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('Ages : ' + ages); //expected output: Ages: 3, 9, 23, 64, 2, 8, 28, 93


//1.a. Programmatically subtract the value of the first element in the array
// from the value of the last element in the array
console.log('Question 1a: ', ages.slice(-1) - ages [0]);//expected output: 90
// ages.slice(-1) is how to reference the last element in the array
 
// alternate answer to 1a. : console.log(ages[ages.length - 1] - ages[0]); 

// 1.b. Add a new age to ages array and repeat step 1.a. to ensure it is dynamic
// (works for arrays of different lengths)
ages.push(40);
console.log( 'Question 1b:' , ages.slice(-1) - ages[0]); //expected output: 37



// 1.c. Use a loop to iterate thru the array and
// calculate the average age.
// Use a loop (forLoop)
// loop should iterate thru ages array
let total = 0;
for(let i = 0; i < ages.length; i++){
  // how to find out specific ages
  //console.log("index " , i, "specific age: ", ages[i]);
  //need to add ages together:
  total += ages[i];
  //console.log("total: ", total);
}
// calculate avg age
// total/number of ages
let avg = total/ages.length;
console.log("Question 1c: ", avg);   //expected output: 30

//////////////////////////////////////////////

// 2. Create an array called names that contains the following values: "Sam", "Tommy","Tim","Sally", "Buck", "Bob".
console.log("Question 2: ")

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);


//2a. Use a loop to iterate thru the array and calculate the average
// letters per name.
console.log("Question 2a: ");

let totalA = 0;
for(let i = 0; i < names.length; i++){
  totalA += names[i].length;
 //console.log(totalA);
}
let avgLetters = totalA/ names.length;
console.log("The average number of letters in this array is :", avgLetters);   //  expected output:  3.8333


// 2b. Use a loop to iterate thru the array again and concatenate all the names together,
// seperated by spaces.
console.log("Question 2b: ");

for(i = 0; i < names.length; i++) {
  console.log(names[0], ",", names[1],",", names[2],",", names[3],",", names[4],",", names[5],);
}
// expected output: Sam, Tommy, Tim, Sally, Buck, Bob

/////////////////////////////////////////////////////////////////////////////////

console.log("Question 3: ");
// 3. How do you access the last element of any array?

let colors = ['green', 'blue', 'black', 'brown'];
console.log('Last element in the array:',colors[colors.length - 1]);   // expected output: brown

// alternate answer to 3:
// let lastItem = colors.slice(-1);
// console.log(lastItem);  

////////////////////////////////////////////////////////////////////////////////

console.log("Question 4: ");
// 4. How do you access the first element of any array?

console.log('First element in the array: ', colors[0]);   // expected output: green

//////////////////////////////////////////////////////////////////////////////////

console.log("Question 5: ");
// 5. Create a new array called nameLengths.
let namesLengths = [];
// Write a loop to iterate over the previously created names 
// array 

for(let i = 0; i < names.length; i++){
  //and add the length of each name to the // namesLengths array
 // console.log("Name: ",names[i], ":",names[i].length, "letters" );
namesLengths.push(names[i].length)
}
console.log('This array lists the length of each name in the names array: ', namesLengths);
// expected output: [3,5,3,5,4,3]

//names[i].length will print how many letters in each name (it prints the length of the element)

///////////////////////////////////////////////////////////////////////////////////

console.log("Question 6: ");
// 6. Write a loop to iterate over the nameLengths array and 
// calculate the sum of all the elements in the array.

total = 0;
for( let i = 0; i < namesLengths.length; i++){
      total += namesLengths[i]
}
  console.log(total);     //expected output: 23

//////////////////////////////////////////////////////////////////////////////////

console.log("Question 7:" );
// 7. Write a function that takes two parameters, 
// word and n, as arguments and returns the 
//word concatenated to itself n number of times
// (i.e. if I pass in 'Hello' and 3, I would expect 
// the function to return 'HelloHelloHello')
//let n = 3

newString = 0
function greet(word, n){
  for(i = 0; i < n; i++){
    newString += word
  }
  console.log(newString);
}

greet('Triplette', 3);   // expected output: TripletteTripletteTriplette

//////////////////////////////////////////////////////////////////////////////////

// 8. Write a function that takes two parameters,
// firstName and lastName, and returns a full name.
// The full name should be the first and last name 
// seperated by a space
console.log('Question 8: ');
function createFullName( firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}
createFullName('Jesus', 'Christ');   // expected output: Jesus Christ
createFullName('King', 'David');   // expected output: King David

///////////////////////////////////////////////////////////////////////////////

// 9. Write a function that takes an array of numbers 
// and returns true if the sum of all the numbers in the array
// is greater than 100

console.log("Question 9:");

let myNumbers = [25, 35, 45, 55];
total = 0;
function returnSum(){
  for(let i = 0; i < myNumbers.length; i++) {
    total += myNumbers[i];
          // console.log("Index:", i, "My Number:", myNumbers[i], "Running Total:", total)
  }   
    if( total > 100) {
    return true
  }              
    else{ return false}
}
console.log(returnSum());   //expected output: true

//////////////////////////////////////////////////////////////////////////////

console.log("Question 10:");
// 10. Write a function that takes an array of numbers and 
// returns the average of all the elements in the array.
    
let numberArray1 =[5, 10, 15, 20, 25];
let sum = 0
function avgElements( ) {
  for(let i =0; i < numberArray1.length; i++) {
    sum += numberArray1 [i];
  }
  return sum
}
console.log("The average of the array is: ", avgElements() / numberArray1.length);
//  expected output: The average of the array is:  15

/////////////////////////////////////////////////////////////////////////////////

// 11. Write a function that takes two arrays of numbers and
// returns true if the average of the elements in the first 
// array is greater than the average of the elements in the
// second array.

console.log("Question 11:");

let arrayNum1 = [2, 4, 6, 8, 10, 12];
let arrayNum2 = [ 1, 3, 5, 7, 9, 11];

totalA = 0;
totalB = 0;

function compareArrays() {
  for(let i = 0; i <arrayNum1.length; i++) {
    totalA += arrayNum1[i];
  }
  for(let i = 0; i <arrayNum2.length; i++) {
    totalB += arrayNum2[i];
}
console.log("The average of the first array: " + totalA / arrayNum1.length);
console.log("The average of the second array: " + totalB / arrayNum2.length);
if ( totalA / arrayNum1.length > totalB / arrayNum2.length){
  return true
}
  else {
    return false
  }
}
console.log( "True or False. The average of the first array is greater than the second array:  ", compareArrays());

//expected output:
//The average of the first array: 7
//The average of the second array: 6
// True or False. The average of the first array is greater than the second array:   true

////////////////////////////////////////////////////////////////////////////////////

console.log("Question 12:");
// 12. Write a function called willBuyDrink that takes a boolean
// isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket){
  if(isHotOutside = true && moneyInPocket > 10.5) {
    console.log(willBuyDrink());
  }
  return true
}

willBuyDrink(true, 11); //expected output: true
willBuyDrink(true, 1);  //expected output: no output
willBuyDrink(true, 115);//expected output: true

/////////////////////////////////////////////////////

// 13. Create a function of your own that solves a problem
console.log("Question 13:");

function calculateRatio(numPatients, numNurses) {
  if(numPatients > 40 || numNurses < 4) {
    console.log("We need help!!! There's only " + numNurses + " nurses and there's " + numPatients +" patients!!!");
  }
  else {
    console.log( "Easy money today, baby!!!");
  }
  return true
}

calculateRatio(55, 3);   //expected output:  We need help!!! There's only 3 nurses and there's 55 patients!!!
calculateRatio(30, 4);    //expected output: "Easy money today, baby!!!"
