import { useState } from "react";
import { Container } from './weatherForm.style'

export default function WeatherForm({onChangeCity}) {

    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value

        if (value !== "") {
            setCity(value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
    }

    return (
        <Container
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search City..."
                onChange={onChange}
                name="city"
            />
        </Container>
    )
}