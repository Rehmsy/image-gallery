const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json());


const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/albums';
const client = new Client(databaseUrl);
client.connect();

app.listen(3000, () => console.log('app is running...'));