import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { beginMissionSql, getMissionWithUserSql } from "./mission.sql.js";

export const beginMissionDao = async (data) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(beginMissionSql, [
            data.status,
            data.userId,
            data.missionId,
        ])
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getMissionWithUserDao = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(getMissionWithUserSql, userId);
        conn.release();
        return result[0];
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}