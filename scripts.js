function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit');
    const inputDisplay = document.getElementById('input-display');
    const outputDisplay = document.getElementById('output-display');

    if (!tempInput || !unit) {
        outputDisplay.textContent = 'Please enter a temperature and select a unit.';
        inputDisplay.textContent = '-';
        return;
    }

    const temperature = parseFloat(tempInput);
    const selectedUnit = unit.value;

    let convertedTemp;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temperature * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5/9;
        resultUnit = 'Celsius';
    }

    inputDisplay.textContent = `${temperature} ${selectedUnit.charAt(0).toUpperCase() + selectedUnit.slice(1)}`;
    outputDisplay.textContent = `${convertedTemp.toFixed(2)} ${resultUnit}`;
}
