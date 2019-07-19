function newTodo(text, toggle = false, destroy = false) {
    this.text = text;
    this.toggle = toggle
}

let todoListArr = [];

function toLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function toggleTodoEventListn() {
    var toggleArr = Array.from(document.querySelectorAll(".todo-list__toggle"));

    toggleArr.forEach(function(element) {
        element.addEventListener('click', event => {
            toggleChange(toggleArr.indexOf(event.target))
        })
    })

}

function deleteTodoEventListn() {
    var deleteArr = Array.from(document.querySelectorAll(".todo-list__delete"));

    deleteArr.forEach(function(element) {
        element.addEventListener('click', event => {
            deleteTodo(deleteArr.indexOf(event.target))
        })
    })

}

// function toggleEveryTodoEventListn() {
//     document.getElementById('toggleAll').addEventListener('click', () => toggleAll())
// }

// function AllEventListn() {
//     toggleTodoEventListn();
//     deleteTodoEventListn();
//     toggleEveryTodoEventListn();
// }