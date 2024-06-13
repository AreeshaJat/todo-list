const todo = [];
var modal = document.getElementById('myModal');
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

        var cardContents = document.createElement("div");
        cardContents.className = "cardContents";

        var priority = document.createElement("div");
        priority.classList.add('priority');
        priority.textContent = todos.priority;
        cardContents.appendChild(priority);

        var checklist = document.createElement("input");
        checklist.classList.add('checklist');
        checklist.type = 'checkbox';
        cardContents.appendChild(checklist);

        var description = document.createElement("p");
        description.classList.add('description');
        description.textContent = todos.description;
        cardContents.appendChild(description);

        var dueDate = document.createElement("p");
        dueDate.classList.add('dueDate');
        dueDate.textContent = todos.dueDate;
        cardContents.appendChild(dueDate);

        card.appendChild(cardContents);
        todoCard.appendChild(card);
    }
}

function submitInfo(event, errorMessage) {
    event.preventDefault();

    const todo_project = document.querySelector('input[name=project]').value;
    var project = document.createElement('input');
    project.type = 'text';
    project.name = 'project';
    project.placeholder = 'Project';
    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;

    // Validate the title input
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority || !todo_project) {
        errorMessage.textContent = 'Field is required.';
        return;
    } else {
        errorMessage.textContent = '';
    }

    addTodoToList(todo_title, todo_description, todo_dueDate, todo_priority, false);

    //clear input fields
    document.querySelector('input[name="project"]').value = "";
    document.querySelector('input[name="taskName"]').value = "";
    document.querySelector('input[name="description"]').value = "";
    document.querySelector('input[name="inputDate"]').value = "";
    document.querySelector('select[name="priority"]').value = "";

    closeModal();
    displayTodo();

}

function openModal () {
    modal.style.display = "block";
}

function closeModal () {
    modal.style.display = "none";
}

function input() {
    //var modal = document.getElementById('myModal');

    modal.innerHTML = "";

    // Ensure the modal content div exists and is empty
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = ""; 

    let form = document.createElement("form");

    let modalTitle = document.createElement("p");
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Fill out the Information Below';

    var errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';

    var project = document.createElement('input');
    project.type = 'text';
    project.name = 'project';
    project.placeholder = 'Project';

    var taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName';
    taskName.placeholder = 'Task';

    var description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description';

    var inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'inputDate';
    inputDate.placeholder = 'Due Date';

    var priority = document.createElement('select');
    priority.name = 'priority';
    priority.id = 'Priority';

    var lowOption = document.createElement('option');
    lowOption.value = 'low option';
    lowOption.text = 'Low';
    priority.appendChild(lowOption); 

    var mediumOption = document.createElement('option');
    mediumOption.value = 'medium option';
    mediumOption.text = 'Medium';
    priority.appendChild(mediumOption);

    var highOption = document.createElement('option');
    highOption.value = 'high option';
    highOption.text = 'High';
    priority.appendChild(highOption);

    var submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
    form.appendChild(errorMessage);
    form.appendChild(project);
    form.appendChild(taskName);
    form.appendChild(description);
    form.appendChild(inputDate);
    form.appendChild(priority);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);

    modal.style.display = "block";

    form.addEventListener("submit", (event) => submitInfo(event, errorMessage));

    cancelButton.addEventListener("click", closeModal);
}

export {createTodo, addTodoToList, displayTodo, submitInfo, closeModal, openModal, input};