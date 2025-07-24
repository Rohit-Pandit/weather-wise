import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard"
import  './app.css'

export function App() {
  const [weatherDetails, SetweatherDetails] = useState(null)
  return (
    <div className="app">      
      <div className="app-container">
        <Header/>
        <Search SetweatherDetails={SetweatherDetails}/>
        {weatherDetails &&  <WeatherCard weatherDetails={weatherDetails} />}
        <Footer/>
      </div>
    </div>
  )
}
