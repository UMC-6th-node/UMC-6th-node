export const beginMissionSql = "INSERT INTO user_mission (status, user_id, mission_id, created_at) VALUES (?, ?, ?, NOW());"

export const getMissionWithUserSql = "SELECT r.name rest_name, m.description, m.reward, m.deadline, um.status FROM user_mission um, mission m, restaurant r WHERE um.user_id = ? AND um.mission_id = m.id AND m.restaurant_id = r.id;"