import { MainContainer, Info, City, Country, Date, Row, Icon, Text, Condition, Current, Map, ForeCast, Next, Day, Box, Icons, Temp, More} from './weatherDetails.style'

export default function WeatherDetails({weather}) {
    return (
        <MainContainer>
            <Info>
                <City>{weather?.location.name}</City>
                <Country>{weather?.location.country}</Country>
                <Date>Date: {weather?.location.localtime} hs</Date>
                <Row>
                    <div>
                        <Icon
                            src={`http:${weather?.current.condition.icon}`}
                            alt={weather?.current.condition.text}
                        />
                        <Text>Humidity: {weather?.current.humidity}%</Text>
                    </div>
                    <div>
                        <Condition>{weather?.current.condition.text}</Condition>
                        <Current>{weather?.current.temp_c}°C</Current>
                        <Text>FeelsLike: {weather?.current.feelslike_c}°C</Text>
                    </div>
                </Row>
                <Map>
                    <iframe
                        src={`https://maps.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121886.07329373505!2d${weather?.location.lon}75!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1656889556743!5m2!1sen!2sar`}
                        width='100%'
                        height='200'
                        style={{border: 0}}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </Map>
            </Info>
            <ForeCast>
                <Next>Next two days</Next>
                <Day>Date: {weather?.forecast.forecastday[1].date}</Day>
                <Box>
                    <Icons>
                        <img
                            src={`http:${weather?.forecast.forecastday[1].day.condition.icon}`}
                            alt={weather?.forecast.forecastday[1].day.condition.text}
                            height='100px'
                        />
                    </Icons>
                    <div>
                        <Temp>Max: {weather?.forecast.forecastday[1].day.maxtemp_c}°C</Temp>
                        <Temp>Min: {weather?.forecast.forecastday[1].day.mintemp_c}°C</Temp>
                        <More>Probability of rain: {weather?.forecast.forecastday[1].day.daily_chance_of_rain}%</More>
                        <More>Moon Phase: {weather?.forecast.forecastday[1].astro.moon_phase}</More>
                    </div>
                </Box>

                <Day>Date: {weather?.forecast.forecastday[2].date}</Day>
                <Box>
                    <Icons>
                        <img
                            src={`http:${weather?.forecast.forecastday[2].day.condition.icon}`}
                            alt={weather?.forecast.forecastday[2].day.condition.text}
                            height="100px"
                        />
                    </Icons>
                    <div>
                        <Temp>Max: {weather?.forecast.forecastday[2].day.maxtemp_c}°C</Temp>
                        <Temp>Min: {weather?.forecast.forecastday[2].day.mintemy_c}°C</Temp>
                        <More>Probability: {weather?.forecast.forecastday[2].day.daily_chance_of_rain}%</More>
                        <More>Moon Phase: {weather?.forecast.forecastday[2].astro.moon_phase}</More>
                    </div>
                </Box>
            </ForeCast>
        </MainContainer>
    )
}