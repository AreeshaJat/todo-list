class createTodo {
    constructor(title, description, dueDate, priority, checklist, project, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.project = project;
        this.completed = completed;
    }
}

const todoList = JSON.parse(localStorage.getItem('todos')) || [];

function addTodoToList(title, description, dueDate, priority, checklist, projectName) {
    const todoItem = new createTodo(title, description, dueDate, priority, checklist, projectName);
    todoList.push(todoItem);
    saveTodos();
}

//Retrieves the current list of todo items.
function getTodos () {
    return todoList;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList))
}

export { todoList, createTodo, addTodoToList, getTodos, saveTodos};