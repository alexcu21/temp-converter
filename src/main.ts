import './style.scss'
import { TemperatureConverter } from './temperature-converter.js'

// Initialize the temperature converter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TemperatureConverter()
}) 