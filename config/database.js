const mysql = require("mysql2/promise");
const { logger } = require("./winston");

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: "umx2insta.cfeyrpadoh9b.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  port: "3306",
  password: "11111111",
  database: "umc2instaDB",
});

module.exports = {
  pool: pool,
};
