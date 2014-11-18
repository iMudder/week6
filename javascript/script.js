window.onload = function () {
  var color = prompt("What is your favorite color?", "Albaster");
  if (color !== null) {
    console.log(color) ;
    document.getElementById("color").innerHTML = color;
  }
}

function getUserInput() {
  var name = prompt("What is your Name?", "Frank");
  if (name != null) ; {
    console.log(name) ;
    document.getElementById("name").innerHTML = name;
  }
}