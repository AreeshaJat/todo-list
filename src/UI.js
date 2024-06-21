import { todoList, addTodoToList, getTodos } from "./create_Todo";

var modal = document.getElementById('myModal');

/*function displayProject() {
    const projects = document.getElementById('project-list');

    projects.innerHTML = "";

    const todos = getTodos();

    todos.forEach(todo => {
        const titles = document.createElement("div");
        titles.className = "titles";

        const titleContents = document.createElement("div");
        titleContents.className = "titleContents";

        const titleProject = document.createElement("h3");
        titleProject.classList.add('titleProject');
        titleProject.textContent = todo.title;
        titleContents.appendChild(titleProject);
        titles.appendChild(titleContents);
        projects.appendChild(titles);
    });
}*/

function displayTodo() {
    const todoCard = document.querySelector('.content');

    //clear existing content
    todoCard.innerHTML = "";

    //retrieve the current list of todos
    const todos = getTodos();
    console.log('Todos:', todos);

    //iterate over each todo item and index and create a card for it
    todos.forEach((todo, index) => {

        console.log('Processing todo:', todo);

        const card = document.createElement("div");
        card.className = "card";

        const cardContents = document.createElement("div");
        cardContents.className = "cardContents";

        const priorcheckDiv = document.createElement("div");
        priorcheckDiv.classList.add('priorcheckDiv');
        cardContents.appendChild(priorcheckDiv);

        const priority = document.createElement("div");
        priority.classList.add('priority');
        priority.textContent = todo.priority;
        if (todo.priority === 'Low') {
            priority.style.backgroundColor = '#8FBC8F';
            priority.style.height = '100px';
            priority.style.width = '200px';
        } else if (todo.priority === 'Medium') {
            priority.style.backgroundColor = '#FADA5E'; 
            priority.style.height = '100px';
            priority.style.width = '200px';
        } else if (todo.priority === 'High') {
            priority.style.backgroundColor = '#E57373'; 
            priority.style.height = '100px';
            priority.style.width = '200px';
        }
        priorcheckDiv.appendChild(priority);

        const checklist = document.createElement("input");
        checklist.classList.add('checklist');
        checklist.type = 'checkbox';
        checklist.style.height = '25px';
        checklist.style.width = '25px';
        priorcheckDiv.appendChild(checklist);

        const description = document.createElement("p");
        description.classList.add('description');
        description.textContent = todo.description;
        description.style.fontWeight = 'bold';
        description.style.fontSize = '24px';
        priorcheckDiv.appendChild(description);

        const dueDate = document.createElement("p");
        dueDate.classList.add('dueDate');
        dueDate.textContent = todo.dueDate;
        cardContents.appendChild(dueDate);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add('buttonsDiv');
        buttonsDiv.className = "buttonsDiv";
        cardContents.appendChild(buttonsDiv);

        const editButton = document.createElement("button");
        editButton.classList.add('editButton');
        editButton.textContent = '';
        //todo is the todo item object that contains the current values which need to be
        //displayed in the modal for editing
        //indes is the position of the todo item in the todoList array
        editButton.addEventListener('click', () => openEditModal(todo, index)); 
        buttonsDiv.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = '';
        deleteButton.addEventListener('click', function() {
            //Removing the todo from the array
            todoList.splice(index, 1);
            //Updating the display
            displayTodo();
        })
        buttonsDiv.appendChild(deleteButton);

        card.appendChild(cardContents);
        todoCard.appendChild(card);
    });
}

function submitInfo(event, errorMessage) {
    event.preventDefault();
    console.log('Form submitted');

    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;

    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);

    // Validate the input
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority) {
        errorMessage.textContent = 'Field is required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        errorMessage.textContent = "";
        console.log('Error Message cleared');
    }

    addTodoToList(todo_title, todo_description, todo_dueDate, todo_priority, false);

    //clear input fields
    document.querySelector('input[name="taskName"]').value = "";
    document.querySelector('input[name="description"]').value = "";
    document.querySelector('input[name="inputDate"]').value = "";
    document.querySelector('select[name="priority"]').value = "";

    closeModal();
    displayTodo();
    //displayProject();

}

function openEditModal(todo, index) {

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

    /*const project = document.createElement('input');
    project.type = 'text';
    project.name = 'project';
    project.placeholder = 'Project';*/

    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName';
    taskName.placeholder = 'Task';
    taskName.value = todo.title; //already fill with current value

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description';
    description.value = todo.description; //already fill with current value

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'inputDate';
    inputDate.placeholder = 'Due Date';
    inputDate.value = todo.dueDate; //already fill with current value

    const priority = document.createElement('select');
    priority.name = 'priority';
    priority.id = 'Priority';

    const lowOption = document.createElement('option');
    lowOption.value = 'Low';
    lowOption.text = 'Low';
    priority.appendChild(lowOption); 

    const mediumOption = document.createElement('option');
    mediumOption.value = 'Medium';
    mediumOption.text = 'Medium';
    priority.appendChild(mediumOption);

    const highOption = document.createElement('option');
    highOption.value = 'High';
    highOption.text = 'High';
    priority.appendChild(highOption);
    priority.value = todo.priority; //already fill with current value

    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
    form.appendChild(errorMessage);
    //form.appendChild(project);
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
        event.preventDefault();
        updateTodo(event, index, errorMessage); //calling the updateTodo
    });
    cancelButton.addEventListener("click", closeModal);
}

function updateTodo(event, index, errorMessage) {
    event.preventDefault();
    console.log('Form submitted');

    // Get the new values from the form fields
    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;

    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);

    // Validate the form fields
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority) {
        errorMessage.textContent = 'Field is required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        errorMessage.textContent = "";
        console.log('Error Message cleared');
    }

    // Update the todo item in the array at the specified index
    todoList[index].title = todo_title;
    todoList[index].description = todo_description;
    todoList[index].dueDate = todo_dueDate;
    todoList[index].priority = todo_priority;

    closeModal();
    displayTodo();
    //displayProject();
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

    /*const project = document.createElement('input');
    project.type = 'text';
    project.name = 'project';
    project.placeholder = 'Project';*/

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
    lowOption.value = 'Low';
    lowOption.text = 'Low';
    priority.appendChild(lowOption); 

    const mediumOption = document.createElement('option');
    mediumOption.value = 'Medium';
    mediumOption.text = 'Medium';
    priority.appendChild(mediumOption);

    const highOption = document.createElement('option');
    highOption.value = 'High';
    highOption.text = 'High';
    priority.appendChild(highOption);

    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
    form.appendChild(errorMessage);
    //form.appendChild(project);
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
