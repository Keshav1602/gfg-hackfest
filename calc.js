document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carbon-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const miles = parseFloat(document.getElementById('miles').value);
        const energy = parseFloat(document.getElementById('energy').value);
        const efficiency=parseFloat(document.getElementById('efficiency').value);

        if (isNaN(miles)||isNaN(energy)||isNaN(efficiency)) {
            resultDiv.innerHTML = '<p class="text-red-500">Please enter valid numbers.</p>';
            return;
        }

        // Constants
        const CO2_per_KWH=0.5;
        const CO2_PER_GALLON = 8.89; // lbs CO2 per gallon of gasoline

        // Calculation

        const totalCO2 =(miles*(1/efficiency)*CO2_PER_GALLON)+(CO2_per_KWH*energy);
        const resultText = `Your estimated CO2 emissions are ${totalCO2.toFixed(2)} lbs.`;

        resultDiv.innerHTML = `<p class="text-green-600">${resultText}</p>`;
    });
});
