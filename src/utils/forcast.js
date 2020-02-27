const request = require('request');

const forcast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/cac6a5b07a3b2844bff1407a1d3283c5/${encodeURIComponent(lat)},${encodeURIComponent(lon)}`;

    request({url: url, json: true}, (error, response)=> {
        if(error){
            callback('Unable to connect Forcast Service.', undefined)
        }else if(response.body.error){
            callback('Unable to fatch the data from service', undefined)
        }else{
            callback(undefined, `It is currently ${response.body.currently.temperature}  degrees out. 
            There is a ${response.body.currently.precipProbability} % chance of rain.` )
        }
    })
}

module.exports = forcast;