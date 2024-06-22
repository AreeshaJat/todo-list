class createTodo {
    constructor(title, description, dueDate, priority, checklist, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.project = project;
    }
}

const todoList = [];

function addTodoToList(title, description, dueDate, priority, checklist, projectName) {
    const todoItem = new createTodo(title, description, dueDate, priority, checklist, projectName);
    todoList.push(todoItem);
}

//Retrieves the current list of todo items.
function getTodos () {
    return todoList;
}

export { todoList, createTodo, addTodoToList, getTodos};