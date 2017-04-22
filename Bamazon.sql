-- CREATE DATABASE Bamazon;
-- 
-- USE Bamazon; 
-- 
-- CREATE TABLE products(
-- 	item_id SMALLINT NOT NULL AUTO_INCREMENT,
-- 	product_name VARCHAR(60) NOT NULL,
-- 	dept_name VARCHAR(50) NOT NULL,
-- 	price SMALLINT NOT NULL,
-- 	quantity SMALLINT NOT NULL,
-- 	PRIMARY KEY(item_id)
-- );
-- 

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES("candle", "health", 25, 70), 
	  ("driftwood", "home", 14, 150),
      ("sandals", "shoes", 148, 19),
      ("whisk", "home", 9, 23),
      ("clock", "electronics", 83, 17),
      ("sneakers", "shoes", 78, 13),
      ("lamp", "home", 109, 7),
      ("blouse", "womens", 63, 57),
      ("laptop", "electronics", 749, 6),
      ("towels", "home", 16, 37);