import './style.css';
import { renderHomepage } from "./render_Homepage";
import { createTodo, addTodoToList, displayTodo, submitInfo, closeModal, openModal, input } from "./create_Todo";

renderHomepage();
console.log("working");

const todoBtn = document.getElementById('new-todo-btn');
todoBtn.addEventListener('click', () => input());


console.log("working");