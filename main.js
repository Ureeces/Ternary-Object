//1.
const people = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];

// Create a function 'greeting' that maps through the array.
const greeting = function(arr) {
  return arr.reduce((greetings, person) => {
    // Use a ternary.
    const hasNoName = person.name === "" ? true : false;
    
    // If there is a name it should say 'Hello <name>' otherwise it should say,
    // 'Hello Stranger'.
    if(hasNoName) {
      console.log("Hello Stranger");
    }

    else {
      console.log(`Hello ${person.name}`);
    }

  }, [])
}

greeting(people);


//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'
const canYouDrive = function(person) {
  const driveStatus = 
  person.age > 15 ? `yes they can drive`
  : person.age === 15 ? `can drive with parent`
  : `cannot drive`;

  return console.log(driveStatus);
}

let person1 = {age: 14};
let person2 = {age: 15};
let person3 = {age: 16};

canYouDrive(person1);
canYouDrive(person2);
canYouDrive(person3);




//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are left. so...if allowableSpeed is set to a number in that range your default output should be `<speed> is a decent speed`
// ---




//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ]
  let arr1 = []
  let arr2 = []
  let arr3 = []
  
  
  
  
  
// Object Methods:
// 5. Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};
