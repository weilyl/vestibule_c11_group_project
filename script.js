// declare empty arrays so we can enter items in and count

var cartItems=[];
var cartEggs=[];
var cartBagels=[];
var cartBroccoli=[];
var cartOysterSauce=[];
var cartSalmon=[];
var cartCreamCheese=[];
var isTotalHidden = true;

// declare objects for each grocery item, then associated variables

// EGGS
var eggs = {
  name: "Organic Free Range Eggs",
  price: 10
};
var eggsNumber;
var eggsPrice;
var eggsPriceTotal;

//BAGELS
var bagels = {
  name: "ThomasBagel",
  price: 6
};
var bagelsNumber;
var bagelsPrice;
var bagelsPriceTotal;

// BROCCOLI
var broccoli = {
  name: "Organic Broccoli" ,
  price: 4
};
var broccoliNumber;
var broccoliPrice;
var broccoliPriceTotal;

// OYSTER SAUCE
var oysterSauce = {
  name: "Panda Brand Oyster Sauce",
  price: 5
};
var oysterSauceNumber;
var oysterSaucePrice;
var oysterSaucePriceTotal;

// SALMON
var salmon = {
  name: "Smoked Salmon",
  price: 8
};
var salmonNumber;
var salmonPrice;
var salmonPriceTotal;

// CREAM CHEESE
var creamCheese = {
  name: "Cream Cheese",
  price: 3
};
var creamCheeseNumber;
var creamCheesePrice;
var creamCheesePriceTotal; 

// Declare variable to sum up prices

var totalPrice;

// Event Listeners for Buttons

document.getElementById('button1').addEventListener('click', addEggs);

document.getElementById('button2').addEventListener('click', addBagels);

document.getElementById('button3').addEventListener('click', addBroccoli);

document.getElementById('button4').addEventListener('click', addOysterSauce);

document.getElementById('button5').addEventListener('click', addSalmon);

document.getElementById('button6').addEventListener('click', addCreamCheese);

// Define function for adding EGGS to cart
function addEggs() {
  cartItems.push(eggs.name);
  cartEggs.push(eggs.name);
  // console.log(eggs.name);
  eggsNumber = cartEggs.length;
  // console.log(eggsNumber);
  for (i = 1; i <= cartEggs.length; i++) {
	   let eggsPriceTotal = eggs.price * i; 
     console.log(eggsPriceTotal);
  }; 
  var totalPrice = eggsPriceTotal + bagelsPriceTotal + broccoliPriceTotal + oysterSaucePriceTotal + salmonPriceTotal + creamCheesePriceTotal;
  if (totalPrice > 0) {
    document.getElementById("order-total").innerText = "Your Total is $" + totalPrice;
    console.log(totalPrice);
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
  return eggsNumber;
}

// Define function for adding BAGELS to cart
function addBagels() {
	cartItems.push(bagels.name);
  cartBagels.push(bagels.name);
  // console.log(bagels.name);
  bagelsNumber = cartBagels.length;
  // console.log(bagelsNumber);
  for (i = 1; i <= cartBagels.length; i++) {
	  let bagelsPriceTotal = bagels.price * i; 
    console.log(bagelsPriceTotal);
  }
  if (totalPrice > 0) {
    document.getElementById("order-total").innerHTML = totalPrice;
    console.log(totalPrice);
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
  return bagelsNumber;
}

// Define function for adding BROCCOLI to cart
function addBroccoli() {
  cartItems.push(broccoli.name);
  cartBroccoli.push(broccoli.name);
  // console.log(broccoli.name);
  broccoliNumber = cartBroccoli.length;
  // console.log(cartItems.length);
  for (i = 1; i <= cartBroccoli.length; i++) {
	  let broccoliPriceTotal = broccoli.price * i; 
    console.log(broccoliPriceTotal);
  }
  if (totalPrice > 0) {
    document.getElementById("order-total").innerHTML = totalPrice;
    console.log(totalPrice);   
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
  return broccoliNumber;
}

// Define function for adding OYSTER SAUCE to cart
function addOysterSauce() {
  cartItems.push(oysterSauce.name);
  cartOysterSauce.push(oysterSauce.name);
  // console.log(oysterSauce.name)
  oysterSauceNumber = cartOysterSauce.length;
  // console.log(cartItems.length);
  for (i = 1; i <= cartOysterSauce.length; i++) {
	  let oysterSaucePriceTotal = oysterSauce.price * i; 
    console.log(oysterSauce.price);
  }
  if (totalPrice > 0) {
    document.getElementById("order-total").innerHTML = totalPrice;
    console.log(totalPrice);
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
  return oysterSauceNumber;
}

// Define function for adding SALMON to cart
function addSalmon() {
  cartItems.push(salmon.name);
  cartSalmon.push(salmon.name);
  // console.log(salmon.name);
  salmonNumber = cartSalmon.length;
  // console.log(cartItems.length);
  for (i = 1; i <= cartSalmon.length; i++) {
	  let salmonPriceTotal = salmon.price * i;
    console.log(salmonPriceTotal);
  }
  if (totalPrice > 0) {
    document.getElementById("order-total").innerHTML = totalPrice;
    console.log(totalPrice);
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
	return salmonNumber;
}

// Define function for adding CREAM CHEESE to cart
function addCreamCheese() {
  cartItems.push(creamCheese.name);
  cartCreamCheese.push(creamCheese.name);
  // console.log(creamCheese.name)
  creamCheeseNumber = cartCreamCheese.length;
  // console.log(cartItems.length);
  for (i = 1; i <= cartCreamCheese.length; i++) {
    let creamCheesePriceTotal = creamCheese.price * i; 
    console.log(creamCheesePriceTotal);
  }
  if (totalPrice > 0) {
    document.getElementById("order-total").innerHTML = totalPrice;
    console.log(totalPrice);
  }
  if (cartItems.length > 0) {
    document.getElementById("item-counter").innerHTML = cartItems.length;
  }
  	return creamCheeseNumber;
}

// Define conditions to display item and price totals
/*
if (totalPrice > 0) {
  document.getElementById("order-total").innerHTML = totalPrice;
  console.log(totalPrice);
}

if (cartItems.length > 0) {
  document.getElementById("item-counter").innerHTML = cartItems.length;
  console.log(totalNumber);
}
*/

// Display cart

function clickCart () {
  isTotalHidden = !isTotalHidden;
  showTotal();
}


if (isTotalHidden === false) {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
 orderTotal.innerHTML += "Total: $" + total; 
}