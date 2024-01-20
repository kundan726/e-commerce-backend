import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import connect_DB from './config/dbConfig.js';
import routes from './routes/index.js'
const DB_URL = process.env.MONGO_DB_URL;
const port = process.env.PORT;

app.use(express.json());

connect_DB(DB_URL);

app.use('/api',routes)

app.listen(port,() => {
    console.log(`Server running on ${port}`)
})
