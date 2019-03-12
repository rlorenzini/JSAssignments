let getOrders = document.getElementById('getOrders')
let createOrders = document.getElementById('createOrders')
let clear = document.getElementById('clear')
let search = document.getElementById('search')
let deleteOrder = document.getElementById('deleteOrder')
let ordersURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let allOrders = []

getOrders.addEventListener('click', function(){
displayOrders.style.display = 'initial'
fetch(ordersURL)
.then(function(response) {
  return response.json()
}).then(function(orders) {
  return orders
}).then(function(xhr) {
  for (var key in xhr) {
      var obj = xhr[key];
      let order = {coffee: obj["coffee"], size: obj["size"], emailAddress: obj["emailAddress"], flavor: obj["flavor"], strength: obj["strength"]}
      allOrders.push(order)
      }
      let orders = allOrders.map(function(order) {
        return `<ul>Email: ${order.emailAddress}
                  <li>Type: ${order.coffee}</li>
                  <li>Size: ${order.size}</li>
                  <li>Flavor: ${order.flavor}</li>
                  <li>Strength: ${order.strength}</li>
                    </ul>`
      })
      displayOrders.innerHTML = orders.join('')
    })
})

createOrder.addEventListener('click', function(){
  console.log("create");
  displayOrders.style.display = 'none'
  let body = $("body")
  let div = $("<div>")
  div.attr('id',"orderForm")
  let emailAddress = $("<input>")
  emailAddress.attr('id','emailAddress')
  emailAddress.attr('placeholder',"email address")
  let coffee = $("<input>")
  coffee.attr('id','coffee')
  coffee.attr('placeholder',"coffee")
  let size = $("<input>")
  size.attr('id','size')
  size.attr('placeholder',"size")
  let flavor = $("<input>")
  flavor.attr('id','flavor')
  flavor.attr('placeholder',"flavor")
  let strength = $("<input>")
  strength.attr('id','strength')
  strength.attr('placeholder',"strength")
  let btnSubmit = $("<button>")
  btnSubmit.attr('id','submitOrder')
  btnSubmit.html("Submit")
  div.append(emailAddress)
  div.append(coffee)
  div.append(size)
  div.append(flavor)
  div.append(strength)
  div.append(btnSubmit)
  body.append(div)

  submitOrder.addEventListener('click', function(){
    let order = {coffee: document.getElementById('coffee').value, size: document.getElementById('size').value, emailAddress: document.getElementById('emailAddress').value, flavor: document.getElementById('flavor').value, strength: document.getElementById('strength').value}
    allOrders.push(order)
    orderForm.remove()
    displayOrders.style.display = 'initial'
    let orders = allOrders.map(function(order) {
      return `<ul>Email: ${order.emailAddress}
                <li>Type: ${order.coffee}</li>
                <li>Size: ${order.size}</li>
                <li>Flavor: ${order.flavor}</li>
                <li>Strength: ${order.strength}</li>
                  </ul>`
    })
    displayOrders.innerHTML = orders.join('')
  })
})

search.addEventListener('click', function(){
  let searchTerm = document.getElementById('searchTerm').value
  console.log(searchTerm);
  allOrders.map(function(order, i){
    if (order.emailAddress == searchTerm){
      console.log("Found it");
      console.log(i);
      swalAlert(allOrders[i])
    }
  })
  })

  deleteOrder.addEventListener('click', function(){
    let searchTerm = document.getElementById('searchTerm').value
    console.log(searchTerm);
    allOrders.map(function(order, i){
      if (order.emailAddress == searchTerm){
        console.log("Found it");
        console.log(i);
        delete allOrders[i]
      }
    })
    })

    function swalAlert(i) {
      swal({
        title: `${i.emailAddress}`,
        text: `Coffee: ${i.coffee}
              Size: ${i.size}
              Flavor: ${i.flavor}
              Strength: ${i.strength}`
      })
    }

clear.addEventListener('click', function(){
  location.reload()
})
