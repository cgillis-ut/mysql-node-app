var inquirer = require("inquirer");
var mysql = require("mysql");
var fs = require("fs");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "chrisa8300@gmail.com",
  database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err){
  	console.log(err);
  }
});

// function which prompts the user for what action they should take
var start = function() {
	var query = "SELECT * FROM Bamazon.products";
	connection.query(query, function(err, response) {
		if (err) {
			console.log(err);
		} else {
			for (var i = 0; i < response.length; i++) {
				console.log(response[i].item_id + " || " + response[i].product_name + " || " + "$ " + response[i].price);
			}
			inquirer.prompt([{
				name: "productID",
				type: "input",
				message: "What is the ID of the product you would like to buy?",
				validate: function(value) {
					if (isNaN(value) === false) {
						return true;
					}
					return false;
				}
			}, {
				name: "amount",
				type: "input",
				message: "How many?",
				validate: function(value) {
					if (isNaN(value) === false) {
						return true;
					}
					return false;
				}
			}]).then(function(input) {
				for (var i = 0; i < response.length; i++) {
					var chosenItem = response[i];
					if(chosenItem.item_id == input.productID){
						// console.log(chosenItem.quantity - parseInt(input.amount));

						connection.query("UPDATE products SET ? WHERE ?", [{
						quantity: chosenItem.quantity - parseInt(input.amount)
					}, {
						item_id: input.productID
					}], function(err, packet) {
						if (err) {
							console.log(err)
						} else {
							setTimeout(function(){
							console.log(chosenItem);
							console.log(chosenItem.quantity);
							console.log(input.amount);
							//here's where I keep getting strange results and I'm not sure why

							}, 2000)
						}
					})
					}
					
				}//ends for loop
			})
		};
	})
};
//ends start func
				

start();

// connection.query("UPDATE products SET ? WHERE ?", 
					// 		[{
					// 			quantity: chosenItem.quantity
					// 		},
					// 		{

					// 		}], function(err, response){})
					// 		}
					// });