import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID } from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
    try{
        // 커넥션
        const conn = await pool.getConnection();
        // user 테이블에서 email 검색
        const [confirm] = await pool.query(confirmEmail, data.email);
        // 존재하는 이메일이면 -1 리턴
        if(confirm[0].isExistEmail){
            // release는 연결을 pool에 반납함
            conn.release();
            return -1;
        }
        // 존재하지 않는 이메일이라면 insert
        const result = await pool.query(insertUserSql, [
            data.name,
            data.gender, 
            data.age, 
            data.address, 
            data.specAddress, 
            data.email,
        ]);
        // insert 후 커넥션 반납
        conn.release();
        // userId 리턴
        return result[0].insertId;
        
    }catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        // userId로 getUserID sql문 실행
        const [user] = await pool.query(getUserID, userId);

        console.log(user);
        // 존재하지 않는 유저면 -1 리턴
        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}