import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [fromUnit, setFromUnit] = useState('select');
  const [toUnit, setToUnit] = useState('select');
  const [output, setOutput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Check if button should be enabled
  useEffect(() => {
    const shouldEnable = temperature.trim() !== '' && fromUnit !== 'select' && toUnit !== 'select';
    setIsButtonDisabled(!shouldEnable);
  }, [temperature, fromUnit, toUnit]);

  const handleConvert = () => {
    const temperatureValue = parseFloat(temperature);
    
    if (isNaN(temperatureValue)) {
      setOutput('Please enter a valid temperature');
      return;
    }

    let result = '';

    switch (fromUnit) {
      case "celsius":
        if (toUnit === "fahrenheit") {
          const fahrenheit = (temperatureValue * 9) / 5 + 32;
          result = `${temperatureValue} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
        } else if (toUnit === "kelvin") {
          const kelvin = temperatureValue + 273.15;
          result = `${temperatureValue} Celsius is ${kelvin.toFixed(2)} Kelvin`;
        } else if (toUnit === "celsius") {
          result = `${temperatureValue} Celsius is ${temperatureValue.toFixed(2)} Celsius`;
        }
        break;
      case "fahrenheit":
        if (toUnit === "celsius") {
          const celsius = ((temperatureValue - 32) * 5) / 9;
          result = `${temperatureValue} Fahrenheit is ${celsius.toFixed(2)} Celsius`;
        } else if (toUnit === "kelvin") {
          const kelvin = ((temperatureValue - 32) * 5) / 9 + 273.15;
          result = `${temperatureValue} Fahrenheit is ${kelvin.toFixed(2)} Kelvin`;
        }
        break;
      case "kelvin":
        if (toUnit === "celsius") {
          const celsius = temperatureValue - 273.15;
          result = `${temperatureValue} Kelvin is ${celsius.toFixed(2)} Celsius`;
        } else if (toUnit === "fahrenheit") {
          const fahrenheit = ((temperatureValue - 273.15) * 9) / 5 + 32;
          result = `${temperatureValue} Kelvin is ${fahrenheit.toFixed(2)} Fahrenheit`;
        }
        break;
      default:
        result = "Please select valid units";
        break;
    }

    setOutput(result);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Temperature Converter</h1>
        <p>Enter the temperature and select units and submit</p>
        <div className="input-container">
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Temperature"
            className="temperature-input"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="unit-select"
          >
            <option value="select">From Unit</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="unit-select"
          >
            <option value="select">To Unit</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
          <button
            onClick={handleConvert}
            disabled={isButtonDisabled}
            className="convert-button"
          >
            Convert
          </button>
        </div>
        {output && <p className="output">{output}</p>}
      </div>
    </div>
  );
}

export default App; 