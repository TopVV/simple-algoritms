let todoListArr = [];

class NewTodo {
    constructor(text, toggle = false) {
        this.text = text;
        this.toggle = toggle;
    }
}

function toLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
