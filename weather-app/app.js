const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=07e120a909b24e61bf4bd2bd00f0bd2b&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const current = response.body.current
//         console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`)
//     }
    
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGp3MDQ0IiwiYSI6ImNsMGE0MWE2ZjA5MGszZHJ0bDlydms0dmEifQ.m1OVKbIlHji5DGSvHGNlWw&limit=1'

request({url: geoURL, json: true}, (error, response) => {
    if (error) {
        console.log('error occured')
    } else if (response.body.featues.length == 0) {
        console.log('can not find the location')
    } else {
        const feature = response.body.features[0]
        const latitude = feature.center[1]
        const longitude = feature.center[0]
        console.log(`lat: ${latitude}, long: ${longitude}`)
    }
})