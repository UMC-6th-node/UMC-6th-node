import express from 'express';
import asyncHandler from 'express-async-handler';

import { addRestaurantCnt, addReviewCnt, addMissionCnt } from '../controllers/restaurant.controller.js';

export const restaurantRouter = express.Router();

restaurantRouter.post('/', asyncHandler(addRestaurantCnt));

restaurantRouter.post('/:restaurantId/review', asyncHandler(addReviewCnt));

restaurantRouter.post('/:restaurantId/mission', asyncHandler(addMissionCnt));