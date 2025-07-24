import cloud from '../assets/weather-cloudy.png';
import './WeatherCard.css';
const WeatherCard = ({weatherDetails}) => {
   
  return (
    <div className="weather-section">
        <div className="weather-card">
            <div className="weather-temp-c">
                {weatherDetails.current.temp_c}&#176;C
            </div>
            <div className="weather-info">
              <span>Humidity: {weatherDetails.current.humidity}%</span>

              <span>Cloud: {weatherDetails.current.cloud}%</span>

            </div>
            <div className="weather-place">
                {weatherDetails.location.name},     
                {weatherDetails.location.region},
                {weatherDetails.location.country}         
            </div>
            <div className="weather-avatar">
              <img src={cloud} alt=" Cloud image not found" />
            </div>
        </div>
    </div>
  )
}

export default WeatherCard