CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username char(25)
);

CREATE TABLE rooms (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roomname char(25)
);

CREATE TABLE messages (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id integer,
  room_id integer,
  message text,
  FOREIGN KEY(user_id) REFERENCES users (id),
  FOREIGN KEY(room_id) REFERENCES rooms (id)
 
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

