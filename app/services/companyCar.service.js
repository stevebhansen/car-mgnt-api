const mongo = require('../utils/mongo');
const ObjectId = require('mongodb').ObjectId;


const create = async (makeId, modelId, assignee, color, callback) => {

    const doc = {
        makeId: makeId,
        modelId: modelId,
        assignee: assignee,
        color: color
    }
    mongo.getNextSequence("carid", seq => {
        mongo.get().collection('company_cars').insertOne({
            carId: seq,
            makeId: makeId,
            modelId: modelId,
            assignee: assignee,
            color: color
        }, (err, res) => {
            if(err) {
                return 'Error occured during insert'
            }
            doc.carId = seq
            callback(doc)
        });
    });
}

const updateCar = async (id, carData) => {
    console.log(carData)
    return mongo.get().collection('company_cars').findOneAndUpdate(
        { carId: id }, { $set: carData }
    ).then( item => {
        return item
    })
    .catch(err => console.error(`Failed to updating company car: ${err}`))
}

const getCar = async (id) => {
    return mongo.get().collection('company_cars').findOne({carId: id})
    .then( item => {
        return item
    })
    .catch(err => console.error(`Failed to find company car: ${err}`))
}

const getAllCars = async (id) => {
    return mongo.get().collection('company_cars').find()
    .toArray()
    .then( items => {
        return items
    })
    .catch(err => console.error(`Failed to finding all company cars: ${err}`))
}

const deleteCar = async (id) => {
    return mongo.get().collection('company_cars').remove({carId: id})
    .then( item => {
        return item
    })
    .catch(err => console.error(`Failed to find company car: ${err}`))
}

module.exports = {
    create,
    getCar,
    getAllCars,
    updateCar,
    deleteCar
}