document.addEventListener("DOMContentLoaded", () => {
    var todoForm = document.getElementById("add-todo");
    var todoInput = todoForm.querySelector("input");
    var todoList = document.getElementById("todo-list");
  
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      var todoText = todoInput.value.trim();
      if (todoText === "") return;
  
      var li = document.createElement("li");
      
      var button = document.createElement("button");
      button.textContent = todoText;
      
      li.appendChild(button);
      todoList.appendChild(li);
  
      todoInput.value = "";
  
      button.addEventListener("click", () => {
        if (button.style.textDecoration === "line-through") {
          li.remove();
        } else {
          button.style.textDecoration = "line-through";
        }
      });
    });
  });
  