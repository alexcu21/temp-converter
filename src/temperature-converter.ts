type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin' | 'select'

interface ConversionResult {
  value: number
  unit: string
  message: string
  isError: boolean
}

export class TemperatureConverter {
  private convertButton: HTMLButtonElement
  private temperatureInput: HTMLInputElement
  private fromUnitSelect: HTMLSelectElement
  private toUnitSelect: HTMLSelectElement
  private outputElement: HTMLParagraphElement

  constructor() {
    this.convertButton = document.getElementById('convert') as HTMLButtonElement
    this.temperatureInput = document.getElementById('temperature') as HTMLInputElement
    this.fromUnitSelect = document.getElementById('fromUnit') as HTMLSelectElement
    this.toUnitSelect = document.getElementById('toUnit') as HTMLSelectElement
    this.outputElement = document.getElementById('output') as HTMLParagraphElement

    this.initializeEventListeners()
    this.checkButtonState()
  }

  private initializeEventListeners(): void {
    this.temperatureInput.addEventListener('input', () => this.checkButtonState())
    this.fromUnitSelect.addEventListener('change', () => this.checkButtonState())
    this.toUnitSelect.addEventListener('change', () => this.checkButtonState())
    this.convertButton.addEventListener('click', () => this.handleConvert())
  }

  private checkButtonState(): void {
    const hasTemperature = this.temperatureInput.value.trim() !== ''
    const hasFromUnit = this.fromUnitSelect.value !== 'select'
    const hasToUnit = this.toUnitSelect.value !== 'select'

    this.convertButton.disabled = !(hasTemperature && hasFromUnit && hasToUnit)
  }

  private handleConvert(): void {
    const temperatureValue = parseFloat(this.temperatureInput.value)
    
    if (isNaN(temperatureValue)) {
      this.showOutput('Please enter a valid temperature', true)
      return
    }

    const fromUnit = this.fromUnitSelect.value as TemperatureUnit
    const toUnit = this.toUnitSelect.value as TemperatureUnit

    const result = this.convertTemperature(temperatureValue, fromUnit, toUnit)
    this.showOutput(result.message, result.isError)
  }

  private showOutput(message: string, isError: boolean): void {
    this.outputElement.textContent = message
    this.outputElement.className = `output-message ${isError ? 'error' : 'success'} animate-fade-in-up`
  }

  private convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): ConversionResult {
    if (fromUnit === 'select' || toUnit === 'select') {
      return {
        value: 0,
        unit: '',
        message: 'Please select valid units',
        isError: true
      }
    }

    let convertedValue: number
    let unitName: string

    switch (fromUnit) {
      case 'celsius':
        if (toUnit === 'fahrenheit') {
          convertedValue = (value * 9) / 5 + 32
          unitName = 'Fahrenheit'
        } else if (toUnit === 'kelvin') {
          convertedValue = value + 273.15
          unitName = 'Kelvin'
        } else {
          convertedValue = value
          unitName = 'Celsius'
        }
        break

      case 'fahrenheit':
        if (toUnit === 'celsius') {
          convertedValue = ((value - 32) * 5) / 9
          unitName = 'Celsius'
        } else if (toUnit === 'kelvin') {
          convertedValue = ((value - 32) * 5) / 9 + 273.15
          unitName = 'Kelvin'
        } else {
          convertedValue = value
          unitName = 'Fahrenheit'
        }
        break

      case 'kelvin':
        if (toUnit === 'celsius') {
          convertedValue = value - 273.15
          unitName = 'Celsius'
        } else if (toUnit === 'fahrenheit') {
          convertedValue = ((value - 273.15) * 9) / 5 + 32
          unitName = 'Fahrenheit'
        } else {
          convertedValue = value
          unitName = 'Kelvin'
        }
        break

      default:
        return {
          value: 0,
          unit: '',
          message: 'Please select valid units',
          isError: true
        }
    }

    const fromUnitName = this.getUnitDisplayName(fromUnit)
    const message = `${value} ${fromUnitName} is ${convertedValue.toFixed(2)} ${unitName}`

    return {
      value: convertedValue,
      unit: unitName,
      message,
      isError: false
    }
  }

  private getUnitDisplayName(unit: TemperatureUnit): string {
    switch (unit) {
      case 'celsius':
        return 'Celsius'
      case 'fahrenheit':
        return 'Fahrenheit'
      case 'kelvin':
        return 'Kelvin'
      default:
        return ''
    }
  }
} 