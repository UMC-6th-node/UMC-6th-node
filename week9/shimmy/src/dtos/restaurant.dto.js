export const restaurantResponseDto = (restaurant) => {
    return {
        "restaurantName": restaurant[0].rest_name,
        "restaurantAddress": restaurant[0].rest_addr,
        "regionName": restaurant[0].region_name,
    };
}

export const reviewResponseDto = (review) => {
    return {
        "restaurantName": review[0].rest_name,
        "body": review[0].body,
        "score": review[0].score,
    }
}

export const missionResponseDto = (mission) => {
    return {
        "restaurantName": mission[0].rest_name,
        "description": mission[0].description,
        "reward": mission[0].reward,
        "deadline": mission[0].deadline,
    }
}