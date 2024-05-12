CREATE TABLE `member` (
	`id`	bigint	NOT NULL,
	`name`	varchar(20)	NULL,
	`nickname`	varchar(20)	NOT NULL,
	`gender`	tinyint(1)	NOT NULL,
	`birthday`	datetime	NOT NULL,
	`address`	text	NOT NULL,
	`phone_no`	varchar(11)	NULL,
	`point`	int	NOT NULL	DEFAULT 0,
	`login_method`	varchar(10)	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`status`	varchar(10)	NOT NULL,
	`inactive_date`	datetime	NULL
);

CREATE TABLE `favorite_category` (
	`id`	bigint	NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`member_id`	bigint	NOT NULL,
	`food_category_id`	bigint	NOT NULL
);

CREATE TABLE `food_category` (
	`id`	bigint	NOT NULL,
	`name`	varchar(20)	NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL
);

CREATE TABLE `restaurant` (
	`id`	bigint	NOT NULL,
	`name`	varchar(30)	NOT NULL,
	`address`	text	NOT NULL,
	`status`	varchar(20)	NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`food_category_id`	bigint	NOT NULL
);

CREATE TABLE `menu` (
	`id`	bigint	NOT NULL,
	`name`	varchar(30)	NULL,
	`descript`	text	NULL,
	`price`	int	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`restaurant_id`	bigint	NOT NULL
);

CREATE TABLE `review` (
	`id`	bigint	NOT NULL,
	`review_text`	text	NULL,
	`score`	int	NOT NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`member_id`	bigint	NOT NULL,
	`restaurant_id`	bigint	NOT NULL
);

CREATE TABLE `mission` (
	`id`	bigint	NOT NULL,
	`price`	int	NOT NULL,
	`point`	int	NOT NULL,
	`location`	text	NULL,
	`due_date`	datetime	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`restaurant_id`	bigint	NOT NULL
);

CREATE TABLE `my_mission` (
	`id`	bigint	NOT NULL,
	`status`	tinyint(2)	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`member_id`	bigint	NOT NULL,
	`mission_id`	bigint	NOT NULL
);

CREATE TABLE `review_image` (
	`id`	bigint	NOT NULL,
	`image`	text	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`review_id`	bigint	NOT NULL
);

CREATE TABLE `inquiry` (
	`id`	bigint	NOT NULL,
	`type`	varchar(10)	NULL,
	`title`	text	NULL,
	`content`	text	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`status`	tinyint(2)	NULL,
	`member_id`	bigint	NOT NULL
);

CREATE TABLE `inquiry_image` (
	`id`	bigint	NOT NULL,
	`image`	text	NULL,
	`created_at`	datetime(6)	NOT NULL,
	`updated_at`	datetime(6)	NULL,
	`status`	tinyint(2)	NULL,
	`inquiry_id`	bigint	NOT NULL
);

ALTER TABLE `member` ADD CONSTRAINT `PK_MEMBER` PRIMARY KEY (
	`id`
);

ALTER TABLE `favorite_category` ADD CONSTRAINT `PK_FAVORITE_CATEGORY` PRIMARY KEY (
	`id`
);

ALTER TABLE `food_category` ADD CONSTRAINT `PK_FOOD_CATEGORY` PRIMARY KEY (
	`id`
);

ALTER TABLE `restaurant` ADD CONSTRAINT `PK_RESTAURANT` PRIMARY KEY (
	`id`
);

ALTER TABLE `menu` ADD CONSTRAINT `PK_MENU` PRIMARY KEY (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `PK_REVIEW` PRIMARY KEY (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `PK_MISSION` PRIMARY KEY (
	`id`
);

ALTER TABLE `my_mission` ADD CONSTRAINT `PK_MY_MISSION` PRIMARY KEY (
	`id`
);

ALTER TABLE `review_image` ADD CONSTRAINT `PK_REVIEW_IMAGE` PRIMARY KEY (
	`id`
);

ALTER TABLE `inquiry` ADD CONSTRAINT `PK_INQUIRY` PRIMARY KEY (
	`id`
);

ALTER TABLE `inquiry_image` ADD CONSTRAINT `PK_INQUIRY_IMAGE` PRIMARY KEY (
	`id`
);

ALTER TABLE `favorite_category` ADD CONSTRAINT `FK_member_TO_favorite_category_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `favorite_category` ADD CONSTRAINT `FK_food_category_TO_favorite_category_1` FOREIGN KEY (
	`food_category_id`
)
REFERENCES `food_category` (
	`id`
);

ALTER TABLE `restaurant` ADD CONSTRAINT `FK_food_category_TO_restaurant_1` FOREIGN KEY (
	`food_category_id`
)
REFERENCES `food_category` (
	`id`
);

ALTER TABLE `menu` ADD CONSTRAINT `FK_restaurant_TO_menu_1` FOREIGN KEY (
	`restaurant_id`
)
REFERENCES `restaurant` (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `FK_member_TO_review_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `review` ADD CONSTRAINT `FK_restaurant_TO_review_1` FOREIGN KEY (
	`restaurant_id`
)
REFERENCES `restaurant` (
	`id`
);

ALTER TABLE `mission` ADD CONSTRAINT `FK_restaurant_TO_mission_1` FOREIGN KEY (
	`restaurant_id`
)
REFERENCES `restaurant` (
	`id`
);

ALTER TABLE `my_mission` ADD CONSTRAINT `FK_member_TO_my_mission_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `my_mission` ADD CONSTRAINT `FK_mission_TO_my_mission_1` FOREIGN KEY (
	`mission_id`
)
REFERENCES `mission` (
	`id`
);

ALTER TABLE `review_image` ADD CONSTRAINT `FK_review_TO_review_image_1` FOREIGN KEY (
	`review_id`
)
REFERENCES `review` (
	`id`
);

ALTER TABLE `inquiry` ADD CONSTRAINT `FK_member_TO_inquiry_1` FOREIGN KEY (
	`member_id`
)
REFERENCES `member` (
	`id`
);

ALTER TABLE `inquiry_image` ADD CONSTRAINT `FK_inquiry_TO_inquiry_image_1` FOREIGN KEY (
	`inquiry_id`
)
REFERENCES `inquiry` (
	`id`
);

