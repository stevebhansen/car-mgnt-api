const expect = require('chai').expect;
const { getMakesByTerm } = require('../controllers/vehicleMake.controller');

describe('vehicle.controller: getMakesByTerm', () => {
    it('shoud return results and meta properties', (done) => {
        const term = '', page = 1, limit = 10
        getMakesByTerm( term, page, limit, res => {
            expect(res).to.have.property('results')
            expect(res).to.have.property('meta')
            done();
        });
    });
    it('shoud return 10 results by default with undefined limit', (done) => {
        const term = '', page = 1, limit = undefined
        getMakesByTerm( term, page, limit, res => {
            expect(res).to.have.property('results').to.have.length(10)
            done();
        });
    });
    it('shoud return 20 results with limit (20)', (done) => {
        const term = '', page = 1, limit = 20
        getMakesByTerm( term, page, limit, res => {
            expect(res).to.have.property('results').to.have.length(20)
            done();
        });
    })
});