let todoListArr = [];
let todoSection = [];
let checkedArr = [];
let uncheckedArr = [];
let showTodoBySection = [true, false, false];

class NewTodo {
    constructor(text, toggle = false, hidden = false) {
        this.text = text;
        this.toggle = toggle;
        this.hidden = hidden;
    }
}

function toLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
