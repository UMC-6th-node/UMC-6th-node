export const restaurantResponseDto = (restaurant) => {
    return {
        "restaurantName": restaurant[0].rest_name,
        "restaurantAddress": restaurant[0].rest_addr,
        "regionName": restaurant[0].region_name,
    };
}

// // 프론트에 리턴해줄 response DTO 형식 정의
// export const signinResponseDTO = (user, prefer) => {
//     const preferFood = [];
//     for (let i = 0; i < prefer[0].length; i++) {
//         preferFood.push(prefer[0][i].f_category_name);
//     }
//     return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
// }