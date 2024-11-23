function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    if (value === '±') {
        document.getElementById('display').value = -parseFloat(document.getElementById('display').value);
    } else if (value === '%') {
        document.getElementById('display').value = parseFloat(document.getElementById('display').value) / 100;
    } else {
        document.getElementById('display').value += value;
    }
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}