// Function to add a new task
function addTodo() {
    var input = document.getElementById("todo-input");
    var text = input.value.trim();

    if (text !== "") {
      var li = document.createElement("li");
      li.textContent = text;
      li.onclick = toggleTodo;

      var ul = document.getElementById("todo-list");
      ul.appendChild(li);

      input.value = "";
    }
  }

  // Function to mark a task as completed
  function toggleTodo() {
    this.classList.toggle("completed");
  }