const Product = require("./models");

const productArray = [
	{
		"image": "https://http2.mlstatic.com/muneco-funko-pop-freddie-mercury-queen-musica-rdf1-D_NQ_NP_836764-MLA31765149543_082019-F.jpg",
		"name": "Freddy Mercury",
		"price": 100.00,
	},
	{
		"image": "https://images-na.ssl-images-amazon.com/images/I/61l5MXtZpsL._AC_SY355_.jpg",
		"name": "Angus Young",
		"price": 200.00,
	},
	{
		"image": "https://kabenzots.com/wp-content/uploads/2017/06/funko-pop-diana-prince.jpg",
		"name": "Wonder Woman",
		"price": 300.00,
	},
	{
		"image": "https://images-eu.ssl-images-amazon.com/images/I/41sXL2PL1fL.jpg",
		"name": "Agent Smith",
		"price": 400.00,
	},
	{
		"image": "https://images-na.ssl-images-amazon.com/images/I/51VOaYc-wdL._AC_SX425_.jpg",
		"name": "Rey SW",
		"price": 500.00,
	},
	{
		"image": "https://i.ebayimg.com/images/g/sAkAAOSw7qddMrtx/s-l300.jpg",
		"name": "Homero Simpson",
		"price": 600.00,
	}
]

Product.bulkCreate(productArray)