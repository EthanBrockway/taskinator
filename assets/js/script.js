var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function to add task to list
var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "this is a new task";
  tasksToDoEl.appendChild(listItemEl);
};
//button for adding task
buttonEl.addEventListener("click", createTaskHandler);
