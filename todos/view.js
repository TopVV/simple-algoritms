if (localStorage.length) {
    todoListArr = getLocalStorage('localTodoListArr');
    writeTodoList(todoListArr);
}

function writeTodoList(arr) {
    var list = document.querySelector(".todo-list");
    list.innerHTML = '';
    for (var i = 0; i < arr.length; i++) {
        var toggleHTML = arr[i]['toggle'] ? ('fa-check-circle') : ('fa-circle');
        var todoItemTemplate = `
        <li class="todo-list__item">
                <i class="todo-list__toggle far ${toggleHTML}"></i>
                <i class="todo-list__delete fas fa-times"></i>
            <div class="todo-text"">${arr[i]['text']}</div>
        </li>`;
        list.innerHTML += todoItemTemplate;
    };
    toggleTodoEventListn();
    deleteTodoEventListn();
    toLocalStorage('localTodoListArr', todoListArr);
}