import express from 'express';
import asyncHandler from 'express-async-handler';
import { beginMissionCnt } from '../controllers/mission.controller.js';

export const missionRouter = express.Router();

missionRouter.patch('/:missionId/begin', asyncHandler(beginMissionCnt));