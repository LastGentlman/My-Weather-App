import { useState, useEffect } from 'react'
import WeatherDetails from './weatherDetails'
import WeatherForm from './weatherForm'
import Loading from './loading'
import { Title, Container, Weather, MainContainer } from './weatherApp.style'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    
    async function loadInfo(city = 'Kyoto') {
        try {
            setError(null)

            const apiUrl = import.meta.env.VITE_API_URL
            const apiKey = import.meta.env.VITE_API_KEY

            if (!apiUrl || !apiKey) {
                throw new Error('Faltan variables de entorno VITE_API_URL y/o VITE_API_KEY')
            }

            const url = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&days=4&aqi=no&alerts=no`
            const response = await fetch(url)

            if (!response.ok) {
                const bodyText = await response.text()
                throw new Error(`HTTP ${response.status} ${response.statusText}: ${bodyText.slice(0, 140)}`)
            }

            const bodyText = await response.text()
            let json
            try {
                json = JSON.parse(bodyText)
            } catch (e) {
                throw new Error(`Respuesta no JSON recibida: ${bodyText.slice(0, 140)}`)
            }

            if (json?.error?.message) {
                throw new Error(json.error.message)
            }

            if (!json?.location?.name) {
                throw new Error('Name not found')
            }

            console.log('success')
            setWeather(json)
        } catch (error) {
            console.error(error)
            setError(error.message ?? String(error))
        }
    }
    
    function handleChangeCity(city) {
        setWeather(null)
        setError(null)
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
                { error ? <div role="alert">{error}</div> : (weather ? <WeatherDetails weather={weather} /> : <Loading />) }
            </Weather>
        </MainContainer>
    )
}
