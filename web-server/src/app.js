const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // it is used to customize the directory where views live.
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jeongwon Park',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jeongwon Park'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Jeongwon Park',
        msg: 'This is the sample message in help page'
    })
})

app.get('/weather', (reg, res) => {
    res.send({
        weather: 'It is sunny',
        temperature: 75,
        location: 'Atlanta, Georgia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Help article not found',
        name: 'Jeongwon Park'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Page not found',
        name: 'Jeongwon Park'
    })
})


// start up the server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})



// class 

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Jeongwon',
//         age: 25
//     }, {
//         name: 'Sarah'
//     }])
// })

// app.get('/about', (reg, res) => {
//     res.send('<h1>About</h1>')
// })