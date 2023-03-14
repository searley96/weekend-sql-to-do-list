--create table
CREATE TABLE "tasks" (
	"id" serial primary key,
	"name" varchar(80) not null,
	"completed" boolean default false
);



--test data
INSERT INTO "tasks" ("name", "completed") 
VALUES
		('laundry', TRUE),
		('dishes', FALSE),
		('clean bathroom', TRUE),
		('clean bedroom', FALSE),
		('empty litterbox', TRUE),
		('feed cat', TRUE),
		('sweep floor', FALSE),
		('reset fridge', TRUE),
		('take out trash', FALSE);