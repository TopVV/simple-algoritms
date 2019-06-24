let form = document.querySelector('form');
let todoCounter = 0; //можно написать функцию, чтобы искало следущий свободный

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newTodo = document.getElementById('todoInput').value;

    if (newTodo == 0) {
        return
    };

    addNewTodo(newTodo);


    document.getElementById('todoInput').value = '';
    addClickListner();
});

// --- OLD --- function addNewTodo(todoText) {
//     let todoItem = document.createElement("li");
//     let todoToggle = document.createElement("div");
//     let todoDelete = document.createElement("div");
//     let todoInner = document.createElement("div");
//     let todoCircle = document.createElement("i");
//     let todoXSign = document.createElement("i");
//     todoItem.className = 'todo-list__item';
//     todoToggle.className = 'todo-list__toggle';
//     todoDelete.className = 'todo-list__delete';
//     todoInner.className = 'todo-text';
//     todoCircle.className = 'far fa-circle';
//     todoXSign.className = 'fas fa-times';
//     todoItem.id = 'item' + todoCounter;
//     todoToggle.id = 'toggle' + todoCounter;
//     todoDelete.id = 'delete' + todoCounter;
//     todoInner.id = 'text' + todoCounter;
//     todoInner.innerHTML = todoText;
//     todoItem.appendChild(todoToggle);
//     todoItem.appendChild(todoDelete);
//     todoToggle.appendChild(todoCircle);
//     todoDelete.appendChild(todoXSign);
//     todoItem.appendChild(todoInner);
//     document.querySelector(".todo-list").appendChild(todoItem);
//     todoCounter++;
// }

function addNewTodo(todoText) {
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
};

function addClickListner() {
    let todoItemToggleList = document.getElementsByClassName('todo-list__toggle');
    let todoItemDeleteList = document.getElementsByClassName('todo-list__delete');
    for (let i = 0; i < todoItemToggleList.length; i++) {
        todoItemToggleList[i].addEventListener("click", checkTodo(+(todoItemToggleList[i].id.match(/\d+/)[0])));
        todoItemDeleteList[i].addEventListener("click", deleteTodo(+(todoItemDeleteList[i].id.match(/\d+/)[0])));
    }
};

function checkTodo(number) {
    return () => {
        function toCheck(n) {
            document.getElementById('text' + n).style.textDecoration = "line-through";
            modifyToggle('far fa-check-circle', n);
            document.getElementById('toggle' + n).classList.add('checked');
        };
        function toUncheck(n) {
            document.getElementById('text' + n).removeAttribute("style");
            modifyToggle("far fa-circle", n);
            document.getElementById('toggle' + n).classList.remove('checked');
        };
        function modifyToggle(className, n){
            document.getElementById('toggle' + n).innerHTML = '';
            let todoModified = document.createElement("i");
            todoModified.className = className;
            document.getElementById('toggle' + n).appendChild(todoModified);
        };

        if(document.getElementById('toggle' + number).classList.contains('checked')){
            toUncheck(number);
        } else {
            toCheck(number)
        };

    };
};

function deleteTodo(number){
    return () => {
        document.getElementById('item' + number).remove()
}
};


