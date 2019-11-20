const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url ='https://api.darksky.net/forecast/63761be1bc6911481a6c1a9e08d0c341/' + longitude + ',' + latitude + '?units=si'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temp = body.currently.temperature
            const precip = body.currently.precipProbability
            val = body.daily.data[0].summary + ' It is currently '+ temp + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' degrees and with a low of ' + body.daily.data[0].temperatureLow + ' degrees. There is '+ precip + '% chance of rain'
            callback(undefined, val )
        }
    })
}

module.exports = forecast
