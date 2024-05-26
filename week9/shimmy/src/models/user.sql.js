export const insertUserSql = "INSERT INTO user (name, gender, age, address, spec_address, email) VALUES (?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE id = ?";

export const connectFoodCategory = "INSERT INTO favorite_food (food_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT uf.food_category_id, uf.user_id, fc.name "
+ "FROM favorite_food uf JOIN food_category fc on uf.food_category_id = fc.id "
+ "WHERE uf.user_id = ? ORDER BY uf.food_category_id ASC;";