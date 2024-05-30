import { beginMissionDao, getMissionWithUserDao } from '../models/mission.dao.js';
import { getMissionListWithUserDto } from '../dtos/mission.dto.js';

export const beginMissionSer = async (body) => {
    const missionData = await beginMissionDao({
        "missionId": body.missionId,
        "userId": body.userId,
        "status": "진행중"
    });

    return getMissionListWithUserDto(await getMissionWithUserDao(6));
}