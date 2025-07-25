const calculatorContainer = document.getElementById('calculator_container');
const displayarea = document.getElementById('display_area');

calculatorContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    switch (e.target.textContent) {
      case 'C':
        clear();
        break;
      case 'DEL':
        deleteOnevalue();
        break;
      case '=':
        evaluate();
        break;
      default:
        addtodisplayarea(e.target.textContent);
    }
  }
});

function clear() {
  displayarea.textContent = "";
}

function deleteOnevalue() {
  displayarea.textContent = displayarea.textContent.slice(0, -1);
}

function evaluate() {
  try {
    displayarea.textContent = eval(displayarea.textContent);
  } catch {
    displayarea.textContent = "Error";
  }
}

function addtodisplayarea(value) {
  displayarea.textContent += value;
}
