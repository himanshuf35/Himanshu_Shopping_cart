console.log("this is working:")
var Fruits = [{
        name: "Mango",
        MRP: 25,
        category: "Fruit"
    },
    {
        name: "Papaya",
        MRP: 60,
        category: "Fruit"
    },
    {
        name: "Orange",
        MRP: 65,
        category: "Fruit"
    },
    {
        name: "Guava",
        MRP: 40,
        category: "Fruit,"
    },
    {
        name: "Banana",
        MRP: 50,
        category: "Fruit"
    },
    {
        name: "Apple",
        MRP: 200,
        category: "Fruit"
    },
    {
        name: "Pineapple",
        MRP: 150,
        category: "Fruit"
    },
    {
        name: "Lichi",
        MRP: 100,
        category: "Fruit"
    },
    {
        name: "Pomegranate",
        MRP: 250,
        category: "Fruit"
    },
];

var Vegetables = [{
        name: "carrot",
        MRP: 40,
        category: "Vegetable"
    },
    {
        name: "cabbage",
        MRP: 10,
        category: "Vegetable"
    },
    {
        name: "cauliflower",
        MRP: 25,
        category: "Vegetable"
    },
    {
        name: "cucumber",
        MRP: 30,
        category: "Vegetable"
    },
    {
        name: "garlic",
        MRP: 120,
        category: "Vegetable"
    },
    {
        name: "green peas",
        MRP: 60,
        category: "Vegetable"
    },
    {
        name: "potato",
        MRP: 22,
        category: "Vegetable"
    },
    {
        name: "radish",
        MRP: 15,
        category: "Vegetable"
    },
    {
        name: "tomato ",
        MRP: 20,
        category: "Vegetable"
    },
];

var Dairy_Product = [{
        name: "Ghee",
        MRP: 392,
        category: "Dairy"
    },
    {
        name: "Milk",
        MRP: 52,
        category: "Dairy"
    },
    {
        name: "Butter Milk",
        MRP: 15,
        category: "Dairy"
    },
    {
        name: "Panner",
        MRP: 200,
        category: "Dairy"
    },
    {
        name: "Ice Cream",
        MRP: 160,
        category: "Dairy"
    },
    {
        name: "Yogurt",
        MRP: 20,
        category: "Dairy"
    },
    {
        name: "Lassi",
        MRP: 20,
        category: "Dairy"
    },
    {
        name: "Cheese-Cubes",
        MRP: 110,
        category: "Dairy"
    },

];

var Biscuits = [{
        name: "Marie Gold",
        MRP: 90,
        category: "Biscuit"
    },
    {
        name: "bourbon",
        MRP: 56,
        category: "Biscuit"
    },
    {
        name: "Parle-G",
        MRP: 5,
        category: "Biscuit"
    },
    {
        name: "Monaco",
        MRP: 60,
        category: "Biscuit"
    },
    {
        name: "Good Day",
        MRP: 38,
        category: "Biscuit"
    },
    {
        name: "Hide&Seek",
        MRP: 58,
        category: "Biscuit"
    },
    {
        name: "Oreo",
        MRP: 87,
        category: "Biscuit"
    },
    {
        name: "50-50",
        MRP: 50,
        category: "Biscuit"
    },

];
var Products = [Fruits, Vegetables, Dairy_Product, Biscuits];
console.log(Products);
var search_table=[];
var cart_table=[];

function Search_Products() {
    let text_to_search = document.getElementById("search_text").value;
    search_table = [];
    if (text_to_search.length > 0) {

        let regex = new RegExp(text_to_search, "i");
        Products.forEach((categor) => {
            categor.forEach((product) => {
                if (regex.test(product.name)) {
                    console.log(product.name);
                    search_table.push(product);
                }
            });
        });
        if(search_table.length!=0)
        {
            
        let text_data = "<table> <tr> <th>Name</th> <th>MRP</th> <th>Category</th> <th>No. Of Items</th> </tr>";
        search_table.forEach((found_product) => {
            //let ID=found_product.name;
            text_data = text_data + "<tr> <td>" + found_product.name + "</td> <td> " + found_product.MRP + "</td> <td>" + found_product.category + "</td> <td>  <input type='number'min='0' max='8' id="+found_product.name+"> </td> </tr>";
        });
        text_data = text_data + "</table>";
        document.getElementById("dynamic").innerHTML = text_data;
    }
    else
    {
        document.getElementById("dynamic").innerHTML = "<p>cannot find anything<p>";
    }

    }
}


function reset() {
    search_table=[];
    document.getElementById("dynamic").innerHTML="";
    document.getElementById("search_text").value="";
    //console.log(search_table); 
}

function add_to_cart()
{
    console.log(search_table.length);
    if(search_table.length>0)
    {
        
        //let text_data="";
    search_table.forEach((item_to_add) => 
    {
        
        let num=document.getElementById(item_to_add.name).value;
        if(num>0)
        {
            cart_table.push({Name:item_to_add.name,Quantity:num,Category:item_to_add.category,MRP:item_to_add.MRP});    
        }
        console.log(num);
    });

    if(cart_table.length>=0)
    {
       
       
            let text_data = "<table> <tr> <th>Name</th> <th>Category</th> <th>MRP</th> <th>Quantity</th>  <th>Price</th></tr>";
            cart_table.forEach((cart_product) => {
            //total_amount=total_amount+price;
            //let ID=found_product.name;
            let price=(cart_product.MRP)*(cart_product.Quantity);
            text_data = text_data + "<tr> <td>" + cart_product.Name + "</td> <td> " + cart_product.Category + "</td> <td>" +cart_product.MRP+ "</td> <td>"+price+ "</td> </tr>";
            
            console.log(price);
        });
        text_data = text_data + "</table>";
        //console.log(total_amount);
        document.getElementById("Table").innerHTML=text_data;
       // 
        
    }
    //document.getElementById("Tbody").innerHTML = text_data;
    console.log(cart_table);
    }
    else
    {
         document.getElementById("contact").innerHTML="<p>Please search and select any items first</p>"
    }


}

function checkout()
{
    if(cart_table.length>=0)
    {
        let total_amount=0;
        
            //let text_data = "<table> <tr> <th>Name</th> <th>Category</th> <th>MRP</th> <th>Quantity</th>  <th>Price</th></tr>";
            cart_table.forEach((cart_product) => {
         let price=(cart_product.MRP)*(cart_product.Quantity);
            total_amount=total_amount+price;
            //let ID=found_product.name;
            
            console.log(price);
        });
       // text_data = text_data + "</table>";
        //console.log(total_amount);
        document.getElementById("static3").innerHTML="Total Amount="+total_amount+""
        
       // 
        
    }
    else
    {
        document.getElementById("column2").innerHTML="<p>Please search and select any items first</p>"
    }
   cart_table=[];
}
