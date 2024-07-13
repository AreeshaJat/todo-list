import { todoList, addTodoToList, getTodos, saveTodos } from "./create_Todo";

var modal = document.getElementById('myModal');
var addProject = document.getElementById('addProject');
var projectList = [];
var currentProject = null;  

// Function to handle project input form
function inputProject() {
    addProject.innerHTML = '';

    // Create input field for project name
    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.name = 'project';
    projectInput.placeholder = 'Project Name';

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Create form and append input and button
    const form = document.createElement('form');
    form.appendChild(projectInput);
    form.appendChild(submitButton);

    // Add event listener to handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitProject(event); 
    });

    // Append form to addProject element
    addProject.appendChild(form);
}

// Function to handle project submission
function submitProject(event) {
    event.preventDefault();

    // Get the project name from the input field
    const project_name = document.querySelector('input[name=project]').value;

    console.log('Project Name:', project_name);

    // Get or create error message element
    let errorMessage = document.getElementById('error-message');
    if (!project_name) {
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.id = 'error-message';
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Field is required.';
            addProject.appendChild(errorMessage);
        } else {
            errorMessage.textContent = 'Field is required.';
        }
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        if (errorMessage) {
            errorMessage.textContent = "";
            console.log('Error Message cleared');
        }
    }

    // Check if the project name already exists
    if (projectList.includes(project_name)) {
        errorMessage.textContent = 'Project name already exists';
        return;
    }

    // Add project name to project list and display updated project list
    projectList.push(project_name);
    displayProject();

    // Clear input field
    document.querySelector('input[name=project]').value = "";

    // Hide the form after submission
    const form = addProject.querySelector('form');
    if (form) {
        form.style.display = 'none';
    }
}

// Function to display project list
function displayProject() {
    const projectListContainer = document.getElementById('project-list');
    projectListContainer.innerHTML = "";

    // Iterate through project list and create HTML elements for each project
    projectList.forEach((projectName, index) => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');

        const projectLink = document.createElement('a');
        projectLink.href = `#project-${index}`;
        projectLink.textContent = projectName;
        projectLink.classList.add('project-link');
        projectLink.addEventListener('click', () => {
            currentProject = projectName; // Set the current project
            filterTodosByProject(projectName);
        });

        const deleteProjectButton = document.createElement("button");
        deleteProjectButton.classList.add('deleteProjectButton');
        deleteProjectButton.textContent = '';
        deleteProjectButton.style.width = '30px';
        deleteProjectButton.style.height = '30px';
        deleteProjectButton.addEventListener('click', function() {
            projectList.splice(index, 1);
            displayProject();
        });

        projectItem.appendChild(projectLink);
        projectItem.appendChild(deleteProjectButton);
        projectListContainer.appendChild(projectItem);
    });
}

// Function to create a to-do card element
function createTodoCard(todo, index) {
    const card = document.createElement("div");
    card.className = "card";

    const cardContents = document.createElement("div");
    cardContents.className = "cardContents";

    const priorcheckDiv = document.createElement("div");
    priorcheckDiv.classList.add('priorcheckDiv');
    cardContents.appendChild(priorcheckDiv);

    // Create and style priority element
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

    // Create and style checklist element
    const checklist = document.createElement("input");
    checklist.classList.add('checklist');
    checklist.type = 'checkbox';
    checklist.style.height = '25px';
    checklist.style.width = '25px';
    checklist.checked = todo.completed;
    checklist.addEventListener('change', () => {
        todo.completed = checklist.checked;
        saveTodos();
    });
    priorcheckDiv.appendChild(checklist);

    // Create and style description element
    const description = document.createElement("p");
    description.classList.add('description');
    description.textContent = todo.description;
    description.style.fontWeight = 'bold';
    description.style.fontSize = '24px';
    priorcheckDiv.appendChild(description);

    // Create and style due date element
    const dueDate = document.createElement("p");
    dueDate.classList.add('dueDate');
    dueDate.textContent = todo.dueDate;
    cardContents.appendChild(dueDate);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add('buttonsDiv');
    cardContents.appendChild(buttonsDiv);

    // Create and style edit button
    const editButton = document.createElement("button");
    editButton.classList.add('editButton');
    editButton.textContent = '';
    editButton.addEventListener('click', () => openEditModal(todo, index));
    buttonsDiv.appendChild(editButton);

    // Create and style delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = '';
    deleteButton.addEventListener('click', function() {
        //checks if each t (todo) item in the todoList array has the same title and project being processed
        const todoIndex = todoList.findIndex(t => t.title === todo.title && t.project === todo.project);
        //if todoIndex is not equal to -1 that means there is a matching array
        if (todoIndex !== -1) {
            todoList.splice(todoIndex, 1);
            saveTodos();
            displayTodo();
        }
    });
    buttonsDiv.appendChild(deleteButton);

    card.appendChild(cardContents);
    return card;
}

// Function to display to-dos for the current project
function displayTodo() {
    const todoCard = document.querySelector('.content');
    todoCard.innerHTML = "";
    const todos = getTodos();
    console.log('Todos:', todos); // Added for debugging
    // Filter todos by current project
    const filteredTodos = todos.filter(todo => todo.project === currentProject);
    filteredTodos.forEach((todo, index) => {
        const card = createTodoCard(todo, index);
        todoCard.appendChild(card);
    });
}

// Function to filter to-dos by project name
function filterTodosByProject(projectName) {
    const filteredTodos = todoList.filter(todo => todo.project === projectName);
    displayFilteredTodos(filteredTodos);
}

// Function to display filtered to-dos
function displayFilteredTodos(filteredTodos) {
    const todoCard = document.querySelector('.content');
    todoCard.innerHTML = "";
    filteredTodos.forEach((todo, index) => {
        const card = createTodoCard(todo, index);
        todoCard.appendChild(card);
    });
}

// Function to handle form submission for adding a new to-do
function submitInfo(event, errorMessage) {
    event.preventDefault();
    console.log('Form submitted');

    // Get form input values
    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;
    const selectedProject = document.querySelector('select[name=projectSelector]').value;
    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);
    console.log('Project:', selectedProject);

    // Validate form inputs
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority || !selectedProject) {
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.style.color = 'red';
            form.appendChild(errorMessage);
        }
        errorMessage.textContent = 'All fields are required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } 

    errorMessage.textContent = "";

    // Add new to-do to the list
    addTodoToList(todo_title, todo_description, todo_dueDate, todo_priority, false, selectedProject);
    console.log('Todo List:', todoList); // Added for debugging

    // Clear form input values
    document.querySelector('input[name="taskName"]').value = "";
    document.querySelector('input[name="description"]').value = "";
    document.querySelector('input[name="inputDate"]').value = "";
    document.querySelector('select[name="priority"]').value = "";

    // Close modal and display updated to-do list
    closeModal();
    displayTodo();
}

// Function to open the edit modal for a to-do
function openEditModal(todo, index) {
    modal.innerHTML = "";

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

    // Create and set form input values for editing
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName';
    taskName.placeholder = 'Task';
    taskName.value = todo.title;

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description';
    description.value = todo.description;

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'inputDate';
    inputDate.placeholder = 'Due Date';
    inputDate.value = todo.dueDate;

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
    priority.value = todo.priority;

    // Create and append form buttons
    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
    form.appendChild(errorMessage);
    form.appendChild(taskName);
    form.appendChild(description);
    form.appendChild(inputDate);
    form.appendChild(priority);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);

    modal.style.display = "block";

    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateTodo(event, todo, errorMessage);
    });
    cancelButton.addEventListener("click", closeModal);
}

// Function to update a to-do
function updateTodo(event, originalTodo, errorMessage) {
    event.preventDefault();
    console.log('Form submitted');

    // Get form input values
    const todo_title = document.querySelector('input[name=taskName]').value;
    const todo_description = document.querySelector('input[name=description]').value;
    const todo_dueDate = document.querySelector('input[name=inputDate]').value;
    const todo_priority = document.querySelector('select[name=priority]').value;
    

    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);

    // Validate form inputs
    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority) {
        errorMessage.textContent = 'Field is required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        errorMessage.textContent = "";
        console.log('Error Message cleared');
    }

    // Find the index of the original todo
    const todoIndex = todoList.findIndex(t => t.title === originalTodo.title && t.project === originalTodo.project);

    if (todoIndex !== -1) {
        // Update to-do values
        todoList[todoIndex].title = todo_title;
        todoList[todoIndex].description = todo_description;
        todoList[todoIndex].dueDate = todo_dueDate;
        todoList[todoIndex].priority = todo_priority;

        saveTodos();

        // Close modal and display updated to-do list
        closeModal();
        displayTodo();
    }
}

// Function to open the modal
function openModal () {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal () {
    modal.style.display = "none";
}

// Function to handle to-do input form
function input() {
    modal.innerHTML = "";

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = ""; 

    const form = document.createElement("form");
    form.className = 'form';

    const modalTitle = document.createElement("p");
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Fill out the Information Below';
    modalTitle.style.textAlign = 'center';

    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';

    // Create and append form input fields
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

    const projectSelector = document.createElement('select');
    projectSelector.name = 'projectSelector';
    projectList.forEach((projectName) => {
        const option = document.createElement('option');
        option.value = projectName;
        option.text = projectName;
        projectSelector.appendChild(option);
    });

    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
    form.appendChild(errorMessage);
    form.appendChild(taskName);
    form.appendChild(description);
    form.appendChild(inputDate);
    form.appendChild(priority);
    form.appendChild(projectSelector);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);

    modal.style.display = "block";

    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
        submitInfo(event, errorMessage);
    });
    cancelButton.addEventListener("click", closeModal);
}

export {openModal, closeModal, input, displayTodo, inputProject}
