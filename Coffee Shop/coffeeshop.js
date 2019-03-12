// http://dc-coffeerun.herokuapp.com/api/coffeeorders/
let nameTextBox = document.getElementById("nameTextBox").value
const coffeeOrders = document.getElementById("coffeeOrders")
let createOrder = document.getElementById("createOrder")
let display = document.getElementById("display")
let allOrders = []
const url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

fetch(url)
.then(function(response){
  return response.json()
}).then(function(info){
  return info
}).then(function(xhr){
  for (var key in xhr) {
       var obj = xhr[key];
       let order = {coffee: obj["coffee"], size: obj["size"], emailAddress: obj["emailAddress"], flavor: obj["flavor"], strength: obj["strength"]}
       allOrders.push(order)
  }
})//.then(console.log(allOrders))
.then(function(order){
     let orders = allOrders.map(function(order) {
       return `<ul>Email: ${order.emailAddress}
                 <li>Type: ${order.coffee}</li>
                 <li>Size: ${order.size}</li>
                 <li>Flavor: ${order.flavor}</li>
                 <li>Strength: ${order.strength}</li>
                   </ul>`
     })
     coffeeOrders.innerHTML = orders.join('')
})


createOrder.addEventListener('click', function(){
  console.log("create")
  let fullList = document.getElementById("fullList")

})
