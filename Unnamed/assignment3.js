// TO DO LIST

// assigning values from HTML to JS
let taskInput = document.getElementById("new-task"); //add new task
let addButton = document.getElementsByTagName("button")[0]; //first button only
let incompleteTasksHolder = document.getElementById("incomplete-tasks") //hold entered tasks
let completedTasksHolder = document.getElementById("completed-tasks") //hold finished tasks

// applying values into functions to change HTML functionality

//add new task list item
let createNewTaskElement = function(taskString) { //creating all elements for list
  let listItem = document.createElement("li");
  //input checkbox
  let checkBox = document.createElement("input");
  //label
  let label = document.createElement("label");
  //delete.button
  deleteButton = document.createElement("button");

  label.innerText = taskString; //assigning classes and applying innertext
  checkBox.type="checkbox";

  deleteButton.innerText="Delete";
  deleteButton.className="delete";
  //and appending so list has all elements
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}

let addTask = function() {
  console.log("Add task...");
  let listItem = createNewTaskElement(taskInput.value);
  //appending listItem to incomplete list
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value="";
}

//delete task
let deleteTask = function() {
  console.log("Delete task...");

  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  //remove parent list item
  ul.removeChild(listItem);
}
//mark as completed
let taskCompleted = function() {
  console.log("Completed task...");
  //append task list item to completed tasks list
  let listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}
let taskIncomplete = function() {
  console.log("incomplete task...");
  //mark as incomplete
    //when checkbox is unchecked
      //append to task list
  let listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}
let ajaxRequest = function() {
  console.log("AJAX Request");
}


//putting all the functions together

//set click handler to addtask function

addButton.onclick = addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select listItems children
  let checkBox = taskListItem.querySelector("input[type=checkbox]");
  let deleteButton = taskListItem.querySelector("button.delete");

  //bind deletetask....
  deleteButton.onclick = deleteTask;
  //bind completed........
  checkBox.onchange = checkBoxEventHandler;
}


//cycle over incompleteTasksHolder ul list items
  //for each list item
for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list items children (completed)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list items children (incompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
