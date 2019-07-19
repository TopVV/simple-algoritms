if (localStorage.length) {
    todoListArr = getLocalStorage('localTodoListArr');
    writeTodoList(todoListArr);
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let todoText = document.getElementById('todoInput').value;
    if (todoText) {
        document.getElementById('todoInput').value = "";
        todoListArr.push(new NewTodo(todoText));
        writeTodoList(todoListArr);
    }
});

function writeTodoList(arr) {
    var list = document.querySelector(".todo-list");
    list.innerHTML = '';

    for (var i = 0; i < arr.length; i++) {
        var toggleCssClass = arr[i]['toggle'] ? ('fa-check-circle') : ('fa-circle');
        var todoItemTemplate = `
        <li class="todo-list__item">
                <i class="todo-list__toggle far ${toggleCssClass}"></i>
                <i class="todo-list__delete fas fa-times"></i>
            <div class="todo-text"">${arr[i]['text']}</div>
        </li>`;
        list.innerHTML += todoItemTemplate;
    };

    addToggleTodoEventListener();
    addDeleteTodoEventListener();
    addToggleEveryTodoEventListener();

    toLocalStorage('localTodoListArr', todoListArr);
}

function addToggleTodoEventListener() {
    var toggleArr = Array.from(document.querySelectorAll(".todo-list__toggle"));

    toggleArr.forEach(element => {
        element.addEventListener('click', event => {
            toggleChange(toggleArr.indexOf(event.target));
        });
    });
}

function addDeleteTodoEventListener() {
    var deleteArr = Array.from(document.querySelectorAll(".todo-list__delete"));

    deleteArr.forEach(function (element) {
        element.addEventListener('click', event => {
            deleteTodo(deleteArr.indexOf(event.target));
        });
    });
}

function addToggleEveryTodoEventListener() {
    var toggleAllElement = document.getElementById('toggleAll');
    toggleAllElement.addEventListener('click', toggleAll);
}
