import { useState, useEffect } from 'react'
import WeatherDetails from './weatherDetails'
import WeatherForm from './weatherForm'
import Loading from './loading'
import { Title, Container, Weather, MainContainer } from './weatherApp.style'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    
    async function loadInfo(city = 'Kyoto') {
        try {
<<<<<<< HEAD
            const req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=4&aqi=no&alerts=no`)
=======
            const req = await fetch(`${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=4&aqi=no&alerts=no`)
>>>>>>> 6a152f3 (responsive design)
            const json = await req.json()
            json.location.name ? 
            console.log('success') : 
            alert('Name not found')
            setWeather(json)
        } catch (error) {
            console.log('catched')
            alert('Error: ' + error)
            console.error(error)
        }
    }
    
    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
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
