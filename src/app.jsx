import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard"

export function App() {
  const [weatherDetails, SetweatherDetails] = useState(null)

  return (
    <>
    <Header/>
    <Search/>
   {weatherDetails &&  <WeatherCard/>}
    <Footer/>
    </>
  )
}
