import express from 'express';
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.controller.js";

export const userRouter = express.Router();

// userSignin에 대한 응답을 /signin에 post
userRouter.post('/signin', asyncHandler(userSignin));