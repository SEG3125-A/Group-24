	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: false,
		dairyFree: true,
		none: true,
		category: "Meat",
		src: "images/salmon.webp",
		price: 10.00
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Meat",
		src: "images/chicken.png",
		price: 12.99
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Meat",
		src: "images/beef.png",
		price: 10.00
	},
	{
		name: "Shrimp",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Meat",
		src: "images/shrimp.jpeg",
		price: 9.89
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/brocoli.png",
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Bakery",
		src: "images/bread.png",
		price: 2.35
	},
	{
		name: "Bagel",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Bakery",
		src: "images/bagel.webp",
		price: 4.35
	},
	{
		name: "Croissants",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Bakery",
		src: "images/croissant.png",
		price: 5.20
	},
	{
		name: "Blueberry Muffins",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Bakery",
		src: "images/blueberrymuffins.webp",
		price: 6.99
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Dairy",
		src: "images/milk.jpeg",
		price: 5.50
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Dairy",
		src: "images/cheese",
		price: 7.50
	},
	{
		name: "Yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Dairy",
		src: "images/yogurt.png",
		price: 4.39
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/apple.jpeg",
		price: 2.00
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/banana.webp",
		price: 1.00
	},
	{
		name: "Orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/orange.jpeg",
		price: 2.00
	},
	{
		name: "Cucumber",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/cucumber",
		price: 0.89
	},
	{
		name: "Kiwi Basket",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/kiwi.jpeg",
		price: 5.00

	},
	{
		name: "Pineapple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/pineapple.jpeg",
		price: 4.00
	},
	{
		name: "Oatmeal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Pantry",
		src: "images/oatmeal.jpeg",
		price: 4.25
	},
	{
		name: "Kraft Dinner",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Pantry",
		src: "images/kraft.png",
		price: 1.25
	},
	{
		name: "Sphaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Pantry",
		src: "images/spaghetti.png",
		price: 2.25
	},
	{
		name: "Black Beans",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Pantry",
		src: "images/beans.png",
		price: 1.00
	},
	{
		name: "Tomato Sauce",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Pantry",
		src: "images/sauce.png",
		price: 3.00
	},
	{
		name: "Tomato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/tomato.jpeg",
		price: 3.00
	},
	{
		name: "Garlic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		none: true,
		category: "Produce",
		src: "images/garlic.jpeg",
		price: 1.00
	},
	{
		name: "Chocolate Chip Muffins",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		halal: true,
		dairyFree: false,
		none: true,
		category: "Bakery",
		src: "images/chocolatemuffins.png",
		price: 7.00
	},
	{
		name: "Rice",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		category: "Pantry",
		src: "images/rice.jpeg",
		price: 10.00
	},
	{
		name: "Tortilla Shells",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		halal: true,
		dairyFree: true,
		category: "Pantry",
		src: "images/tortilla.jpeg",
		price: 5.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Halal") && (prods[i].halal == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "DairyFree") && (prods[i].dairyFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "None") && (prods[i].none == true)){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}