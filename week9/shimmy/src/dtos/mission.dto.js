export const getMissionWithUserDto = (userMission) => {
    return {
        "restaurantName": userMission.rest_name,
        "description": userMission.description,
        "reward": userMission.reward,
        "deadline": userMission.deadline,
        "status": userMission.status,
    }
}

export const getMissionListWithUserDto = (userMissions) => {
    return userMissions.map(getMissionWithUserDto);
}