import { restaurantResponseDto } from "../dtos/restaurant.dto.js";
import { addRestaurantDao, getRestaurantDao } from "../models/restaurant.dao.js";

export const addRestaurantSer = async (body) => {
    // id 리턴
    const restaurantData = await addRestaurantDao({
        "name": body.name,
        "address": body.address,
        "regionId": body.regionId
    });

    return restaurantResponseDto(await getRestaurantDao(restaurantData));
}
