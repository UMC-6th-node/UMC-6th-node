import express from 'express';
import asyncHandler from 'express-async-handler';

import { addRestaurantCnt } from '../controllers/restaurant.controller.js';

export const restaurantRouter = express.Router();

restaurantRouter.post('/', asyncHandler(addRestaurantCnt));