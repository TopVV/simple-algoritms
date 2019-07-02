let form = document.querySelector('form');
let todoCounter = 0;
document.getElementById('toggleAll').addEventListener("click", toggleAllTodo());

(function (){
	if(localStorage.length > 0) {
	document.querySelector(".todo-list").innerHTML = JSON.parse(localStorage.getItem('allTodos'));
	todoCounter = getNumber(document.getElementsByClassName("todo-list__item")[document.getElementsByClassName("todo-list__item").length-1]);
	addClickListener();
}
})();

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let newTodo = document.getElementById('todoInput').value;

	if (newTodo === "") {
		return;
	}

	addNewTodo(newTodo);

	document.getElementById('todoInput').value = '';
	addClickListener();
});


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
	localStorage.setItem('todo' + todoCounter, todoText)

	saveTodos();
	todoCounter++;
}

function todoClick(number) {
	return () => {
		if (checkedClassContains('toggle' + number)) {
			toUncheck(number)
		} else {
			toCheck(number)
		};
		saveTodos();
	};
}

function deleteTodo(number) {
	return () => {
		document.getElementById('item' + number).remove();
		saveTodos();
	}
}

function toggleAllTodo() {
	return () => {
		let allTodosToggle = document.getElementsByClassName('todo-list__toggle');
		let checkedTodoIds = [];
		let uncheckedTodoIds = [];
		for (let i = 0; i < allTodosToggle.length; i++) {
			if (allTodosToggle[i].classList.contains('checked')) {
				checkedTodoIds.push(getNumber(allTodosToggle[i]))
			} else {
				uncheckedTodoIds.push(getNumber(allTodosToggle[i]))
			}
		};
		if (checkedTodoIds.length === allTodosToggle.length) {
			checkedTodoIds.forEach(function (element) {
				toUncheck(element);
			});
		} else {
			uncheckedTodoIds.forEach(function (element) {
				toCheck(element);
			});
		};
		saveTodos();
	}
}

function addClickListener() {
	let todoItemToggleList = document.getElementsByClassName('todo-list__toggle');
	let todoItemDeleteList = document.getElementsByClassName('todo-list__delete');
	for (let i = 0; i < todoItemToggleList.length; i++) {
		todoItemToggleList[i].addEventListener("click", todoClick(getNumber(todoItemToggleList[i])));
		todoItemDeleteList[i].addEventListener("click", deleteTodo(getNumber(todoItemDeleteList[i])))
	}
}

function toCheck(n) {
	document.getElementById('text' + n).style.textDecoration = "line-through";
	modifyToggle('far fa-check-circle', n);
	document.getElementById('toggle' + n).classList.add('checked');
}

function toUncheck(n) {
	document.getElementById('text' + n).removeAttribute("style");
	modifyToggle("far fa-circle", n);
	document.getElementById('toggle' + n).classList.remove('checked');
}

function saveTodos(){
	localStorage.clear();
	localStorage.setItem('allTodos', JSON.stringify(document.querySelector(".todo-list").innerHTML))
}

function modifyToggle(className, n) {
	document.getElementById('toggle' + n).innerHTML = '';
	let todoModified = document.createElement("i");
	todoModified.className = className;
	document.getElementById('toggle' + n).appendChild(todoModified);
}

function checkedClassContains(itemId) {
	return document.getElementById(itemId).classList.contains('checked')
}

function getNumber(arrayElement) {
	if(arrayElement != undefined){
	return +(arrayElement.id.match(/\d+/)[0])
}
}