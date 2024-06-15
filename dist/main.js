(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    height: 100vh; /*reaches 100% of height of the screen*/\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n}\n\n.sidebar {\n    background-color: burlywood;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    background-color: #fff;\n    padding: 32px;\n}\n\n#content {\n    text-align: center;\n}\n\n.topPortion {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n.todo-text {\n    text-align: center;\n}\n\n#new-todo-btn {\n    font-size: 16px;\n    cursor: pointer;\n    width: 6vw;\n    height: 6vh;\n}\n\n#project-list {\n    margin-top: 2rem;\n    padding: 1rem;\n    border-top: 1px solid black;\n    width: 18vw;\n}\n\n.projectHeader {\n    display: flex;\n    align-self: center;\n    margin-top: 15px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1000; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 400px; /* Could be more or less, depending on screen size */\n    height: 400px;\n}\n\n.card {\n    background-color: #FAEBD7; /* Antique White */\n    /*border-left: 5px solid #DAA520; /* Goldenrod */\n    border-radius: 10px;\n    width: 100%;\n    height: 200px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.cardContents {\n    display: flex;\n    flex-direction: row; /* Keep the direction as row */\n    align-items: center;\n    gap: 1rem; /* Add gap for spacing between elements */\n    width: 100%; /* Ensure it spans the full width of the card */\n}\n\n.card .priority, .card .checklist, .card .title, .card .dueDate {\n    flex: 1; /* Ensure elements are spaced out evenly */\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),d=t.n(c),l=t(540),s=t.n(l),p=t(113),u=t.n(p),m=t(208),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;let h=document.getElementById("content");class g{constructor(e,n,t,o,r){this.title=e,this.description=n,this.dueDate=t,this.priority=o,this.checklist=r}}const v=[];var y=document.getElementById("myModal");function x(){const e=document.querySelector(".content");e.innerHTML="";const n=v;console.log("Todos:",n),n.forEach((n=>{console.log("Processing todo:",n);const t=document.createElement("div");t.className="card";const o=document.createElement("div");o.className="cardContents";const r=document.createElement("input");r.classList.add("checklist"),r.type="checkbox",o.appendChild(r);const a=document.createElement("div");a.classList.add("priority"),a.textContent=n.priority,o.appendChild(a);const i=document.createElement("p");i.classList.add("description"),i.textContent=n.description,o.appendChild(i);const c=document.createElement("p");c.classList.add("dueDate"),c.textContent=n.dueDate,o.appendChild(c),t.appendChild(o),e.appendChild(t)}))}function b(){y.style.display="none"}!function(){let e=document.createElement("div");e.classList.add("homepageDiv");let n=document.createElement("h1");n.classList.add("title"),n.textContent="To-Do List",e.appendChild(n);let t=document.createElement("p");t.classList.add("para"),t.textContent="Create a new project by clicking the 'New +' button",e.appendChild(t),h.appendChild(e)}(),x(),document.getElementById("new-todo-btn").addEventListener("click",(()=>function(){y.innerHTML="";const e=document.createElement("div");e.className="modal-content",e.innerHTML="";const n=document.createElement("form"),t=document.createElement("p");t.className="modalTitle",t.textContent="Fill out the Information Below";const o=document.createElement("div");o.className="error-message",o.style.color="red";const r=document.createElement("input");r.type="text",r.name="project",r.placeholder="Project";const a=document.createElement("input");a.type="text",a.name="taskName",a.placeholder="Task";const i=document.createElement("input");i.type="text",i.name="description",i.placeholder="Description";const c=document.createElement("input");c.type="date",c.name="inputDate",c.placeholder="Due Date";const d=document.createElement("select");d.name="priority",d.id="Priority";const l=document.createElement("option");l.value="low option",l.text="Low",d.appendChild(l);const s=document.createElement("option");s.value="medium option",s.text="Medium",d.appendChild(s);const p=document.createElement("option");p.value="high option",p.text="High",d.appendChild(p);const u=document.createElement("button");u.type="submit",u.textContent="Submit";const m=document.createElement("button");m.textContent="Cancel",n.appendChild(t),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(d),n.appendChild(u),n.appendChild(m),e.appendChild(n),y.appendChild(e),y.style.display="block",n.addEventListener("submit",(e=>{!function(e,n){e.preventDefault(),console.log("Form submitted");const t=document.querySelector("input[name=project]").value,o=document.querySelector("input[name=taskName]").value,r=document.querySelector("input[name=description]").value,a=document.querySelector("input[name=inputDate]").value,i=document.querySelector("select[name=priority]").value;if(console.log("Project:",t),console.log("Task Name:",o),console.log("Description:",r),console.log("Due Date:",a),console.log("Priority:",i),!(o&&r&&a&&i&&t))return n.textContent="Field is required.",void console.log("Error Message:",n.textContent);n.textContent="",console.log("Error Message cleared"),function(e,n,t,o,r){const a=new g(e,n,t,o,!1);v.push(a)}(o,r,a,i),document.querySelector('input[name="project"]').value="",document.querySelector('input[name="taskName"]').value="",document.querySelector('input[name="description"]').value="",document.querySelector('input[name="inputDate"]').value="",document.querySelector('select[name="priority"]').value="",b(),x()}(e,o)})),m.addEventListener("click",b)}()))})()})();