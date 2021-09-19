const { paginate } = require('../utils/paginate');
const { getAll } = require('../services/vehicleMake.service');

const getMakesByTerm = (term='', page=1, limit=10, callback) => {
    getAll(res => {
        filteredResults = res.Results.filter(result => { 
            return result.Make_Name.includes(term.toUpperCase())
        })
        result = paginate({results: filteredResults ? filteredResults : []}, limit, page)
        callback(result)
    });
};



module.exports = { getMakesByTerm }