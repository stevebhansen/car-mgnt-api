const express = require('express')
const { getMakesByTerm } = require('./controllers/vehicleMake.controller');
const { getModelByIdTerm } = require('./controllers/vehicleModel.controller');
const { createCompanyCar, getCompanyCar, getAllCompanyCars,  updateCompanyCar, deleteCompanyCar } = require('./controllers/companyCar.controller');
const mongo = require('./utils/mongo');



const app = express()
const port = 3000

app.use(express.json());

app.get('/search/make/:term', (req, res) => {
    getMakesByTerm(req.params.term, req.query.page, req.query.limit, httpResponse => {
        res.send(httpResponse)
    });
});

app.get('/search/model', (req, res) => {
    if(!req.params.makeId) {
        res.send('Required parameter makeId is missing');
    } else {
        getModelByIdTerm('', req.params.makeId, req.query.page, req.query.limit, httpResponse => {
            res.send(httpResponse)
        });
    }
});

app.get('/search/model/:makeId', (req, res) => {
    if(!req.params.makeId) {
        res.send('Required parameter makeId is missing');
    } else {
        getModelByIdTerm('', req.params.makeId, req.query.page, req.query.limit, httpResponse => {
            res.send(httpResponse)
        });
    }
});

app.get('/search/model/:makeId/:term', (req, res) => {
    if(!req.params.makeId) {
        res.send('Required parameter makeId is missing');
    } else {
        getModelByIdTerm(req.params.term, req.params.makeId, req.query.page, req.query.limit, httpResponse => {
            res.send(httpResponse)
        });
    }
});

app.post('/company-car', (req, res) => {
    const [makeId, modelId, assignee, color] = [parseInt(req.body.makeId), parseInt(req.body.modelId), req.body.assignee, req.body.color]
    console.log(makeId, modelId)
    if (!isNaN(makeId) && !isNaN(modelId)) {
        createCompanyCar(makeId, modelId, assignee, color, result => {
            res.send(result)
        });
    } else {
        res.send("Required parameter MakeId or ModelId is missing.")
    }
});

app.post('/company-car/:carId', (req, res) => {
    const carId = parseInt(req.params.carId)
    if (!isNaN(carId)) {
        const [makeId, modelId, assignee, color] = [req.body.makeId, req.body.modelId, req.body.assignee, req.body.color]
        updateCompanyCar(carId, makeId, modelId, assignee, color, result => {
            res.send(result)
        });
    } else {
        res.send("Invalid carId provided.")
    }
});


app.get('/company-car', (req, res) => {
    getAllCompanyCars(result => {
        res.send(result)
    });
});

app.get('/company-car/:carId', (req, res) => {
    const carId = parseInt(req.params.carId)
    if (!isNaN(carId)) {
        getCompanyCar(carId, result => {
            res.send(result)
        });
    }
    else {
        res.send("Invalid carId provided.")
    }
});

app.delete('/company-car/:carId', (req, res) => {
    const carId = parseInt(req.params.carId)
    if (!isNaN(carId)) {
        deleteCompanyCar(carId, result => {
            res.send(result)
        });
    }
    else {
        res.send("Invalid carId provided.")
    }
});

mongo.connect(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});


