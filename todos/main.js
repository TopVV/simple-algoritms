let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newTodo = document.getElementById('todoInput').value;
    console.log(newTodo);
    addNewTodo(newTodo);
    document.getElementById('todoInput').value = '';
});


function addNewTodo(todoText){
    let todoItem = document.createElement("li");
    let todoToggle = document.createElement("div");
    let todoInner = document.createElement("div");
    let todoCircle = document.createElement("i");
    todoItem.className = 'todo-list__item';
    todoToggle.className = 'todo-list-toggle';
    todoInner.className = 'todo-text';
    todoCircle.className = 'far fa-circle';
    todoInner.innerHTML = todoText;
    todoItem.appendChild(todoToggle);
    todoToggle.appendChild(todoCircle);
    todoItem.appendChild(todoInner);
    document.querySelector(".todo-list").appendChild(todoItem);
    
}