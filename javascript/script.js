window.onload = function () {
  var name = prompt("What's your name?", "[NAME]");
  if (name !== null) {
    var statement = "Welcome to Week 6, ".concat(name);
    var consoleName = "Name: ".concat(name);
    document.getElementById("statement").innerHTML = statement;
    console.log(consoleName) ;
  }
}

function getUserColor() {
  var color = prompt("What's your Favorite Color?", "[COLOR]");
  if (name !== null) {
    var statement = "Your Favorite Color is: ".concat(color);
    var consoleColor = "Color: ".concat(color);
    document.getElementById("statement").innerHTML = statement;
    console.log(consoleColor) ;
  }
}

function getUserPet() {
  var pet = prompt("What's your Favorite Pet's Name?", "[PET NAME]");
  if (pet !== null) {
    var statement = "Your Favorite Pet's Name is: ".concat(pet);
    var consolePet = "Pet: ".concat(pet);
    document.getElementById("statement").innerHTML = statement;
    console.log(consolePet) ;
  }
}

//function getUserColor() {
//  var color = prompt("WHAT'S YOUR FAVORITE COLOR?", "[COLOR]");
//  if (color != null) ; {
//    var colorStatement = name.concat(", what's your favorite color?");
//    var consoleVarcolor = "Name: ";
//    var consoleName = consoleVarName.concat(name);
//    document.getElementById("statement").innerHTML = colorStatement;
//    console.log(consoleName) ;
//    console.log(color) ;
//    document.getElementById("color").innerHTML = colorStatement;
//  }
//}
//
//function getUserAge() {
//  var age = prompt("HOW OLD ARE YOU?", "[AGE]");
//  if (age != null) ; {
//    console.log(age) ;
//    document.getElementById("color").innerHTML = age;
//  }
//}

//window.onload = function () {
//  var color = prompt("What is your favorite color?", "[COLOR]");
//  if (color !== null) {
//    console.log(color) ;
//    document.getElementById("color").innerHTML = color;
//  }
//}
//
//function getUserInput() {
//  var name = prompt("What is your Name?", "[NAME]");
//  if (name != null) ; {
//    console.log(name) ;
//    document.getElementById("name").innerHTML = name;
//  }
//}