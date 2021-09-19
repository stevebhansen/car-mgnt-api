const request = require('request');
const { paginate } = require('../utils/paginate');
const { getByMakeId } = require('../services/vehicleModel.service');

const getModelByIdTerm = (term, makeId, page=1, limit=10, callback) => {
    getByMakeId(makeId, res => {
        if (term) {
            filteredResults = res.Results.filter(result => { 
                return result.Model_Name.toUpperCase().includes(term.toUpperCase())
            });
        } else {
            filteredResults = res.Results
        }
        result = paginate({results: filteredResults ? filteredResults : []}, limit, page);
        callback(result);
    })
};

module.exports = { getModelByIdTerm }