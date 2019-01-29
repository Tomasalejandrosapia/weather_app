import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WIDNY,
    FOG
} from './../../../constants/weathers';

const WeatherData = () => (

    <div>
    <WeatherTemperature temperature={20} weatherstate={CLOUDY}></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={"10 M/S"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;