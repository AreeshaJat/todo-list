(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(601),r=n.n(o),i=n(314),c=n.n(i),a=n(417),d=n.n(a),l=new URL(n(497),n.b),s=new URL(n(184),n.b),p=c()(r()),u=d()(l),m=d()(s);p.push([e.id,`body {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    height: 100vh; /*reaches 100% of height of the screen*/\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n}\n\n.sidebar {\n    background-color: burlywood;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    background-color: #fff;\n    padding: 32px;\n}\n\n#content {\n    text-align: center;\n}\n\n.topPortion {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n.todo-text {\n    text-align: center;\n}\n\n.topPart {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.welcome {\n    font-size: 24px;\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n#new-todo-btn {\n    font-size: 16px;\n    cursor: pointer;\n    width: 6vw;\n    height: 6vh;\n}\n\n#new-project-btn {\n    font-size: 16px;\n    cursor: pointer;\n    width: 6vw;\n    height: 6vh;\n}\n\n.projectHeader {\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.projectAndButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    margin-top: 15px;\n}\n\n#project-list {\n    margin-top: 2rem;\n    padding: 1rem;\n    border-top: 1px solid black;\n    width: 18vw;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1000; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 400px; \n    height: 400px;\n}\n\n.card {\n    background-color: #FAEBD7; \n    border-radius: 10px;\n    width: 100%;\n    height: 100px;\n    margin: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-right: 20px;\n    box-sizing: border-box;\n}\n\n.cardContents {\n    display: flex;\n    flex-direction: row; /* Keep the direction as row */\n    align-items: center;\n    justify-content: space-between;\n    width: 100%; /* Ensure it spans the full width of the card */\n}\n\n.priorcheckDiv {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 30px;\n}\n\n.priority {\n    color: white;\n    font-weight: bold;\n    height: 100%; /* Takes full height of card */\n    width: 100px; /* Fixed width for priority column */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.buttonsDiv {\n    display: flex;\n    gap: 8px;\n}\n\n.buttonsDiv button {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n}\n\n.deleteButton {\n    background-image: url(${u});\n    background-size: contain; /* to make the entire image fit within the button */\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n}\n\n.editButton {\n    background-image: url(${m});\n    background-size: contain; /* to make the entire image fit within the button */\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n}`,""]);const h=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},184:(e,t,n)=>{e.exports=n.p+"7c1bcdeb4f33acc7bc39.png"},497:(e,t,n)=>{e.exports=n.p+"0a34ea23d750b4d6177c.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),i=n(659),c=n.n(i),a=n(56),d=n.n(a),l=n(540),s=n.n(l),p=n(113),u=n.n(p),m=n(208),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;let f=document.getElementById("content");class g{constructor(e,t,n,o,r,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.checklist=r,this.project=i}}const y=[];var v=document.getElementById("myModal"),b=document.getElementById("addProject"),x=[];function C(){const e=document.querySelector(".content");e.innerHTML="";const t=y;console.log("Todos:",t),t.forEach(((t,n)=>{console.log("Processing todo:",t);const o=document.createElement("div");o.className="card";const r=document.createElement("div");r.className="cardContents";const i=document.createElement("div");i.classList.add("priorcheckDiv"),r.appendChild(i);const c=document.createElement("div");c.classList.add("priority"),c.textContent=t.priority,"Low"===t.priority?(c.style.backgroundColor="#8FBC8F",c.style.height="100px",c.style.width="200px"):"Medium"===t.priority?(c.style.backgroundColor="#FADA5E",c.style.height="100px",c.style.width="200px"):"High"===t.priority&&(c.style.backgroundColor="#E57373",c.style.height="100px",c.style.width="200px"),i.appendChild(c);const a=document.createElement("input");a.classList.add("checklist"),a.type="checkbox",a.style.height="25px",a.style.width="25px",i.appendChild(a);const d=document.createElement("p");d.classList.add("description"),d.textContent=t.description,d.style.fontWeight="bold",d.style.fontSize="24px",i.appendChild(d);const l=document.createElement("p");l.classList.add("dueDate"),l.textContent=t.dueDate,r.appendChild(l);const s=document.createElement("div");s.classList.add("buttonsDiv"),s.className="buttonsDiv",r.appendChild(s);const p=document.createElement("button");p.classList.add("editButton"),p.textContent="",p.addEventListener("click",(()=>E(t,n))),s.appendChild(p);const u=document.createElement("button");u.classList.add("deleteButton"),u.textContent="",u.addEventListener("click",(function(){y.splice(n,1),C()})),s.appendChild(u),o.appendChild(r),e.appendChild(o)}))}function E(e,t){v.innerHTML="";const n=document.createElement("div");n.className="modal-content",n.innerHTML="";const o=document.createElement("form"),r=document.createElement("p");r.className="modalTitle",r.textContent="Fill out the Information Below";const i=document.createElement("div");i.className="error-message",i.style.color="red";const c=document.createElement("input");c.type="text",c.name="taskName",c.placeholder="Task",c.value=e.title;const a=document.createElement("input");a.type="text",a.name="description",a.placeholder="Description",a.value=e.description;const d=document.createElement("input");d.type="date",d.name="inputDate",d.placeholder="Due Date",d.value=e.dueDate;const l=document.createElement("select");l.name="priority",l.id="Priority";const s=document.createElement("option");s.value="Low",s.text="Low",l.appendChild(s);const p=document.createElement("option");p.value="Medium",p.text="Medium",l.appendChild(p);const u=document.createElement("option");u.value="High",u.text="High",l.appendChild(u),l.value=e.priority;const m=document.createElement("button");m.type="submit",m.textContent="Submit";const h=document.createElement("button");h.textContent="Cancel",o.appendChild(r),o.appendChild(i),o.appendChild(c),o.appendChild(a),o.appendChild(d),o.appendChild(l),o.appendChild(m),o.appendChild(h),n.appendChild(o),v.appendChild(n),v.style.display="block",o.addEventListener("submit",(e=>{e.preventDefault(),function(e,t,n){e.preventDefault(),console.log("Form submitted");const o=document.querySelector("input[name=taskName]").value,r=document.querySelector("input[name=description]").value,i=document.querySelector("input[name=inputDate]").value,c=document.querySelector("select[name=priority]").value;if(console.log("Task Name:",o),console.log("Description:",r),console.log("Due Date:",i),console.log("Priority:",c),!(o&&r&&i&&c))return n.textContent="Field is required.",void console.log("Error Message:",n.textContent);n.textContent="",console.log("Error Message cleared"),y[t].title=o,y[t].description=r,y[t].dueDate=i,y[t].priority=c,w(),C()}(e,t,i)})),h.addEventListener("click",w)}function w(){v.style.display="none"}!function(){let e=document.createElement("div");e.classList.add("homepageDiv");let t=document.createElement("h1");t.classList.add("title"),t.textContent="To-Do List",e.appendChild(t);let n=document.createElement("p");n.classList.add("para"),n.textContent="Create a new project by clicking the 'New +' button",e.appendChild(n);let o=document.createElement("div");o.classList.add("current-project"),o.style.display="none",e.appendChild(o),f.appendChild(e)}(),document.getElementById("new-todo-btn").addEventListener("click",(()=>function(){v.innerHTML="";const e=document.createElement("div");e.className="modal-content",e.innerHTML="";const t=document.createElement("form"),n=document.createElement("p");n.className="modalTitle",n.textContent="Fill out the Information Below";const o=document.createElement("div");o.className="error-message",o.style.color="red";const r=document.createElement("input");r.type="text",r.name="taskName",r.placeholder="Task";const i=document.createElement("input");i.type="text",i.name="description",i.placeholder="Description";const c=document.createElement("input");c.type="date",c.name="inputDate",c.placeholder="Due Date";const a=document.createElement("select");a.name="priority",a.id="Priority";const d=document.createElement("option");d.value="Low",d.text="Low",a.appendChild(d);const l=document.createElement("option");l.value="Medium",l.text="Medium",a.appendChild(l);const s=document.createElement("option");s.value="High",s.text="High",a.appendChild(s);const p=document.createElement("button");p.type="submit",p.textContent="Submit";const u=document.createElement("button");u.textContent="Cancel",t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(c),t.appendChild(a),t.appendChild(p),t.appendChild(u),e.appendChild(t),v.appendChild(e),v.style.display="block",t.addEventListener("submit",(e=>{!function(e,t){e.preventDefault(),console.log("Form submitted");const n=document.querySelector("input[name=taskName]").value,o=document.querySelector("input[name=description]").value,r=document.querySelector("input[name=inputDate]").value,i=document.querySelector("select[name=priority]").value,c=document.querySelector("input[name=project]").value;if(console.log("Task Name:",n),console.log("Description:",o),console.log("Due Date:",r),console.log("Priority:",i),!(n&&o&&r&&i)||c)return t.textContent="Field is required.",void console.log("Error Message:",t.textContent);t.textContent="",console.log("Error Message cleared"),function(e,t,n,o,r,i){const c=new g(e,t,n,o,!1,i);y.push(c)}(n,o,r,i,0,c),document.querySelector('input[name="taskName"]').value="",document.querySelector('input[name="description"]').value="",document.querySelector('input[name="inputDate"]').value="",document.querySelector('select[name="priority"]').value="",w(),C()}(e,o)})),u.addEventListener("click",w)}())),document.getElementById("new-project-btn").addEventListener("click",(()=>function(){b.innerHTML="";const e=document.createElement("input");e.type="text",e.name="project",e.placeholder="Project Name";const t=document.createElement("button");t.type="submit",t.textContent="Submit";const n=document.createElement("form");n.appendChild(e),n.appendChild(t),n.addEventListener("submit",(e=>{e.preventDefault(),function(e){e.preventDefault(),console.log("Form submitted");const t=document.querySelector("input[name=project]").value;console.log("Project Name:",t);let n=document.getElementById("error-message");if(!t)return n?n.textContent="Field is required.":(n=document.createElement("p"),n.id="error-message",n.style.color="red",n.textContent="Field is required.",b.appendChild(n)),void console.log("Error Message:",n.textContent);if(n&&(n.textContent="",console.log("Error Message cleared")),x.includes(t))return void(n.textContent="Project name already exists");x.push(t),function(){const e=document.getElementById("project-list");e.innerHTML="",x.forEach(((t,n)=>{const o=document.createElement("li"),r=document.createElement("a");r.href=`#project-${n}`,r.textContent=t,r.addEventListener("click",(()=>function(e){!function(e){const t=document.querySelector(".content");t.innerHTML="",e.forEach(((e,n)=>{const o=document.createElement("div");o.className="card";const r=document.createElement("div");r.className="cardContents";const i=document.createElement("div");i.classList.add("priority"),i.textContent=e.priority,"Low"===e.priority?i.style.backgroundColor="#8FBC8F":"Medium"===e.priority?i.style.backgroundColor="#FADA5E":"High"===e.priority&&(i.style.backgroundColor="#E57373"),r.appendChild(i);const c=document.createElement("p");c.classList.add("description"),c.textContent=e.description,r.appendChild(c);const a=document.createElement("p");a.classList.add("dueDate"),a.textContent=e.dueDate,r.appendChild(a);const d=document.createElement("div");d.classList.add("buttonsDiv");const l=document.createElement("button");l.classList.add("editButton"),l.textContent="Edit",l.addEventListener("click",(()=>E(e,n))),d.appendChild(l);const s=document.createElement("button");s.classList.add("deleteButton"),s.textContent="Delete",s.addEventListener("click",(()=>deleteTodo(n))),d.appendChild(s),r.appendChild(d),o.appendChild(r),t.appendChild(o)}))}(y.filter((t=>t.project===e)))}(t))),o.appendChild(r),e.appendChild(o)}))}(),document.querySelector("input[name=project]").value="";const o=b.querySelector("form");o&&(o.style.display="none")}(e)})),b.appendChild(n)}()))})()})();