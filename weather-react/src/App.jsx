import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchInputValueResult, setsearchInputValueResult] = useState([])

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/group?id=360630,281184,2643743,5128581,1850144,292223,524901,2988507,3128760,3173435,108410,703448&units;=metric&appid=a4e4d08661e5b76c91ea758ed6166ceb`)
    .then(res => res.json())
    .then(body => setData(body.list))
  }, [])

  useEffect(() => {
    const result = data.filter(city => city.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    setsearchInputValueResult(result)
  }, [searchInputValue, data])

  return (
    <>
    <form className="form-inline my-2">
      <input className="form-control w-50 m-auto my-5" type="search" id='search' placeholder="Search" aria-label="Search"
      onChange={(e) => setSearchInputValue(e.target.value)}/>
    </form>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Information</h1>
    {
      data.length > 0 &&
      searchInputValueResult.map((city) => (
          <div key={city.id} className="p-4 border rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{city.name}</h2>
            <p>Temperature: {(city.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: {city.weather[0].description}</p>
            <p>Humidity: {city.main.humidity}%</p>
            <p>Wind Speed: {city.wind.speed} m/s</p>
          </div>
      ))
    }
    </div>
    </>
  )
}
export default App