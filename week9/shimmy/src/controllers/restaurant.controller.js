import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addRestaurantSer, addReviewSer, addMissionSer } from "../services/restaurant.service.js";

/** 식당 추가 */
export const addRestaurantCnt = async (req, res, next) => {
    res.send(response(status.SUCCESS, await addRestaurantSer(req.body)));
}

/** 식당별 리뷰 추가 */
export const addReviewCnt = async (req, res, next) => {
    const { restaurantId } = req.params;
    // params로 받은 restaurantId를 body에 추가
    const modifiedBody = {
        ...req.body,
        restaurantId,
    };

    res.send(response(status.SUCCESS, await addReviewSer(modifiedBody)));
}

/** 식당별 미션 추가 */
export const addMissionCnt = async (req, res, next) => {
    const { restaurantId } = req.params;
    // params로 받은 restaurantId를 body에 추가
    const modifiedBody = {
        ...req.body,
        restaurantId,
    };

    res.send(response(status.SUCCESS, await addMissionSer(modifiedBody)));
}