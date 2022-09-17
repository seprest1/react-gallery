-- DROP TABLE "gallery";

CREATE TABLE "gallery" (
	id SERIAL PRIMARY KEY,
	url VARCHAR(500) NOT NULL,
	description VARCHAR (500),
	likes INTEGER,
	displayPicture BOOLEAN DEFAULT TRUE
);

INSERT INTO "gallery" 
	(url, description, likes)
	VALUES
	('https://m.media-amazon.com/images/I/61uZd5AdV5L._SL500_.jpg', 'Purple Coneflower', 0),
	('https://www.backyardgardenlover.com/wp-content/uploads/2021/09/wild-petunia.jpg.webp', 'Wild Petunia', 0),
	('https://www.backyardgardenlover.com/wp-content/uploads/2021/09/tall-thistle.jpg.webp', 'Thistle', 0),
	('https://m.media-amazon.com/images/I/51omKR1TDbL._SL500_.jpg', 'Prairie Onion', 0),
	('https://m.media-amazon.com/images/I/31p-VSJa74L._SL500_.jpg', 'Purple Milkweed', 0),
	('https://m.media-amazon.com/images/I/41M-X191znL._SL500_.jpg', 'Viper''s Bugloss', 0);
	
	