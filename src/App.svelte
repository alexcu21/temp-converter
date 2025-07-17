<script>
  let temperature = '';
  let fromUnit = 'select';
  let toUnit = 'select';
  let output = '';

  $: isButtonDisabled = String(temperature).trim() === '' || 
                       fromUnit === 'select' || 
                       toUnit === 'select';

  function handleConvert() {
    const temperatureValue = parseFloat(temperature);
    
    if (isNaN(temperatureValue)) {
      output = 'Please enter a valid temperature';
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

    output = result;
  }
</script>

<main class="App">
  <div class="container">
    <h1>Temperature Converter</h1>
    <p>Enter the temperature and select units and submit</p>
    <div class="input-container">
      <input
        type="number"
        bind:value={temperature}
        placeholder="Temperature"
        class="temperature-input"
      />
      <select
        bind:value={fromUnit}
        class="unit-select"
      >
        <option value="select">From Unit</option>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <select
        bind:value={toUnit}
        class="unit-select"
      >
        <option value="select">To Unit</option>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <button
        on:click={handleConvert}
        disabled={isButtonDisabled}
        class="convert-button"
      >
        Convert
      </button>
    </div>
    {#if output}
      <p class="output">{output}</p>
    {/if}
  </div>
</main>

<style>
  .App {
    text-align: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .container {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    width: 100%;
  }

  h1 {
    color: #333;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    color: #666;
    margin-bottom: 30px;
    font-size: 1.1rem;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-bottom: 30px;
  }

  .temperature-input,
  .unit-select {
    padding: 15px;
    border: 2px solid #e1e5e9;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8f9fa;
  }

  .temperature-input:focus,
  .unit-select:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .convert-button {
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .convert-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .convert-button:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .output {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive design */
  @media (max-width: 600px) {
    .container {
      padding: 30px 20px;
      margin: 10px;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .input-container {
      gap: 12px;
      flex-direction: column;
    }
    
    .temperature-input,
    .unit-select,
    .convert-button {
      padding: 12px;
      font-size: 1rem;
    }
  }
</style> 