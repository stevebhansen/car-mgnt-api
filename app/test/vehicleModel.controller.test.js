const expect = require('chai').expect;
const { getModelByIdTerm } = require('../controllers/vehicleModel.controller');

describe('vehicleModel.controller: getModelByIdTerm', () => {
    it('shoud return results with X in Model_Name', (done) => {
        const term = 'X', makeId = 441, page = 1, limit = 10
        getModelByIdTerm( term, makeId, page, limit, res => {
            res.results.forEach(result => {
                expect(result).to.have.property('Make_ID')
                expect(result).to.have.property('Make_Name')
                expect(result).to.have.property('Model_ID')
                expect(result).to.have.property('Model_Name').that.contains(term)
            });
            done();
        });
    });
    it('shoud return all results for makeId (441)', (done) => {
        const term = undefined, makeId = 441, page = 1, limit = 10
        getModelByIdTerm( term, makeId, page, limit, res => {
            res.results.forEach(result => {
                expect(result).to.have.property('Make_ID')
                expect(result).to.have.property('Make_Name')
                expect(result).to.have.property('Model_ID')
                expect(result).to.have.property('Model_Name')
            });
            done();
        });
    });
});