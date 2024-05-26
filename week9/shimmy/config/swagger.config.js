import SwaggerJsdoc from "swagger-jsdoc";

/** 스웨거에 출력할 기본 정보 */
const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'localhost:3000', // 서버 root 주소
        basepath: '../'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);