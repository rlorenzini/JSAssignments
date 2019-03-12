// create a close button
let myNodelist = document.getElementsByTagName("LI"); //all LI gain these properties
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN"); //input == span
  let txt = document.createTextNode("\u00D7") //u00D7 = X mark
  span.className = "close";
  span.appendChild(txt); //add X to items
  myNodelist[i].appendChild(span);
}
//close on a close button to hide current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) { //check all 'close' classes (X marks)
  close[i].onclick = function() { //whichever one is clicked...
    let div = this.parentElement;
    div.style.display = "none"; //remove parent element (ul li)
  }
}
//add checked symbol
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) { //when clicked, run function
  if (ev.target.tagName === 'LI') { //if what you click is an li inside a ul...
    ev.target.classList.toggle('checked'); //add check mark
  }
}, false); //otherwise don't add check mark




//how to move from myUL to doneUL when clicked?



// create new list item when clicking add button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t); //list appends new text node array with the input values
  if (inputValue === '') {
    alert("You must enter something."); //if not input, error message
  } else {
    document.getElementById("myUL").appendChild(li); //otherwise append under myUL
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN"); //span == add button
  let txt = document.createTextNode("\u00D7"); //txt == X mark
  span.className = "close"; //span == close
  span.appendChild(txt); //insert X into span
  li.appendChild(span); //add span into myUL when new input is added

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() { //be able to close new inputed data
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
