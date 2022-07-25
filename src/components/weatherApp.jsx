import { useState, useEffect } from 'react'
import WeatherDetails from './weatherDetails'
import WeatherForm from './weatherForm'
import Loading from './loading'
import { Title, Container, Weather, MainContainer } from './weatherApp.style'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    
    async function loadInfo(city = 'Kyoto') {
        try {
            const req = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=4&aqi=no&alerts=no`)
            const json = await req.json()
            setWeather(json)
        } catch (error) {
            console.log('catched')
            console.error(error)
        }
    }
    
    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
        console.log({weather})
    }

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        console.log(weather)
        document.title = `Weather | ${weather?.location.name ?? ""}`
      })

    return (
        <MainContainer>
            <div><Title>My Weather App</Title></div>
            <Container>
                <WeatherForm onChangeCity={handleChangeCity} />
            </Container>
            <Weather>
                { weather ? <WeatherDetails weather={weather} /> : <Loading />}
            </Weather>
        </MainContainer>
    )
}