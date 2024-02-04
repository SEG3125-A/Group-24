
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
        var productAisle = getProductAisle(productName); // Assuming getProductAisle(productName) returns the aisle for a given product
        if (!productsByAisle[productAisle]) {
            productsByAisle[productAisle] = [];
        }
        productsByAisle[productAisle].push(productName);
    });

    // Iterate over aisles and display products
    for (var aisle in productsByAisle) {
        if (productsByAisle.hasOwnProperty(aisle)) {
            // Create a heading for the aisle
            var aisleHeader = document.createElement("h3");
            aisleHeader.textContent = "Aisle: " + aisle;
            s2.appendChild(aisleHeader);

            // Iterate over products in the current aisle
            productsByAisle[aisle].forEach(function(productName) {
                // Find the product object by its name
                var product = products.find(function(item) {
                    return item.name === productName;
                });

                // Create a container for each product
                var productContainer = document.createElement("div");
                productContainer.classList.add("product-container");

                // Create a checkbox for the product
                var productCheckbox = document.createElement("input");
                productCheckbox.type = "checkbox";
                productCheckbox.name = "selectedProduct";
                productCheckbox.value = productName;
                productCheckbox.classList.add("product-checkbox");

                // Create an image element
                var productImage = document.createElement("img");
                productImage.src = product.src; // Set the image source
                productImage.alt = productName; // Set alt text for accessibility
                productImage.classList.add("product-image");

                // Create a label for the product name
                var productNameLabel = document.createElement("label");
                productNameLabel.textContent = productName;

                // Append the checkbox, image, and label to the product container
                productContainer.appendChild(productCheckbox);
                productContainer.appendChild(productImage);
                productContainer.appendChild(productNameLabel);

                // Append the product container to the products tab content
                s2.appendChild(productContainer);
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
    var ele = document.getElementsByName("selectedProduct");
    var chosenProducts = [];
    
    // Find the displayCart element
    var displayCart = document.getElementById('displayCart'); 
    
    // Clear previous content of displayCart
    displayCart.innerHTML = "";

    // Create a new unordered list element to hold the selected items
    var ul = document.createElement("ul");

    // Loop through all checkboxes to find selected items
    for (var i = 0; i < ele.length; i++) { 
        if (ele[i].checked) {
            // Create a new list item element for each selected product
            var li = document.createElement("li");
            li.textContent = ele[i].value; // Set the text content of the list item to the product name
            ul.appendChild(li); // Append the list item to the unordered list
            chosenProducts.push(ele[i].value); // Add the selected product to the chosenProducts array
        }
    }

    // Append the unordered list of selected items to the displayCart element
    displayCart.appendChild(ul);

    // Calculate and display the total price of the selected items
    var totalPriceParagraph = document.createElement("p");
    totalPriceParagraph.textContent = "Total Price is $ " + getTotalPrice(chosenProducts);
    displayCart.appendChild(totalPriceParagraph);

    // Thank you message
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for shopping at Walzies! Please come again soon!";
    displayCart.appendChild(thankYouMessage);
}

