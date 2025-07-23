document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // ✅ SAFER way to get the input:
    const taskInput = document.querySelector("#new-task-description").value;

    buildToDo(taskInput);
    event.target.reset();
  });

  function buildToDo(task) {
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.appendChild(newTask);
  }
});