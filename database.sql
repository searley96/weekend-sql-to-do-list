--create table
CREATE TABLE "tasks" (
  "id" serial primary key,
  "title" varchar(200),
  "complete" boolean
);

--test data
INSERT INTO "tasks" ("title", "complete")
VALUES ('wash dishes', false);

--test data
INSERT INTO "tasks" ("title", "complete") 
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