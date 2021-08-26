const inputDisplaySelector = document.querySelector('.input-display .input');
let userInput = [];
let userInputInteger;
let afterDecimal = [];

// and display it in the display operation input
// TODO add dots for decimal inputs
document.addEventListener('keydown', (e) => {
  inputKey(e);
  console.log('afterDecimal', afterDecimal);
  console.log('userInput', userInput);
  console.log('userInputInteger', userInputInteger);
});

function inputKey(e) {
  if (afterDecimal.length === 0) {
    isFinite(e.key) ? (userInput += e.key) : null;
  }

  // this part allows user to enter a number and delete a number.
  // If the length will be equal to zero then the display value will be zero as well.
  // TODO try converting this to a ternary operation if possible
  // ISSUE if space and alt key is pressed the calculator wont work anymore
  if (e.key === 'Backspace') {
    if (afterDecimal.includes('.')) {
      afterDecimal = afterDecimal.slice(0, -1);
      console.log(afterDecimal);
    } else {
      userInput = userInput.slice(0, -1);
      userInputInteger = parseFloat(userInput);
      userInputInteger = userInputInteger.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    inputDisplaySelector.setAttribute('value', userInputInteger + afterDecimal);
    if (userInput.length === 0) {
      inputDisplaySelector.setAttribute('value', 0);
    }
  } else if (e.key === '.') {
    // !afterDecimal.includes('.') ? (afterDecimal += e.key) : null;
    if (!afterDecimal.includes('.')) {
      afterDecimal += e.key;
      inputDisplaySelector.setAttribute(
        'value',
        userInputInteger + afterDecimal
      );
    }
  } else {
    if (userInput.length === 0) {
      inputDisplaySelector.setAttribute('value', 0);
    } else {
      userInputInteger = parseFloat(userInput);
      userInputInteger = userInputInteger.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
      if (afterDecimal.includes('.')) {
        isFinite(e.key) ? (afterDecimal += e.key) : null;
        inputDisplaySelector.setAttribute(
          'value',
          userInputInteger + afterDecimal
        );
      } else {
        inputDisplaySelector.setAttribute(
          'value',
          userInputInteger + afterDecimal
        );
      }
    }
  }
}

document.querySelector('.copyright p').innerHTML =
  '&copy;' + new Date().getFullYear();
