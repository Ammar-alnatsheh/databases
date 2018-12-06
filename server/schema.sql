CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer PRIMARY KEY,
  name char
);

CREATE TABLE rooms (
  id integer PRIMARY KEY,
  name char
);

CREATE TABLE messages (
  id integer PRIMARY KEY,
  user_id integer,
  room_id integer,
  FOREIGN KEY(user_id) REFERENCES users (id),
  FOREIGN KEY(room_id) REFERENCES rooms (id),
  message text
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

