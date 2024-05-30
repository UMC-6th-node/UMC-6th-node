export const insertUserSql =
  'INSERT INTO member (email, nickname, gender, birthday, address, phone_no) VALUES (?, ?, ?, ?, ?, ?);'

export const getUserID = 'SELECT * FROM member WHERE id = ?'

export const connectFoodCategory =
  'INSERT INTO favorite_category (food_category_id, member_id) VALUES (?, ?);'

export const confirmEmail =
  'SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail'

export const getPreferToUserID =
  'SELECT favorite_category.id, favorite_category.food_category_id, favorite_category.member_id, food_category.name as category_name ' +
  'FROM favorite_category JOIN food_category on favorite_category.food_category_id = food_category.id ' +
  'WHERE favorite_category.member_id = ? ORDER BY favorite_category.food_category_id ASC;'
