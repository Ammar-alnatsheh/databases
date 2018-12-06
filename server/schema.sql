CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer PRIMARY KEY,
  username char
);

CREATE TABLE rooms (
  id integer PRIMARY KEY,
  username char
);

CREATE TABLE messages (
  id integer PRIMARY KEY,
  username integer,
  roomname integer,
   message text''
  FOREIGN KEY(username) REFERENCES users (id),
  FOREIGN KEY(roomname) REFERENCES rooms (id)
 
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

