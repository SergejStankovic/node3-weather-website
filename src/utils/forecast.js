const request = require('request')
const os = require('os')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e286d94df2e1afb4872a48512683751&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + 
                ". It is currently " + response.body.current.temperature + " °C out. Feelslike: " 
                + response.body.current.feelslike + " °C. UV Index: " + response.body.current.uv_index)
        }
    })
}

module.exports = forecast