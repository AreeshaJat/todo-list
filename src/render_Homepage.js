let content = document.getElementById('content');

function renderHomepage () {
    let homepageDiv = document.createElement("div");
    homepageDiv.classList.add('homepageDiv');

    let title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "To-Do List";
    homepageDiv.appendChild(title);

    let para = document.createElement("p");
    para.classList.add('para');
    para.textContent = "Create a new project by clicking the 'New +' button";
    homepageDiv.appendChild(para);

    content.appendChild(homepageDiv);
}

function clearHomePage () {
    content.innerHTML = "";
}

export { renderHomepage, clearHomePage };