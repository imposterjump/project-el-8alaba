class product {

    constructor(name, categ, description, price, image, sales = 0) {
        this.image = image;
        this.name = name;
        this.categ = categ;
        this.description = description;
        this.price = price;
        this.sales = sales;
    }
}



let j = new product("barcelona t-shirt", "tops", "pepsi can betetshereb ya m3alaem te3melak dema8 tarsh ", 10, "C:\web project files\pepsi can.jpg");
let b = new product("real madrid t-shirt", "tops", " tshirt 3amy w 3am 3eyaly ", 1500, "‪C:\web project files\real madrid tshirt.jpg");
let products = [j, b];
let categories = ["tops", "bottoms", "accessories", "jackets"];




function search() {


    let x = document.getElementById("search_target").value;
    let result = x.trim();

    if (result === "") {
        generate_product(0);

    } else {
        generate_product(1);
    }


}




function generate_product(num) {




    var all_users = document.getElementById("productdisplay");

    while (all_users.firstChild) {
        console.log("i am deleting user");
        all_users.removeChild(all_users.firstChild);
    }

    if (num = 0) {
        console.log(" iam in if ");

        for (x = 0; x < products.length; x++) {


            var all_users = document.getElementById("productdisplay");
            const new_div = document.createElement("div");
            const div_text = document.createTextNode("product name: " + products[x].name + "  price: " + products[x].price + " sales:" + products[x].sales);
            new_div.appendChild(div_text);
            new_div.id = products[x].name;

            var buttonE2 = document.createElement("button");
            var buttonTextE2 = document.createElement("a");
            buttonE2.className = "buttons";
            buttonTextE2.innerText = " Delete ";
            buttonE2.appendChild(buttonTextE2);
            new_div.appendChild(buttonE2);


            var buttonEl = document.createElement("button");
            var buttonTextEl = document.createElement("a");
            buttonEl.className = "buttons";
            buttonTextEl.innerText = " Edit ";
            buttonEl.appendChild(buttonTextEl);
            new_div.appendChild(buttonEl);
            new_div.classList = "user_infos";

            all_users.appendChild(new_div);

        }

    } else {


        for (x = 0; x < products.length; x++) {
            let s = document.getElementById("search_target").value;
            let result = s.trim();
            console.log(" iam in else ");
            if ((products[x].name).includes(result)) {

                var all_users = document.getElementById("productdisplay");
                const new_div = document.createElement("div");
                const div_text = document.createTextNode("product name: " + products[x].name + "  price: " + products[x].price + " sales:" + products[x].sales);
                new_div.appendChild(div_text);

                var buttonE2 = document.createElement("button");
                var buttonTextE2 = document.createElement("a");
                buttonE2.className = "buttons";
                buttonTextE2.innerText = " Delete ";
                buttonE2.appendChild(buttonTextE2);
                new_div.appendChild(buttonE2);


                var buttonEl = document.createElement("button");
                var buttonTextEl = document.createElement("a");
                buttonEl.className = "buttons";
                buttonTextEl.innerText = " Edit ";
                buttonEl.appendChild(buttonTextEl);
                new_div.appendChild(buttonEl);


                new_div.classList = "user_infos";


                all_users.appendChild(new_div);
            }

        }
    }

    


}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }