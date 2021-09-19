const request = require('request');

const getByMakeId = (makeId, callback) => {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`
    request.get(url, (err, res) => {
        if(res.body.message == 'The request is invalid.') {
            callback(res.body.message)
        }
        callback(JSON.parse(res.body));
    });
}

module.exports = {
    getByMakeId
}