fs = require('fs')
const { getAll } = require('../services/vehicleMake.service');

const createVehicleMakeData = () => {
    if(!fs.existsSync('vehicleMakeData.json')) {
        getAll(res => {
            fs.writeFile('vehicleMakeData.json', JSON.stringify({ results: res.Results }, null, 4), err => {
                if (err) return console.log(err)
            });
        });
    } 
}

module.exports = { createVehicleMakeData }