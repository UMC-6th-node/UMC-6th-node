import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { beginMissionSer } from '../services/mission.service.js';

/** 미션 도전 */
export const beginMissionCnt = async (req, res, next) => {
    const { missionId } = req.params;
    const { userId } = req.query;

    const modifiedBody = {
        missionId,
        userId: userId,
    };

    res.send(response(status.SUCCESS, await beginMissionSer(modifiedBody)));
}