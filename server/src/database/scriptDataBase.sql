create database proyecto_login
use project;

create table login(
	username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

insert into login (username, password) values
	('usuario1', 'clave1'),
    ('usuario2', 'clave2'),
    ('usuario3', 'clave3');
    