import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertRestaurantSql, getRestaurantSql, insertReviewSql, getReviewSql } from "./restaurant.sql.js";

// User 데이터 삽입, userId 리턴
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