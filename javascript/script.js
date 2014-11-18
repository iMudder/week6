window.onload = function () {
  var name = prompt("WHAT'S YOUR NAME?", "[NAME]");
  if (name !== null) {
    console.log(name) ;
    document.getElementById("name").innerHTML = name;
  }
}

function getUserInput() {
  var color = prompt("WHAT'S YOUR FAVORITE COLOR?", "[COLOR]");
  if (color != null) ; {
    console.log(color) ;
    document.getElementById("color").innerHTML = color;
  }
}

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