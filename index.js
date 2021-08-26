const inputDisplaySelector = document.querySelector('.input-display .input');
let userInput = [];
let userInputInteger;
let afterDecimal = [];
let firstInput;

// and display it in the display operation input
document.addEventListener('keydown', (e) => {
  inputKey(e);
  enterFunc(e);
});

function inputKey(e) {
  if (afterDecimal.length === 0) {
    isFinite(e.key) ? (userInput += e.key) : null;
  }

  // this part allows user to enter a number and delete a number.
  // If the length will be equal to zero then the display value will be zero as well.
  // TODO try converting this to a ternary operation if possible
  // ISSUE if space and alt key is pressed the calculator wont work anymore
  // ISSUE if userInput starts with 0. will error out
  if (e.key === 'Backspace') {
    if (afterDecimal.includes('.')) {
      afterDecimal = afterDecimal.slice(0, -1);
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
    if (userInput.length === 0) {
      userInput = '0';
    }
    if (!afterDecimal.includes('.')) {
      afterDecimal += e.key;
      userInputInteger = userInput;
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

function enterFunc(e) {
  if (e.key === 'Enter') {
    firstInput = userInput + afterDecimal;
    firstInput = parseFloat(firstInput);
    console.log(typeof firstInput, firstInput);
  }
}

document.querySelector('.copyright p').innerHTML =
  '&copy;' + new Date().getFullYear();
