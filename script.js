var cartItems=[];
var isTotalHidden = true;

var eggs = {
  name: "Organic Free Range Eggs",
  price: 10
}
var eggsNumber;

var eggsPrice;

var bagels = {
  name: "ThomasBagel",
  price: 6
}

var bagelsNumber;

var bagelsPrice;


var broccoli = {
  name: "Organic Broccoli" ,
  price: 4
}

var broccoliNumber;

var broccoliPrice;


var oysterSauce = {
  name: "Panda Brand Oyster Sauce",
  price: 5
}

var oysterSauceNumber;

var oysterSaucePrice;


var salmon = {
  name: "Smoked Salmon",
  price: 8
}

var salmonNumber;

var salmonPrice;


var creamCheese = {
  name: "Cream Cheese",
  price: 3
}

var creamCheeseNumber;

var creamCheesePrice;

document.querySelector('#button1').addEventListener('click', addEggs);
document.querySelector('#button2').addEventListener('click', addBagels);
document.querySelector('#button3').addEventListener('click', addBroccoli);
document.querySelector('#button4').addEventListener('click', addOysterSauce);
document.querySelector('#button5').addEventListener('click', addSalmon);
document.querySelector('#button6').addEventListener('click', addCreamCheese);

function addEggs() {
  		cartItems.push();
  		eggsNumber = cartItems.length;
  		document.getElementById("item-counter").innerHTML = eggsNumber;
  		return eggsNumber;
}

function addBagels() {
	cartItems.push();
  	bagelsNumber = cartItems.length;
  	document.getElementById("item-counter").innerHTML = bagelsNumber;
  	return bagelsNumber;
}

function addBroccoli() {
  	cartItems.push();
  	broccoliNumber = cartItems.length;
  	document.getElementById("item-counter").innerHTML = broccoliNumber;
  	return broccoliNumber;
}

function addOysterSauce() {
  	cartItems.push();
  	oysterSauceNumber = cartItems.length;
  	document.getElementById("item-counter").innerHTML = oysterSauceNumber;
  	return oysterSauceNumber;
}

function addSalmon() {
  	cartItems.push();
  	salmonNumber = cartItems.length;
  	document.getElementById("item-counter").innerHTML = salmonNumber;
	return salmonNumber;
}

function addCreamCheese() {
  	cartItems.push();
  	creamCheeseNumber = cartItems.length;
  	document.getElementById("item-counter").innerHTML = creamCheeseNumber;
  	return creamCheeseNumber;
}

for (i=0; i <= eggsNumber; i++) {
	let eggsPriceTotal = eggsPrice * i; 
}

for (i=0; i <= bagelsNumber; i++) {
	let bagelsPriceTotal = bagelsPrice * i; 
}

for (i=0; i <= broccoliNumber; i++) {
	let broccoliPriceTotal = broccoliPrice * i; 
}

for (i=0; i <= oysterSauceNumber; i++) {
	let oysterSaucePriceTotal = oysterSaucePrice * i; 
}

for (i=0; i <= salmonNumber; i++) {
	let salmonPriceTotal = salmonPrice * i; 
}

for (i=0; i <= creamCheeseNumber; i++) {
	let creamCheesePriceTotal = creamCheesePrice * i; 
}


let totalPrice = eggsPriceTotal + bagelPrice + broccoliPrice + etc etc;


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

