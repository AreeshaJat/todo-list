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

function input() {
    var modal = document.getElementById('myModal');

    modal.innerHTML = "";

    // Ensure the modal content div exists and is empty
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = ""; 

    let form = document.createElement("form");

    let modalTitle = document.createElement("p");
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Fill out the Information Below';

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
    lowOption.value = 'low_Option';
    lowOption.text = 'Low';
    priority.appendChild(lowOption); 

    var mediumOption = document.createElement('option');
    mediumOption.value = 'medium_Option';
    mediumOption.text = 'Medium';
    priority.appendChild(mediumOption);

    var highOption = document.createElement('option');
    highOption.value = 'high_Option';
    highOption.text = 'High';
    priority.appendChild(highOption);

    var submitButton = document.createElement("button");
    submitButton.textContent = 'Submit';

    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    form.appendChild(modalTitle);
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

    submitButton.addEventListener("click", submitInfo);

    cancelButton.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export {input};