import './style.css';
import { renderHomepage } from "./render_Homepage";
import { input, displayTodo } from "./UI";

renderHomepage();
displayTodo();

const todoBtn = document.getElementById('new-todo-btn');
todoBtn.addEventListener('click', () => input());
