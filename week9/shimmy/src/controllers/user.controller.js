import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log("회원가입 ㅊㅊ");
    console.log("body: ", req.body);

    // joinUser에 대한 응답이 올 때까지 대기
    // 응답이 오면 SUCCESS 코드와 함께 send
    res.send(response(status.SUCCESS, await joinUser(req.body)));
}