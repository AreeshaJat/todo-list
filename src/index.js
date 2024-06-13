import './style.css';
import { renderHomepage, clearHomePage } from "./render_Homepage";
import { input } from "./create_Todo";

renderHomepage();
console.log("working");

const todoBtn = document.getElementById('new-todo-btn');
todoBtn.addEventListener('click', () => input());


console.log("working");