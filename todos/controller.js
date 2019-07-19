function toggleChange(todoNumber) {
    var todoItem = todoListArr[todoNumber];
    todoItem.toggle = !todoItem.toggle;
    writeTodoList(todoListArr);
}

function deleteTodo(todoNumber) {
    todoListArr.splice(todoNumber, 1);
    writeTodoList(todoListArr);
}

function toggleAll() {
    let checkedArr = [];
    let uncheckedArr = [];

    for (let i = 0; i < todoListArr.length; i++) {
        var todoItem = todoListArr[i];
        if (todoItem.toggle) {
            checkedArr.push(todoItem);
        } else {
            uncheckedArr.push(todoItem)
        }
    }

    if (!uncheckedArr.length) {
        checkedArr.forEach(element => {
            element.toggle = false;
        });
    } else {
        uncheckedArr.forEach(element => {
            element.toggle = true;
        });
    }

    writeTodoList();
}

// function deleteAllTodo() {
//     todoListArr.length = 0;
//     writeTodoList(todoListArr);
// }