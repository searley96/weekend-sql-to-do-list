--create tasks table
CREATE TABLE "tasks" (
  "id" serial primary key,
  "task" varchar(200),
  "complete" boolean
);


--test data
INSERT INTO "tasks" ("task", "complete")
VALUES ('wash dishes', false);