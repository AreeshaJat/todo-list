import './style.css';
import { renderHomepage } from "./render_Homepage";
import { input, inputProject } from "./UI";

renderHomepage();

const todoBtn = document.getElementById('new-todo-btn');
todoBtn.addEventListener('click', () => input());

const projectBtn = document.getElementById('new-project-btn');
projectBtn.addEventListener('click', () => inputProject());