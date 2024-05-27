import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addRestaurantSer, addReviewSer } from "../services/restaurant.service.js";

export const addRestaurantCnt = async (req, res, next) => {
    res.send(response(status.SUCCESS, await addRestaurantSer(req.body)));
}

export const addReviewCnt = async (req, res, next) => {
    const { restaurantId } = req.params;
    // params로 받은 restaurantId를 body에 추가
    const modifiedBody = {
        ...req.body,
        restaurantId,
    };

    res.send(response(status.SUCCESS, await addReviewSer(modifiedBody)));
}