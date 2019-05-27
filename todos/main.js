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
    todoItem.className = 'todo-list__item';
    todoItem.innerHTML = todoText;
    document.querySelector(".todo-list").appendChild(todoItem);
}