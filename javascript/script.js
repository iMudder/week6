window.onload = function () {
  var name = prompt("What's your name?", "[NAME]");
  if (name !== null) {
    var statement = name.concat(", welcome to Week 6!");
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

function getUserAge() {
  var age = prompt("How old are you?", "[AGE]");
  if (age !== null) {
    var statement = "Your age is: ".concat(age);
    var consoleAge = "Age: ".concat(age);
    document.getElementById("statement").innerHTML = statement;
    console.log(consoleAge) ;
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