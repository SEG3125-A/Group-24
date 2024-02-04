
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function introClient(){
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	return firstName + " " + lastName;

}

	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

    // Create an object to store products by aisle
    var productsByAisle = {};

    // Group products by aisle
    optionArray.forEach(function(productName) {
        var productAisle = getProductAisle(productName); // Assume a function getProductAisle(productName) returns the aisle for a given product
        if (!productsByAisle[productAisle]) {
            productsByAisle[productAisle] = [];
        }
        productsByAisle[productAisle].push(productName);
    });

    // Iterate over aisles and display products
    for (var aisle in productsByAisle) {
        if (productsByAisle.hasOwnProperty(aisle)) {
            var aisleHeader = document.createElement("h3");
            aisleHeader.textContent = "Aisle: " + aisle;
            s2.appendChild(aisleHeader);

            productsByAisle[aisle].forEach(function(productName) {
                // create the checkbox and add in HTML DOM
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "product";
                checkbox.value = productName;
                s2.appendChild(checkbox);

                // create a label for the checkbox, and also add in HTML DOM
                var label = document.createElement('label')
                label.htmlFor = productName;
                label.appendChild(document.createTextNode(productName));
                s2.appendChild(label);

                // create a breakline node and add in HTML DOM
                s2.appendChild(document.createElement("br"));
            });
        }
    }
}

// Function to determine the aisle of a product based on its category
function getProductAisle(productName) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            return products[i].category;
        }
    }
    return "Unknown";
}

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart'); 
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $ " + getTotalPrice(chosenProducts)));
	c.appendChild(para);
	c.appendChild(document.createTextNode(" Thank you for shopping at Walzies! Please come again soon!" ));
		
}
