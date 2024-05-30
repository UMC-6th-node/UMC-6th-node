import { restaurantResponseDto, reviewResponseDto, missionResponseDto } from "../dtos/restaurant.dto.js";
import { addRestaurantDao, getRestaurantDao, addReviewDao, getReviewDao, addMissionDao, getMissionDao } from "../models/restaurant.dao.js";

export const addRestaurantSer = async (body) => {
    // id 리턴
    const restaurantData = await addRestaurantDao({
        "name": body.name,
        "address": body.address,
        "regionId": body.regionId
    });

    return restaurantResponseDto(await getRestaurantDao(restaurantData));
}

export const addReviewSer = async (body) => {
    // id 리턴
    const reviewData = await addReviewDao({
        "userId": body.userId,
        "restaurantId": body.restaurantId,
        "body": body.body,
        "score": body.score,
    });

    return reviewResponseDto(await getReviewDao(reviewData));
}

export const addMissionSer = async (body) => {
    // id 리턴
    const missionData = await addMissionDao({
        "restaurantId": body.restaurantId,
        "description": body.description,
        "reward": body.reward,
        "deadline": body.deadline,
    });

    return missionResponseDto(await getMissionDao(missionData));
}