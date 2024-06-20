import './style.css';
import { renderHomepage } from "./render_Homepage";
import { input, displayTodo } from "./UI";

renderHomepage();

const todoBtn = document.getElementById('new-todo-btn');
todoBtn.addEventListener('click', () => input());
