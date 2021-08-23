const inputDisplaySelector = document.querySelector('.input-display .input');
let userInput = [];
let userInputInteger;

// TODO place all userInput in an array after user pressed an operator
// and display it in the display operation input
// TODO add dots for decimal inputs
document.addEventListener('keydown', (e) => {
  console.log(e.key);
  inputKey(e);
});

function inputKey(e) {
  isFinite(e.key) ? (userInput += e.key) : null;

  // this part allows user to enter a number and delete a number.
  // If the length will be equal to zero then the display value will be zero as well.
  // TODO try converting this to a ternary operation if possible
  // ISSUE if space and alt key is pressed the calculator wont work anymore
  if (e.key === 'Backspace') {
    userInput = userInput.slice(0, -1);
    userInputInteger = parseFloat(userInput);
    userInputInteger = userInputInteger.toLocaleString('en', {
      maximumFractionDigits: 0,
    });
    inputDisplaySelector.setAttribute('value', userInputInteger);
    if (userInput.length === 0) {
      inputDisplaySelector.setAttribute('value', 0);
    }
  } else {
    if (userInput.length === 0) {
      inputDisplaySelector.setAttribute('value', 0);
    } else {
      userInputInteger = parseFloat(userInput);
      userInputInteger = userInputInteger.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
      inputDisplaySelector.setAttribute('value', userInputInteger);
    }
  }
}

document.querySelector('.copyright p').innerHTML =
  '&copy;' + new Date().getFullYear();
