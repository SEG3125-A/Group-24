// a method to get data about products from the json file.
// add a sad path too to getData

async function getData(file) {
    let object = await fetch(file);
    let text = await object.text();
    let parsedText = JSON.parse(text);
    let items = parsedText.products;
    return items;
}

// criteria to sort
function comparePrice(a,b) {
    return (a.price - b.price);
}

const show_products = (items) => {
    let menu = document.getElementsByClassName("menu");
    menu[0].style.display = "block";
    let products = document.getElementsByClassName("products");
    products.innerHTML = "";
    construct_list_goods(items,products,0);
}

const construct_list_goods = (items,products,flag) => {

    // the general schema is the following; for each product:

    // <div class="item">
        //<div class="imageDiv">
        // <img>
        //</div>
        // <div class="product_info">
            // <h3 class="name">apple</h3>
            // <h3 class="price">1 dollar</h3>
            // <h3 class="type_diet">Halal</h3>
            // <h3 class="org">non organic</h3>
        // </div>
        // <input type="checkbox"></input>
        //<label></label>
    // </div>

    for (i = 0;i<items.length;i++) {
        let product = items[i]
        // create a div for each item
        var div = document.createElement("div");
        div.className = "item";
        products[0].appendChild(div);

        var divImage = document.createElement("div");
        divImage.className = "imageDiv";
        div.appendChild(divImage);

        var image = document.createElement("img");
        image.src = product.src;
        divImage.appendChild(image);

        var divInfo = document.createElement("div");
        divInfo.className = "infoDiv";
        div.appendChild(divInfo);

        var heading = document.createElement("h3");
        heading.className = "name";
        heading.innerHTML = product.name;
        divInfo.appendChild(heading);

        var heading = document.createElement("h3");
        heading.className = "price";
        heading.innerHTML = product.price;
        divInfo.appendChild(heading);

        var heading = document.createElement("h3");
        heading.className = "type_diet";
        let s = ""
        for (type in product.type) {
            s += product.type[type] + " "
        }
        heading.innerHTML = s;
        divInfo.appendChild(heading);
        var heading = document.createElement("h3");

        heading.className = "org";
        heading.innerHTML = product.type_of_farming;
        divInfo.appendChild(heading);

        // if flag == 1 then we add a checkbox to add to the cart

        if (flag) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = i;
            checkbox.value = product.name;
            checkbox.dataset.object = JSON.stringify(product);
            checkbox.name = "product";
            div.appendChild(checkbox);

            let label = document.createElement("label");
            label.htmlFor = i;
            label.appendChild(document.createTextNode("Add to cart"));
            div.appendChild(label);   
        }
    }

    if (flag) {
        let btn = document.createElement("button");
        btn.onclick = function() {add_to_cart()};
        btn.appendChild(document.createTextNode("Pay now"));
        products[0].appendChild(btn);
    }


}

async function main() {
    const items = await getData("./data.json");
    // lets sort the items array based on the price
    items.sort(comparePrice);

    show_products(items);
}

main();