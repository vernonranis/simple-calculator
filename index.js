const inputDisplaySelector = document.querySelector(".input-display .input");
let userInput = [];


// TODO place all userInput in an array after user pressed an operator
// and display it in the display operation input
// TODO add commas every hundreds increment
document.addEventListener("keydown", (e) => {
  inputFn(e);
});

function inputFn (e) {
  isFinite(e.key) ? userInput += e.key : null;
  console.log(userInput);
  inputDisplaySelector.setAttribute("value", userInput);
}


document.querySelector(".copyright p").innerHTML = '&copy;' + new Date().getFullYear();

