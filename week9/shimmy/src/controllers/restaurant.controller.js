import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addRestaurantSer } from "../services/restaurant.service.js";

export const addRestaurantCnt = async (req, res, next) => {
    res.send(response(status.SUCCESS, await addRestaurantSer(req.body)));
}