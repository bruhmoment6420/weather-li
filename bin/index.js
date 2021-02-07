#!/usr/bin/env node

const fetch = require('node-fetch');
const prompts = require('prompts');
const figlet = require('figlet');

const log = console.log;

const api = {

    key: '31d1dda7f3c7d365a188b9408bf2b8e2',
    base: "https://api.openweathermap.org/data/2.5/"

};

figlet('WeatherLI', function(err, data) {

    if (err) {
        log('Sorry Something Went Wrong');
        console.dir(err);
        return;
    }

    log(data);

});

function promptEngine() {

    (async () => {

        const response = await prompts({

            type: 'text',
            name: 'location',
            message: 'Enter City or Country'

        });

        function outputThrower(location) {

            let weatherRecieved = weatherEngine(location);
            return weatherRecieved;

        };

        outputThrower(response.location);

    })();

};

setTimeout(promptEngine, 1000);

function weatherEngine(location) {

    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(weather => {

            log('');
            log(`🗺 Country: ${weather.sys.country}`);
            log(`🧭 Location: ${weather.name}`);
            log(`💨 Wind Speed: ${weather.wind.speed} m/s`);
            log(`🚩 Wind Direction: ${weather.wind.deg} degrees`);
            log(`🌡 Current Temparature: ${weather.main.temp}°c`);
            log(`⬆ Max Temparature: ${weather.main.temp_max}°c`);
            log(`⬇ Lowest Temparature: ${weather.main.temp_min}°c`);
            log(`🌄 Feels Like: ${weather.main.feels_like}°c`);
            log(`💧 Humidity: ${weather.main.humidity} %`);
            log(`☀ Condition: ${weather.weather[0].main}`);
            log('');
        
        })
        .catch(error => log(error));

};