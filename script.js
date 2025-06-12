function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task) {
    // Add the task to the list
    console.log("Task added:", task);
    taskInput.value = "";
  }
}
