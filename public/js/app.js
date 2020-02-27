import { response } from "express"

console.log('Client side javascript file is loaded!')


fetch(``).then((response) => {
    response.json().then((data)=>{
        if(data.error) console.log('Error');
        else
        console.log(data.lcation+ " "+ data.forecast);
    })
})