const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=07e120a909b24e61bf4bd2bd00f0bd2b&query=45,-75&units=f'

http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {

    })

    respponse.on('end', () => {

    })

})