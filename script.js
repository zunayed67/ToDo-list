document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", handleAddTodo);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleAddTodo();
  });

  function handleAddTodo() {
    const todoText = input.value.trim();
    if (!todoText) return;

    const li = createTodoElement(todoText);
    todoList.appendChild(li);

    input.value = "";
    input.focus();
  }

  function createTodoElement(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    li.appendChild(deleteBtn);
    return li;
  }

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });
});
