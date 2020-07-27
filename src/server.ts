/* eslint-disable import/order */
import routes from './routes/index';
import './database';
import express = require('express');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3001);
