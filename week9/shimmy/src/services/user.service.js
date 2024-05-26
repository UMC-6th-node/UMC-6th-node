import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const prefer = body.prefer;

    // body의 속성을 인자로 addUser 호출 -> insert
    const joinUserData = await addUser({
        "name": body.name,
        "gender": body.gender,
        "age": body.age,
        "address": body.address,
        "specAddress": body.specAddress,
        "email": body.email,
    });
    // addUser의 리턴값 : -1 또는 userId
    // addUser가 -1을 리턴 : 이메일이 이미 존재 (user.dao.js)
    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    // 문제 없을 시
    }else{
        // request body의 prefer값을 가져와 서버에 선호음식 저장
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        // 모든 작업이 끝나면 dto형태로 리턴
        // getUser(userId)
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}