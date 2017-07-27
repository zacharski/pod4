create database life;
\c life

create table todo (
	task text,
	priority int
);

insert into todo values ('write XYZ report', 1),
	('record db video', 1),
	('go to costco', 3),
	('call sister re. vacation', 2);


