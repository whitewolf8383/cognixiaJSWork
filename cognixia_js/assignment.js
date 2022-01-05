/***********************************************/
/* Name: Keith francis
/* Company: Cognixia JUMP
/***********************************************/

// Prints the count of the number NUMBER elements present in given Array
// Print the minimum value of the NUMBER elements present in the given Array
// Prints to the console a new Array with only the STRING values from the given parameter, sorted alphabetically

function testArray(array) {
  let numberCount = 0;
  let minimumValue =  Number.MAX_VALUE;
  let stringArray = [];

  // test array for type and assign values to variables
  for(let i = 0; i < array.length; i++){
    let type = typeof array[i];
    switch (type){
      case "number":
        numberCount++;
        if(array[i] < minimumValue){
          minimumValue = array[i];
        }
        break;
      case "string":
        stringArray.push(array[i]);
        break;
      default:
        console.log("Was neither a string or number.");
    }
  }
  // Console log information
  console.log(`\nThe number of 'NUMBER' elements within the array is ${numberCount}.`);
  console.log(`The minimum number found in the array was ${minimumValue}.`);
  console.log(stringArray.sort());
}


// Testing function
let arrayToTest = [10232, "string", 72, "anotherString", -657, 45, "testtest", "abc"];
testArray(arrayToTest);