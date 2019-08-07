if (localStorage.length) {
    todoListArr = getLocalStorage('localTodoListArr');
    showTodoBySection = getLocalStorage('showTodoBySectionArr');
    writeTodoList(todoListArr);
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let todoText = document.getElementById('todoInput').value;

    if (todoText.match(/\S/)) {
        document.getElementById('todoInput').value = "";
        todoListArr.push(new NewTodo(todoText));
        writeTodoList(todoListArr);
    }
});

///////////////////////////////////////////////////////////

function writeTodoList(arr) {
    console.log('writeTodoList()');

    var list = document.querySelector(".todo-list");
    list.innerHTML = '';

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]['hidden']) {
            continue;
        }

        var lineThrough = arr[i]['toggle'] ? 'style="text-decoration: line-through"' : '';
        var toggleCssClass = arr[i]['toggle'] ? ('fa-check-circle') : ('fa-circle');
        var todoItemTemplate = `
            <li class="todo-list__item">
                    <i class="todo-list__toggle far ${toggleCssClass}"></i>
                    <i class="todo-list__delete fas fa-times"></i>
                <div class="todo-text" ${lineThrough}>${arr[i]['text']}</div>
            </li>`;
        list.innerHTML += todoItemTemplate;
    };

    var todoItems = document.querySelectorAll('.choseTodos');
    for (var i = 0; i < showTodoBySection.length; i++) {
        if (showTodoBySection[i]) {
            todoItems[i].classList.add('selected');
        }
    }

    addAllEventListeners();

    // addToggleTodoEventListener();
    // addDeleteTodoEventListener();
    // addToggleEveryTodoEventListener();

    toLocalStorage('localTodoListArr', todoListArr);
    toLocalStorage('showTodoBySectionArr', showTodoBySection)
}

function addAllEventListeners() {
    console.log('addAllEventListeners()');

    var toggleArr = Array.from(document.querySelectorAll(".todo-list__toggle"));
    var deleteArr = Array.from(document.querySelectorAll(".todo-list__delete"));
    var toggleAllElement = document.getElementById('toggleAll');
    var allActiveCompletedButtons = document.querySelectorAll('.choseTodos');

    toggleArr.forEach(element => {
        element.addEventListener('click', event => {
            toggleChange(toggleArr.indexOf(event.target));
        });
    });

    deleteArr.forEach(function (element) {
        element.addEventListener('click', event => {
            deleteTodo(deleteArr.indexOf(event.target));
        });
    });

    toggleAllElement.removeEventListener('click', toggleArr);
    toggleAllElement.addEventListener('click', toggleAll);
    
    // unbind previous listener
    allActiveCompletedButtons[0].addEventListener('click', () => { showAll(); addSelectedClass(0) });
    allActiveCompletedButtons[1].addEventListener('click', () => { showActive(); addSelectedClass(1) });
    allActiveCompletedButtons[2].addEventListener('click', () => { showCompleted(); addSelectedClass(2) });
}

