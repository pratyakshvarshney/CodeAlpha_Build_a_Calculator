function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1); 
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert('Invalid Expression');
    }
}

function squareRoot() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(currentValue);
}

function percent() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue / 100;
}
  