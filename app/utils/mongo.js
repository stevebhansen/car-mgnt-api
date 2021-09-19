// Obtain config from the environment
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DATA = process.env.DATA;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

const mongoClient = require('mongodb').MongoClient;
let url = `mongodb://root:example@${HOST}:${PORT}/${DATA}?authSource=admin`;
console.log(`URL: ${url}`);
let db;

function connect(callback){
    mongoClient.connect(url, (err, client) => {
        if (err) throw err
        db = client.db(DATA);
        let count = 0;
        count = db.collection('counters').findOne({_id: "carid"})
            .then(item => {
                console.log(item)
                if (!item.seq) {
                    try {
                        db.collection('counters').updateOne(
                            { _id: "carid"},
                            { $set: { _id: "carid",  seq: 0 }},
                            { upsert: true }
                            );
                    } catch (err) {
                        console.log('collection already exists')
                    }
                }
            });
        callback();
    });
}
function get(){
    return db;
}

function close(){
    db.close();
}

function getNextSequence(name, callback) {
    db.collection('counters').findOneAndUpdate(
           { _id: name },
           { $inc: { seq: 1 } }
    ).then(item => {
        console.log(item)
        callback(item.value.seq)
    });
 }

module.exports = {
    connect,
    get,
    close,
    getNextSequence
};