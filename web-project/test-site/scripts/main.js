

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpeg"){
    myImage.setAttribute("src", "images/firefox2.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.jpeg");
  }
};







/**const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("img").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});





/** Variable
 * You declare a variable with the "let" key word eg let myVariable;
 * javascript is case sensitive 
 * string (requires quote): let myVariable = "Bob"; 
 * Number (does not require quote):let myVariable = 10;
 * boolean(true or false): let myVariable = true;
 * Array(store multiple value in single reference):let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.

Operators
Mathematics symbols
+: Add
-,*,/: minus, multiply, divide
=: used to assign a value to a variable
strict equality===: tests if two value are equal and are of the same data type and return boolean result
!: Not (the basic expression is true bu the comparison returns false cos it is negated)
!==: Not equals 


Conditional statetement
It is to test if an expression returns true or not
If...else
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
if() uses the strict equality to compare variables, if the comparison is true 
the first block of code runs, if not the "else" statement runs instead

Function
a way to package functionality you plan to reuse, to prevent rewriting 
functions have parenthenses and the parentheses take arguments, they are 
separated by comas if multiple

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
The return statement tells the browser to return the result variable out of the function (scoping)
this is so because variables defined in a function are only made available inside that function

anonymous funtion: it has no name

Event
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

document.querySelector() methos returns the first element within the document 
that matches the specified selector or groups of selector, if no
selector are found it returns null
 */


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setUserName() {
  const myName = prompt("Please enter your Name.");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
  myHeading.textContent = `Moxilla is cool, ${myName}`;
  }
  
}

// This line of code is the initialization code, it structures
//  the app when it first load
if (!localStorage.getItem("name")) {
  setUserName();
  // the if ... else statement makes sure the user enters
  // the needed propmt before moving on 
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Moxilla is cool ${storedName}`;
}



/** prompt() displays a log box and 
 * ask user to enter data and saves it in a variable when
 *  user clicks ok. It is similar to alert only that alert
 * just gives a notification while propmt has an input field
 * where you can enter data*/

myButton.onclick = () => {
  setUserName();
}



