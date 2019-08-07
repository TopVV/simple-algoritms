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
    getCheckedUncheckedInArrs();

    if (!uncheckedArr.length) {
        checkedArr.forEach(element => {
            element.toggle = false;
        });
    } else {
        uncheckedArr.forEach(element => {
            element.toggle = true;
        });
    };
    checkedArr.length = 0;
    uncheckedArr.length = 0;
    writeTodoList(todoListArr);
}

function getCheckedUncheckedInArrs() {
    for (let i = 0; i < todoListArr.length; i++) {
        var todoItem = todoListArr[i];
        if (todoItem.toggle) {
            checkedArr.push(todoItem);
        } else {
            uncheckedArr.push(todoItem);
        }
    }
}

function showAll() {
    getCheckedUncheckedInArrs();
    todoListArr.forEach(function(element){
        element['hidden'] = false
    });
    writeTodoList(todoListArr);
}

function showActive() {
    showAll();
    getCheckedUncheckedInArrs();
    checkedArr.forEach(function(element){
        element['hidden'] = true
    });
    writeTodoList(todoListArr);
}

function showCompleted() {
    showAll();
    getCheckedUncheckedInArrs();
    uncheckedArr.forEach(function(element){
        element['hidden'] = true
    });
    writeTodoList(todoListArr);
}

function addSelectedClass(buttonNumber) {
    for(var i = 0; i < showTodoBySection.length; i++){
        showTodoBySection[i] = false;
        document.querySelectorAll('.choseTodos')[i].classList.remove('selected');
    };
    showTodoBySection[buttonNumber] = true;
}

// function deleteAllTodo() {
//     todoListArr.length = 0;
//     writeTodoList(todoListArr);
// }