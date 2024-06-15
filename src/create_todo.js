class createTodo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
}

const todoList = [];

function addTodoToList(title, description, dueDate, priority, checklist) {
    const todoItem = new createTodo(title, description, dueDate, priority, checklist);
    todoList.push(todoItem);
}

//Retrieves the current list of todo items.
function getTodos () {
    return todoList;
}

export {createTodo, addTodoToList, getTodos};