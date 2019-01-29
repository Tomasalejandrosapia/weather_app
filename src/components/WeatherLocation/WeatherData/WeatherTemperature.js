import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';


import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WIDNY,
    FOG,
} from './../../../constants/weathers';


const icons = {
[SUN] : "day-sunny",
[FOG]: "day-fog",
[CLOUD]: "cloud",
[CLOUDY]: "cloudy",
[RAIN]: "rain",
[SNOW]: "snow",
[WIDNY]:"windy"

};

const getWeatherIcon = weatherstate  => {
    const icon = icons[weatherstate];

    if(icon)
    return  <WeatherIcons name={icon} size="2x"/> ;

    else 
        return  <WeatherIcons name={ "day-fog"} size="2x"/> ;



}

const WeatherTemperature = ({temperature, weatherstate}) => (
    <div> 
        {
            getWeatherIcon(weatherstate)
        }
        <span>{`${temperature} % ` }</span>
        </div>
);
   

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
};

export default WeatherTemperature;