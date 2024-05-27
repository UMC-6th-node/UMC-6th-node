export const insertRestaurantSql = "INSERT INTO restaurant (name, address, region_id) VALUES (?, ?, ?);"

export const getRestaurantSql = "SELECT rest.name as rest_name, rest.address as rest_addr, reg.name as region_name FROM restaurant rest, region reg WHERE rest.region_id = reg.id and rest.id = ?;"