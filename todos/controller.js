document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let TodoText = document.getElementById('todoInput').value;
    document.getElementById('todoInput').value = "";
    if (TodoText) {
        todoListArr.push(new newTodo(TodoText));
        writeTodoList(todoListArr);
    }
});

function toggleChange(todoNumber) {
    todoListArr[todoNumber]['toggle'] = todoListArr[todoNumber]['toggle'] ? false : true;
    writeTodoList(todoListArr);
}

function deleteTodo(todoNumber) {
    todoListArr.splice(todoNumber, 1);
    writeTodoList(todoListArr);
}

// function toggleAll() {
//     let checkedArr = [];
//     let uncheckedArr = [];
//     for (let i = 0; i < todoListArr.length; i++) {
//         todoListArr[i]['toggle'] ? checkedArr.push(todoListArr[i]) : uncheckedArr.push(todoListArr[i]);
//     };
//     if (!(uncheckedArr.length)) {
//         checkedArr.forEach(element => {
//             element['toggle'] = false
//         })
//     } else {
//         uncheckedArr.forEach(element => {
//             element['toggle'] = true
//         })
//     }
// }


// function deleteAllTodo() {
//     todoListArr.length = 0;
//     writeTodoList(todoListArr);
// }