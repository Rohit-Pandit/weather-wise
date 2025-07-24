import cloud from '../assets/weather-cloudy.png';

const WeatherCard = ({weatherDetails}) => {
   
  return (
    <div className="weather-section">
        <div className="weather-card">
            <div className="weather-temp-c">
                {weatherDetails.current.temp_c}
            </div>
            <div className="weather-info">
              <span>
                {weatherDetails.current.humidity}
              </span>
              <span>
                {weatherDetails.current.cloud}
              </span>
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