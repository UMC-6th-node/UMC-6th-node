import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SwaggerUi from 'swagger-ui-express';

import { status } from './config/response.status.js';
import { specs } from './config/swagger.config.js'

import { userRouter } from './src/routes/user.route.js';
import { restaurantRouter } from './src/routes/restaurant.route.js';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    console.log("error:", err);
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

app.use('/user', userRouter);
app.use('/restaurant', restaurantRouter);

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));