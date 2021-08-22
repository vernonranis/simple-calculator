const inputDisplaySelector = document.querySelector('.input-display .input');
let userInput = [];

// TODO place all userInput in an array after user pressed an operator
// and display it in the display operation input
// TODO add commas every hundreds increment
document.addEventListener('keydown', (e) => {
  inputKey(e);
});

function inputKey(e) {
  // ISSUE when pressing the F-keys or delete if the value is zero. The value gets deleted
  // if (inputDisplaySelector.value === 0) {
  // }
  // while (zeroIssue < 13) {
  //   zeroIssue++;
  //   if (e.key === 'F' + zeroIssue) {
  //     console.log('F' + zeroIssue, 'it works');
  //     inputDisplaySelector.setAttribute('value', 0);
  //     null;
  //     e.key === 'Delete' && (inputDisplaySelector.value = 0);
  //     break;
  //   } else {
  //     null;
  //   }
  // }

  isFinite(e.key) ? (userInput += e.key) : null;

  // this part allows user to enter a number and delete a number.
  // If the length will be equal to zero then the display value will be zero as well.
  // TODO try converting this to a ternary operation if possible
  if (e.key === 'Backspace') {
    userInput = userInput.slice(0, -1);
    inputDisplaySelector.setAttribute('value', userInput);
    if (userInput.length === 0) {
      inputDisplaySelector.setAttribute('value', 0);
      console.log('cero');
    }
  } else {
    inputDisplaySelector.setAttribute('value', userInput);
  }
}

document.querySelector('.copyright p').innerHTML =
  '&copy;' + new Date().getFullYear();
