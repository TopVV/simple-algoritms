let form = document.querySelector('form');
let todoCounter = 0; //можно написать функцию, чтобы искало следущий свободный

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newTodo = document.getElementById('todoInput').value;
    console.log(newTodo);
    addNewTodo(newTodo);
    document.getElementById('todoInput').value = '';
    addClickListner();
});



function addNewTodo(todoText){
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

function check(number){
    document.getElementById('text'+number).onclick=function(){
        style.textDecoration = "line-through"
    }
};


function addClickListner(){
    let arr = document.getElementsByClassName('todo-list__toggle');
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", check(i));
     }
}

console.log(document.getElementsByClassName('todo-list__toggle'));

//.addEventListener("click", check);