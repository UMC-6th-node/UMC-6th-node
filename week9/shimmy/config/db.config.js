import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

/** connection pool : 커넥션 정보를 저장, env에서 가져온 정보 사용 */
export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_TABLE || 'umc_wb',
  password: process.env.DB_PASSWORD || 'password',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});