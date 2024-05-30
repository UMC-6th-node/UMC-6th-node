import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { 
    insertRestaurantSql, 
    getRestaurantSql, 
    insertReviewSql, 
    getReviewSql,
    insertMissionSql,
    getMissionSql,
} from "./restaurant.sql.js";

/** 식당 추가 */
export const addRestaurantDao = async (data) => {
    try{
        // 커넥션
        const conn = await pool.getConnection();

        const result = await pool.query(insertRestaurantSql, [
            data.name,
            data.address,
            data.regionId
        ])
        conn.release();
        // userId 리턴
        return result[0].insertId;
        
    }catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

/** restaurantId로 식당 조회 */
export const getRestaurantDao = async (restaurantId) => {
    try {
        const conn = await pool.getConnection();
        const [restaurant] = await pool.query(getRestaurantSql, restaurantId);
        conn.release();
        return restaurant;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

/** 식당별 리뷰 추가 */
export const addReviewDao = async (data) => {
    try {
        const conn = await pool.getConnection();
        const review = await pool.query(insertReviewSql, [
            data.userId,
            data.restaurantId,
            data.body,
            data.score
        ]);
        conn.release();
        return review[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

/** reviewId로 리뷰 조회 */
export const getReviewDao = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewSql, data);
        conn.release();
        return review;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

/** 식당별 미션 추가 */
export const addMissionDao = async (data) => {
    try {
        const conn = await pool.getConnection();
        const mission = await pool.query(insertMissionSql, [
            data.restaurantId,
            data.description,
            data.reward,
            data.deadline
        ]);
        conn.release();
        return mission[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

/** missionId로 미션 조회 */
export const getMissionDao = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionSql, data);
        conn.release();
        return mission;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}