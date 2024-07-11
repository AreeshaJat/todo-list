import { todoList, addTodoToList, getTodos } from "./create_Todo";

var modal = document.getElementById('myModal');
var addProject = document.getElementById('addProject');
var projectList = [];

function inputProject() {
    addProject.innerHTML = '';

    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.name = 'project';
    projectInput.placeholder = 'Project Name';

    const submitButton = document.createElement("button");
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    const form = document.createElement('form');
    form.appendChild(projectInput);
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitProject(event); 
    });

    addProject.appendChild(form);
}

function submitProject(event) {
    event.preventDefault();
    console.log('Form submitted');

    const project_name = document.querySelector('input[name=project]').value;

    console.log('Project Name:', project_name);

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

    if (projectList.includes(project_name)) {
        errorMessage.textContent = 'Project name already exists';
        return;
    }

    projectList.push(project_name);
    displayProject();

    document.querySelector('input[name=project]').value = "";

    const form = addProject.querySelector('form');
    if (form) {
        form.style.display = 'none';
    }
}

function displayProject() {
    const projectListContainer = document.getElementById('project-list');
    projectListContainer.innerHTML = "";

    projectList.forEach((projectName, index) => {
        const projectItem = document.createElement('li');

        const projectLink = document.createElement('a');
        projectLink.href = `#project-${index}`;
        projectLink.textContent = projectName;
        projectLink.addEventListener('click', () => filterTodosByProject(projectName));

        projectItem.appendChild(projectLink);
        projectListContainer.appendChild(projectItem);
    });
}

function createTodoCard(todo, index) {
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
    cardContents.appendChild(buttonsDiv);

    const editButton = document.createElement("button");
    editButton.classList.add('editButton');
    editButton.textContent = '';
    editButton.addEventListener('click', () => openEditModal(todo, index));
    buttonsDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = '';
    deleteButton.addEventListener('click', function() {
        todoList.splice(index, 1);
        displayTodo();
    });
    buttonsDiv.appendChild(deleteButton);

    card.appendChild(cardContents);
    return card;
}

function displayTodo() {
    const todoCard = document.querySelector('.content');
    todoCard.innerHTML = "";
    const todos = getTodos();
    console.log('Todos:', todos); // Added for debugging
    todos.forEach((todo, index) => {
        const card = createTodoCard(todo, index);
        todoCard.appendChild(card);
    });
}

function filterTodosByProject(projectName) {
    const filteredTodos = todoList.filter(todo => todo.project === projectName);
    displayFilteredTodos(filteredTodos);
}

function displayFilteredTodos(filteredTodos) {
    const todoCard = document.querySelector('.content');
    todoCard.innerHTML = "";
    filteredTodos.forEach((todo, index) => {
        const card = createTodoCard(todo, index);
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
    const selectedProject = document.querySelector('select[name=projectSelector]').value;
    console.log('Task Name:', todo_title);
    console.log('Description:', todo_description);
    console.log('Due Date:', todo_dueDate);
    console.log('Priority:', todo_priority);
    console.log('Project:', selectedProject);

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

    addTodoToList(todo_title, todo_description, todo_dueDate, todo_priority, false, selectedProject);
    console.log('Todo List:', todoList); // Added for debugging

    document.querySelector('input[name="taskName"]').value = "";
    document.querySelector('input[name="description"]').value = "";
    document.querySelector('input[name="inputDate"]').value = "";
    document.querySelector('select[name="priority"]').value = "";

    closeModal();
    displayTodo();
}

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

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateTodo(event, index, errorMessage);
    });
    cancelButton.addEventListener("click", closeModal);
}

function updateTodo(event, index, errorMessage) {
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

    if (!todo_title || !todo_description || !todo_dueDate || !todo_priority) {
        errorMessage.textContent = 'Field is required.';
        console.log('Error Message:', errorMessage.textContent);
        return;
    } else {
        errorMessage.textContent = "";
        console.log('Error Message cleared');
    }

    todoList[index].title = todo_title;
    todoList[index].description = todo_description;
    todoList[index].dueDate = todo_dueDate;
    todoList[index].priority = todo_priority;

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

    form.addEventListener("submit", (event) => {
        submitInfo(event, errorMessage);
    });
    cancelButton.addEventListener("click", closeModal);
}

export {openModal, closeModal, input, displayTodo, inputProject}
