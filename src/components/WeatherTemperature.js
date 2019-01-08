import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
sunny : "day-sunny",
fog: "day-fog",
cloud: "cloud",
cloudy: "cloudy",
rain: "rain",
snow: "snow",
windy:"windy"

}

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
   


export default WeatherTemperature;