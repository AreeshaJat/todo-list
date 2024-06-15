import { addTodoToList, getTodos } from "./create_Todo";

var modal = document.getElementById('myModal');

function displayTodo() {
    const todoCard = document.querySelector('.content');

    //clear existing content
    todoCard.innerHTML = "";

    //retrieve the current list of todos
    const todos = getTodos();
    console.log('Todos:', todos);

    //iterate over each todo item and create a card for it
    todos.forEach(todo => {

        console.log('Processing todo:', todo);

        const card = document.createElement("div");
        card.className = "card";

        const cardContents = document.createElement("div");
        cardContents.className = "cardContents";

        const checklist = document.createElement("input");
        checklist.classList.add('checklist');
        checklist.type = 'checkbox';
        cardContents.appendChild(checklist);

        const priority = document.createElement("div");
        priority.classList.add('priority');
        priority.textContent = todo.priority;
        cardContents.appendChild(priority);

        const description = document.createElement("p");
        description.classList.add('description');
        description.textContent = todo.description;
        cardContents.appendChild(description);

        const dueDate = document.createElement("p");
        dueDate.classList.add('dueDate');
        dueDate.textContent = todo.dueDate;
        cardContents.appendChild(dueDate);

        card.appendChild(cardContents);
        todoCard.appendChild(card);
    });
}

function submitInfo(event, errorMessage) {
    event.preventDefault();
    console.log('Form submitted');

    const todo_project = document.querySelector('input[name=project]').value;
    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;

    console.log('Project:', todo_project);
    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);

    // Validate the title input
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority || !todo_project) {
        errorMessage.textContent = 'Field is required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        errorMessage.textContent = "";
        console.log('Error Message cleared');
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
    //clear existing content
    modal.innerHTML = "";

    //Ensure the modal content div exists and is empty
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = ""; 

    const form = document.createElement("form");

    const modalTitle = document.createElement("p");
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Fill out the Information Below';

    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';

    const project = document.createElement('input');
    project.type = 'text';
    project.name = 'project';
    project.placeholder = 'Project';

    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName';
    taskName.placeholder = 'Task';

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description';

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'inputDate';
    inputDate.placeholder = 'Due Date';

    const priority = document.createElement('select');
    priority.name = 'priority';
    priority.id = 'Priority';

    const lowOption = document.createElement('option');
    lowOption.value = 'low option';
    lowOption.text = 'Low';
    priority.appendChild(lowOption); 

    const mediumOption = document.createElement('option');
    mediumOption.value = 'medium option';
    mediumOption.text = 'Medium';
    priority.appendChild(mediumOption);

    const highOption = document.createElement('option');
    highOption.value = 'high option';
    highOption.text = 'High';
    priority.appendChild(highOption);

    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement("button");
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

    form.addEventListener("submit", (event) => {
        submitInfo(event, errorMessage);
    });
    cancelButton.addEventListener("click", closeModal);
}

export {openModal, closeModal, input, displayTodo}