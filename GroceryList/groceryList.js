let storeInput = document.getElementById("storeInput").value
let addStore = document.getElementById("addStore")
let database = firebase.database()
let storesUL = document.getElementById("storesUL")
let signInBtn = document.getElementById("signInBtn")
let signUpBtn = document.getElementById("signUpBtn")
let allUsers = []
let allStores = []
let allItems = []
let storesRef = database.ref("stores")
class User {
  constructor(email,password){
    this.email = email
    this.password = password
  }
}
class Store {
  constructor(key,store,items){
    this.key = key
    this.store = store
    this.items = items
  }
}
database.ref("users")

signInBtn.addEventListener('click', function(){
  toggleSignIn()
})

let actionCodeSettings = {
  url: 'grocerylist-48d53.firebaseapp.com',
  handleCodeInApp: true,
  dynamicLinkDomain: 'grocerylist-48d53.firebaseapp.com'
};

function toggleSignIn() {
  if(firebase.auth().currentUser) {
    firebase.auth().signOut();
  }else{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
  }
  firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
    let errorCode = error.code;
    let errorMessage = error.message;
    if(errorCode === 'auth/wrong-password'){
      alert('Wrong password.');
    }else{
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('signInBtn').disabled = false;
  });
}
document.getElementById('signInBtn').disabled = true;
}

function handleSignUp() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}



database.ref("stores")
.on("child_added",function(snapshot){
  let storeName = new Store(snapshot.key,snapshot.val().store, snapshot.val().items)
  allStores.push(storeName)
  console.log(allStores)
  displayStores()
})
database.ref("stores")
.on("child_removed",function(snapshot){
  allStores = allStores.filter((storeName)=>{
    return storeName.key != snapshot.key
  })
  displayStores()
})

addStore.addEventListener('click',function(){
  let storeInput = document.getElementById("storeInput").value
  let storeRef = storesRef.push({
    store: storeInput,
    items: null,
  })
  displayStores()
})
//viewStore('${x.store}${x.items}') once you have items stored 
function displayStores(){
  let storesLI = allStores.map((storeName)=>{
    return `<li>${storeName.store}
    <button id="viewBtn" onclick="viewStore('${storeName.store}')">View</button>
    <button id="addItemBtn">Add Items</button>
    <button onclick="deleteStore('${storeName.key}')">Delete</button></li>`
  })
  storesUL.innerHTML = storesLI.join('')
}
function deleteStore(key){
  database.ref("stores").child(key).remove()
}
function viewStore(storename){
  console.log(storename)
  swal({ title: `${storename}`,
    //title: add items here once you have a class for items and stores in database
  })
  }



window.onload = displayStores()
