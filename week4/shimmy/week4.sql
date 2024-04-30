CREATE TABLE `user` (
	`id`	bigint	NOT NULL,
	`nickname`	varchar(15)	NULL,
	`email`	varchar(30)	NULL,
	`phone_number`	varchar(11)	NULL,
	`gender`	varchar(10)	NULL,
	`birth`	date	NULL,
	`address`	varchar(45)	NULL,
	`favorite_genre_id`	int	NOT NULL,
	`created_at`	datetime(6)	NULL,
	`updated_at`	datetime(6)	NULL,
	`point`	int	NULL	DEFAULT 0,
	`status`	varchar(15)	NULL,
	`inactive_date`	datetime	NULL
);

CREATE TABLE `food_genre` (
	`id`	int	NOT NULL,
	`name`	varchar(15)	NULL
);

CREATE TABLE `restaurant` (
	`id`	bigint	NOT NULL,
	`name`	varchar(15)	NULL,
	`genre_id`	int	NOT NULL,
	`admin_id`	bigint	NOT NULL,
	`address`	varchar(45)	NULL
);

CREATE TABLE `mission` (
	`id`	bigint	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`restaurant_id`	bigint	NOT NULL,
	`is_successed`	boolean	NULL
);

CREATE TABLE `admin` (
	`id`	bigint	NOT NULL
);

ALTER TABLE `user` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`id`
);

ALTER TABLE `food_genre` ADD CONSTRAINT `PK_FOOD_GENRE` PRIMARY KEY (
	`id`
);

ALTER TABLE `restaurant` ADD CONSTRAINT `PK_RESTAURANT` PRIMARY KEY (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `PK_MISSION` PRIMARY KEY (
	`id`,
	`user_id`,
	`restaurant_id`
);

ALTER TABLE `admin` ADD CONSTRAINT `PK_ADMIN` PRIMARY KEY (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `FK_user_TO_mission_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `user` (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `FK_restaurant_TO_mission_1` FOREIGN KEY (
	`restaurant_id`
)
REFERENCES `restaurant` (
	`id`
);

