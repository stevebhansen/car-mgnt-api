const expect = require('chai').expect;
const { getByMakeId } = require('../services/vehicleModel.service');

describe('vehicleModel.service: getByMakeId', () => {
    it('shoud return Results with Make_ID (equal to 440), Make_Name, Model_ID and Model_Name properties', (done) => {
        const makeId = 440;
        getByMakeId( makeId, res => {
            expect(res).to.have.property('Results')
            res.Results.forEach(result => {
                expect(result).to.have.property('Make_ID').that.equals(440)
                expect(result).to.have.property('Make_Name')
                expect(result).to.have.property('Model_ID')
                expect(result).to.have.property('Model_Name')
            });
            done()
        })
    })
});