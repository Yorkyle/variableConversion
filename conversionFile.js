/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// AFTER CHANGES
let result = "5" - 2;
console.log("The result is: " + result); // This shows implicit conversion from number (2) to a string ("2")

let isValid = Boolean(null); // Since "False" is truthy, it will run the line; however by changing "False" to null, the Boolean becomes false until something fills the placeholder  
if (isValid) {
  console.log("This is valid!"); // BEFORE CHANGES, "This is valid" would display, but now it does not.
}

let age = "25";
let totalAge = Number(age) + 5; // This show expliict conversion from a string to number
console.log("Total Age: " + totalAge);
