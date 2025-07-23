import React from 'react'

const WeatherCard = ({weatherDetails}) => {
   //  console.log(weatherDetails);
  return (
    <div className="weather-section">
        <div className="weather-card">
            <div className="weather-temp-c">
                {weatherDetails.current.temp_c}
            </div>
        </div>
    </div>
  )
}

export default WeatherCard