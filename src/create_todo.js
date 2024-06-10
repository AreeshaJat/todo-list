const todo = [];
class createTodo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
}

function addTodoToList(title, description, dueDate, priority, checklist) {
    let todoList = new createTodo(title, description, dueDate, priority, checklist);
    todo.push(todoList);
}

function displayTodo() {
    var todoCard = document.querySelector('.content');

    //clear existing content
    todoCard.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        let todos = todo[i];

        var card = document.createElement("div");
        card.className = "card";

        var priority = document.createElement("div");
        priority.classList.add('priority');
        priority.textContent = todo.priority;
        card.appendChild(priority)

        var checklist = document.createElement("button");
        checklist.className = "checklist-toggle";
        checklist.textContent = todos.checklist ? "Yes" : "No";

        
    }
}

export {createTodo};