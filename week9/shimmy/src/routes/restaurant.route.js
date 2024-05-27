import express from 'express';
import asyncHandler from 'express-async-handler';

import { addRestaurantCnt, addReviewCnt } from '../controllers/restaurant.controller.js';

export const restaurantRouter = express.Router();

restaurantRouter.post('/', asyncHandler(addRestaurantCnt));

restaurantRouter.post('/:restaurantId/review', asyncHandler(addReviewCnt));