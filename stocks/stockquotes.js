
// In order to get the quotes you can call the getStockQuote function as shown below:

// getStockQuote(pass in the symbol of the stock)

// available symbols are below:
// APLE
// AMAZ
// ALBAB
// GOOG
// FB

let quotes = {
  "APLE":{name : "Apple", price : 0},
  "AMAZ":{name : "Amazon", price :0},
  "ALBAB":{name : "Ali Baba", price :0},
  "GOOG":{name : "Google", price :0},
  "FB":{name : "Facebook", price :0}
}

function getStockQuote(symbol) {

  let stock = quotes[symbol]
  stock.price = getRandomInt(100,500)
  return quotes[symbol]
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function allStocks(){
  let bullshit1 = getStockQuote("APLE")
  let bullshit2 = getStockQuote("AMAZ")
  let bullshit3 = getStockQuote("ALBAB")
  let bullshit4 = getStockQuote("GOOG")
  let bullshit5 = getStockQuote("FB")
  myText.innerHTML =
  `${bullshit1.name} $${bullshit1.price}
<br>${bullshit2.name} $${bullshit2.price}
<br>${bullshit3.name} $${bullshit3.price}
<br>${bullshit4.name} $${bullshit4.price}
<br>${bullshit5.name} $${bullshit5.price}`}

function loaded(){
  window.setInterval(function(){
    allStocks()
  },1000)
}

window.onload=loaded()




let symbol = document.getElementById("userInput").value;
// let checkStock = document.getElementById("checkStock")
let btnCheck = document.getElementById("btnCheck")

// function name(callback)
// name(newfunction)

function myFunction() {
  var x = document.getElementById("userInput").value;
  let bullshit = getStockQuote(x)
  console.log(bullshit.name, bullshit.price)
  document.getElementById("myText").innerHTML = `${bullshit.name}, $${bullshit.price}`;
}
function clicked() {
  window.setInterval(function(){
    myFunction()
  }, 1000)
}
// btnCheck.addEventListener("click",clicked(something));


// document.getElementById("allBtn").addEventListener("click", daddylonglegs);


function yes() {
  console.log("did it")
}
function hi() {
  window.setTimeout(function(){
    yes()
  }, 1000)
}
hi()
