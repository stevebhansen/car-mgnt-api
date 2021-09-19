const { create, getCar, getAllCars, updateCar, deleteCar } = require('../services/companyCar.service');

const createCompanyCar = (makeId, modelId, assignee, color, callback) => {
    create(makeId, modelId, assignee, color, result => {
        callback(result)
    });
}

const getCompanyCar = async (id, callback) => {
    result = await getCar(id);
    callback(result)
}

const deleteCompanyCar = async (id, callback) => {
    result = await deleteCar(id);
    callback(result)
}

const getAllCompanyCars = async(callback) => {
    result = await getAllCars();
    callback(result)
}

const updateCompanyCar = async(carId, makeId, modelId, assignee, color, callback) => {
    let carInfo = {};
    if (makeId) carInfo.makeId = makeId
    if (modelId) carInfo.modelId = modelId
    if (assignee) carInfo.assignee = assignee
    if (color) carInfo.color = color

    result = await updateCar(carId, carInfo);
    callback(result)
}

module.exports = {
    createCompanyCar,
    getCompanyCar,
    getAllCompanyCars,
    updateCompanyCar,
    deleteCompanyCar
}