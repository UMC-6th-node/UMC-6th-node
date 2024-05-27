export const insertRestaurantSql = "INSERT INTO restaurant (name, address, region_id) VALUES (?, ?, ?);"

export const getRestaurantSql = "SELECT rest.name as rest_name, rest.address as rest_addr, reg.name as region_name FROM restaurant rest, region reg WHERE rest.region_id = reg.id and rest.id = ?;"

export const insertReviewSql = "INSERT INTO review (user_id, restaurant_id, body, score) VALUES (?, ?, ?, ?);"

export const getReviewSql = "SELECT rev.body, rev.score, res.name as rest_name FROM review rev INNER JOIN restaurant res ON rev.restaurant_id = res.id where rev.id = ?;"