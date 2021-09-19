const { expect } = require('chai');
const { paginate } = require('../utils/paginate');
const vehicleMakeData = require('../utils/vehicleMakeData.json');

describe('utils.paginate: paginate', () => {
    it('should return a default of 10 results', (done) => {
        const page = 1, limit = undefined
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('results').to.have.length(10);
        done();
    });
    it('should return 20 results when limit is set to 20', (done) => {
        const page = 1, limit = 20
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('results').to.have.length(20);
        done();
    });
    it('should see different results for page 1 and page 2', (done) => {
        const pageOne = 1, pageTwo = 2, limit = 10
        expect(paginate(vehicleMakeData, limit, pageOne)).to.not.equal(paginate(vehicleMakeData, limit, pageTwo))
        done();
    });
    it('should return a maximum of 100 results', (done) => {
        const page = 1, limit = 101
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('results').to.have.length(100);
        done();
    });
});

describe('utils.paginate: paginate (meta property)', () => {
    it('should have total number of results (ignoring paging)', (done) => {
        const page = 1, limit = 100
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('meta').to.have.property('totalCount').to.be.equal(vehicleMakeData.results.length);
        done();
    });
    it('should have the current page number', (done) => {
        const page = 1, limit = 100
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('meta').to.have.property('page').to.be.equal(page);
        done();
    });
    it('should have the current number of results limit used', (done) => {
        const page = 1, limit = 100
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('meta').to.have.property('limit').to.be.equal(limit);
        done();
    });
    it('should have the total number of pages', (done) => {
        const page = 1, limit = 100
        expect(paginate(vehicleMakeData, limit, page)).to.have.property('meta').to.have.property('totalPages');
        done();
    });
});