import app from './server';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = mongodb.MongoClient;

const port = process.env.PORT || 3000;

mongoClient.connect(
    process.env.DB_URI,
    {
        poolSize : 50, //number of concurrent users
        wtimeout : 2500, // connection time out
        useNewUrlParser : true
    }
)
    .catch(err =>{
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        app.listen(port, () => console.log(`listening on ${port}`))
    });
