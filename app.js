/*const request = require('request');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

const address = process.argv[2];

if(!address){
    console.log('Please provide an address')
}
else{
    geocode('New York', (error, data) => {
    if(error){
    return console.log(error)
    }   
    forcast(data.lat, data.longt, (error, forcastdata)=> {
        if(error){
            return console.log(error);
        }
        console.log(data.location)
        console.log(forcastdata)
    })
})
}

*/

const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Weather Page</h1>')
})

app.get('/help', (req, res)=> {
    res.send([{
        name: 'Gaurav'
    },{
        name: 'Goku'
    }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(3000, ()=> {
    console.log('App Is Running')
})

