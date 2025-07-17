const convertButton = document.getElementById("convert");
const tempeture = document.getElementById("tempeture");
const fromUnit = document.getElementById("from_unit");
const toUnit = document.getElementById("to_unit");
const output = document.getElementById("output");

// Function to check if button should be enabled
function checkButtonState() {
  if(tempeture.value.trim() !== '' && fromUnit.value !== 'select' && toUnit.value !== 'select') {
    convertButton.disabled = false;
  } else {
    convertButton.disabled = true;
  }
}

// Add event listeners to check button state when values change
tempeture.addEventListener('input', checkButtonState);
fromUnit.addEventListener('change', checkButtonState);
toUnit.addEventListener('change', checkButtonState);

// Initial check
checkButtonState();

convertButton.addEventListener("click", function () {
  const tempetureValue = tempeture.value;
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;

  switch (fromUnitValue) {
    case "celsius":
      if (toUnitValue === "fahrenheit") {
        const fahrenheit = (tempetureValue * 9) / 5 + 32;
        output.innerHTML = `${tempetureValue} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
      } else if (toUnitValue === "kelvin") {
        const kelvin = tempetureValue + 273.15;
        output.innerHTML = `${tempetureValue} Celsius is ${kelvin.toFixed(2)} Kelvin`;
      } else if (toUnitValue === "celsius") {
        const celsius = tempetureValue;
        output.innerHTML = `${tempetureValue} Celsius is ${celsius.toFixed(2)} Celsius`;
      }
      break;
    case "fahrenheit":
      if (toUnitValue === "celsius") {
        const celsius = ((tempetureValue - 32) * 5) / 9;
        output.innerHTML = `${tempetureValue} Fahrenheit is ${celsius.toFixed(2)} Celsius`;
      } else if (toUnitValue === "kelvin") {
        const kelvin = ((tempetureValue - 32) * 5) / 9 + 273.15;
        output.innerHTML = `${tempetureValue} Fahrenheit is ${kelvin.toFixed(2)} Kelvin`;
      }
      break;
    case "kelvin":
      if (toUnitValue === "celsius") {
        const celsius = tempetureValue - 273.15;
        output.innerHTML = `${tempetureValue} Kelvin is ${celsius.toFixed(2)} Celsius`;
      } else if (toUnitValue === "fahrenheit") {
        const fahrenheit = ((tempetureValue - 273.15) * 9) / 5 + 32;
        output.innerHTML = `${tempetureValue} Kelvin is ${fahrenheit.toFixed(2)} Fahrenheit`;
      }
      break;
    default:
      output.innerHTML = "Please select valid units";
      break;
  }
});
