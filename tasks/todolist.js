function createTodolist() {
  let main = document.getElementById("main");
  if (main) {
    document.body.removeChild(main);
  }
  const form = document.createElement("form");
  form.className = "align-middle form-control container-sm";
  form.id = "main";

  const titulo = document.createElement("legend");
  titulo.innerText = "To Do List: ";

  const itemDiv = document.createElement("div");
  itemDiv.className = "input-group";
  const itemInput = document.createElement("input");
  itemInput.type = "text";
  itemInput.id = "item";
  itemInput.className = "form-control w-75";
  itemInput.placeholder = "Digite uma tarefa";
  itemInput.required = true;

  const addInput = document.createElement("button");
  addInput.className = "btn btn-outline-primary";
  addInput.innerText = "Adicionar";
  addInput.onclick = () => {
    addItem();
  };

  const lista = document.createElement("ul");
  lista.id = "list";
  lista.className = "list-group";

  form.appendChild(titulo);
  itemDiv.appendChild(itemInput);
  itemDiv.appendChild(addInput);
  form.appendChild(itemDiv);
  form.appendChild(lista);

  return document.body.appendChild(form);
}

let todoList = [];

function addItem() {
  let newItem = document.getElementById("item").value;
  todoList.push(newItem);
  updateList();
  document.getElementById("item").value = "";
}

function updateList() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = todoList[i];

    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group float-end";
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-outline-danger";
    deleteButton.innerText = "Excluir";
    deleteButton.setAttribute("data-index", i);
    deleteButton.addEventListener("click", deleteItem);
    btnGroup.appendChild(deleteButton);
    li.appendChild(btnGroup);

    if (i > 0) {
      let upButton = document.createElement("button");
      upButton.className = "btn btn-outline-secondary";
      upButton.innerText = "Up ↑↑↑";
      upButton.setAttribute("data-index", i);
      upButton.addEventListener("click", moveItemUp);
      btnGroup.appendChild(upButton);
    }

    if (i < todoList.length - 1) {
      let baixoBtn = document.createElement("button");
      baixoBtn.className = "btn btn-outline-secondary";
      baixoBtn.innerText = "Down ↓↓↓";
      baixoBtn.setAttribute("data-index", i);
      baixoBtn.addEventListener("click", moveItemDown);
      btnGroup.appendChild(baixoBtn);
    }

    list.appendChild(li);
  }
}

function deleteItem() {
  let index = this.getAttribute("data-index");
  todoList.splice(index, 1);
  updateList();
}

function moveItemUp() {
  let index = parseInt(this.getAttribute("data-index"));
  let temp = todoList[index];
  todoList[index] = todoList[index - 1];
  todoList[index - 1] = temp;
  updateList();
}
function moveItemDown() {
  let index = parseInt(this.getAttribute("data-index"));
  let temp = todoList[index];
  todoList[index] = todoList[index + 1];
  todoList[index + 1] = temp;
  updateList();
}

let form = document.getElementById("todolist");
form.addEventListener("click", createTodolist);
