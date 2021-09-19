const expect = require('chai').expect;
const { getAll } = require('../services/vehicleMake.service');

describe('vehicle.service: getAll', () => {
    it('shoud return Results with Make_ID and Make_Name properties', (done) => {
        getAll( res => {
            expect(res).to.have.property('Results')
            res.Results.forEach(result => {
                expect(result).to.have.property('Make_ID')
                expect(result).to.have.property('Make_Name')
            });
            done();
        });
    });
});