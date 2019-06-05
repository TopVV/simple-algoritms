let form = document.querySelector('form');
let todoCounter = 0; //можно написать функцию, чтобы искало следущий свободный

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newTodo = document.getElementById('todoInput').value;
    console.log(newTodo);

    // addNewTodo(newTodo);
    addNewTodo2(newTodo);

    document.getElementById('todoInput').value = '';
    addClickListner();
});

function addNewTodo(todoText) {
    let todoItem = document.createElement("li");
    let todoToggle = document.createElement("div");
    let todoDelete = document.createElement("div");
    let todoInner = document.createElement("div");
    let todoCircle = document.createElement("i");
    let todoXSign = document.createElement("i");
    todoItem.className = 'todo-list__item';
    todoToggle.className = 'todo-list__toggle';
    todoDelete.className = 'todo-list__delete';
    todoInner.className = 'todo-text';
    todoCircle.className = 'far fa-circle';
    todoXSign.className = 'fas fa-times';
    todoItem.id = 'item' + todoCounter;
    todoToggle.id = 'toggle' + todoCounter;
    todoDelete.id = 'delete' + todoCounter;
    todoInner.id = 'text' + todoCounter;
    todoInner.innerHTML = todoText;
    todoItem.appendChild(todoToggle);
    todoItem.appendChild(todoDelete);
    todoToggle.appendChild(todoCircle);
    todoDelete.appendChild(todoXSign);
    todoItem.appendChild(todoInner);
    document.querySelector(".todo-list").appendChild(todoItem);
    todoCounter++;
}

function addNewTodo2(todoText) {
    var todoItemTemplate = `
        <li class="todo-list__item" id="item${todoCounter}">
            <div class="todo-list__toggle" id="toggle${todoCounter}">
                <i class="far fa-circle"></i>
            </div>
            <div class="todo-list__delete" id="delete${todoCounter}">
                <i class="fas fa-times"></i>
            </div>
            <div class="todo-text" id="text${todoCounter}">${todoText}</div>
        </li>`;
    
    var todoList = document.querySelector(".todo-list");
    todoList.innerHTML += todoItemTemplate;

    todoCounter++;
}

function addClickListner() {
    let todoItemToggleList = document.getElementsByClassName('todo-list__toggle');
    for (let i = 0; i < todoItemToggleList.length; i++) {
        todoItemToggleList[i].addEventListener("click", check(i));
    }
}

function check(number) {
    return () => {
        console.log('click', number);
        document.getElementById('text' + number).style.textDecoration = "line-through";
    };
}

console.log(document.getElementsByClassName('todo-list__toggle'));

//.addEventListener("click", check);