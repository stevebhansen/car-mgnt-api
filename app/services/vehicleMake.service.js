const request = require('request');

const getAll = callback => {
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json'
    request.get(url, (err, res) => {
        if(err) {
            callback(err)
        } 
        callback(JSON.parse(res.body));
    });
}

module.exports = {
    getAll
}