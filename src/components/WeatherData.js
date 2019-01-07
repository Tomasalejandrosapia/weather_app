import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (

    <div>
    <WeatherTemperature></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={"10 M/S"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;