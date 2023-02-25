let todoList;
if (localStorage.getItem("todoList")) {
	todoList = JSON.parse(localStorage.getItem("todoList"));
} else {
	todoList = [];
}

// function addTodo() {
// 	let todo = document.getElementById("todoInput").value;
// 	todoList.push(todo);
// 	document.getElementById("todoInput").value = "";
// 	localStorage.setItem("todoList", JSON.stringify(todoList));
// 	displayTodos();
// }

function addTodo() {
	let todo = document.getElementById("todoInput").value.trim();
	if (todo !== "") {
		todoList.push(todo);
		document.getElementById("todoInput").value = "";
		localStorage.setItem("todoList", JSON.stringify(todoList));
		displayTodos();
	}
}

function removeTodo(index) {
	todoList.splice(index, 1);
	localStorage.setItem("todoList", JSON.stringify(todoList));
	displayTodos();
}

function displayTodos() {
	let displayTodos = document.getElementById("displayTodos");
	displayTodos.innerHTML = "";
	for (let i = 0; i < todoList.length; i++) {
		let listItem = document.createElement("li");
		listItem.innerHTML = todoList[i];
		let button = document.createElement("button");
		button.classList.add("removeBtn");
		button.innerHTML = "Remove";
		button.onclick = function () {
			removeTodo(i);
		};
		listItem.appendChild(button);
		displayTodos.appendChild(listItem);
	}
}

displayTodos();
