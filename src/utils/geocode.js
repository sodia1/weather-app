const request = require('request');

const geocode = (address, callback) => {
    const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ2F1cmF2c29kaWEiLCJhIjoiY2s2dWN2bzk4MDZlbzNlbzM0cnBjdDZrdCJ9.w2lDB03v5HNI73hOBMHOjQ`
    
    
    request({ url : uri, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect Geo Service', undefined)
        }else if(response.body.features.length==0){
            callback('unable to find location', undefined);
        }else{
        callback(undefined, {
         lat : response.body.features[0].center[1],
        longt : response.body.features[0].center[0],
        location : response.body.features[0].place_name
        })
        }
    })
}
    
module.exports = geocode;