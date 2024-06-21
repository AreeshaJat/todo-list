(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(601),r=n.n(o),i=n(314),a=n.n(i),c=n(417),l=n.n(c),d=new URL(n(497),n.b),s=new URL(n(184),n.b),p=a()(r()),u=l()(d),m=l()(s);p.push([e.id,`body {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    height: 100vh; /*reaches 100% of height of the screen*/\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n}\n\n.sidebar {\n    background-color: burlywood;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    background-color: #fff;\n    padding: 32px;\n}\n\n#content {\n    text-align: center;\n}\n\n.topPortion {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n.todo-text {\n    text-align: center;\n}\n\n.topPart {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.welcome {\n    font-size: 24px;\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n#new-todo-btn {\n    font-size: 16px;\n    cursor: pointer;\n    width: 6vw;\n    height: 6vh;\n}\n\n#new-project-btn {\n    font-size: 16px;\n    cursor: pointer;\n    width: 6vw;\n    height: 6vh;\n}\n\n.projectHeader {\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.projectAndButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    margin-top: 15px;\n}\n\n#project-list {\n    margin-top: 2rem;\n    padding: 1rem;\n    border-top: 1px solid black;\n    width: 18vw;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1000; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 400px; \n    height: 400px;\n}\n\n.card {\n    background-color: #FAEBD7; \n    border-radius: 10px;\n    width: 100%;\n    height: 100px;\n    margin: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-right: 20px;\n    box-sizing: border-box;\n}\n\n.cardContents {\n    display: flex;\n    flex-direction: row; /* Keep the direction as row */\n    align-items: center;\n    justify-content: space-between;\n    width: 100%; /* Ensure it spans the full width of the card */\n}\n\n.priorcheckDiv {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 30px;\n}\n\n.priority {\n    color: white;\n    font-weight: bold;\n    height: 100%; /* Takes full height of card */\n    width: 100px; /* Fixed width for priority column */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.buttonsDiv {\n    display: flex;\n    gap: 8px;\n}\n\n.buttonsDiv button {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n}\n\n.deleteButton {\n    background-image: url(${u});\n    background-size: contain; /* to make the entire image fit within the button */\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n}\n\n.editButton {\n    background-image: url(${m});\n    background-size: contain; /* to make the entire image fit within the button */\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n}`,""]);const h=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=o(e,r),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},184:(e,t,n)=>{e.exports=n.p+"7c1bcdeb4f33acc7bc39.png"},497:(e,t,n)=>{e.exports=n.p+"0a34ea23d750b4d6177c.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),i=n(659),a=n.n(i),c=n(56),l=n.n(c),d=n(540),s=n.n(d),p=n(113),u=n.n(p),m=n(208),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;let f=document.getElementById("content");class g{constructor(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.checklist=r}}const y=[];var v=document.getElementById("myModal");function b(){const e=document.querySelector(".content");e.innerHTML="";const t=y;console.log("Todos:",t),t.forEach(((t,n)=>{console.log("Processing todo:",t);const o=document.createElement("div");o.className="card";const r=document.createElement("div");r.className="cardContents";const i=document.createElement("div");i.classList.add("priorcheckDiv"),r.appendChild(i);const a=document.createElement("div");a.classList.add("priority"),a.textContent=t.priority,"Low"===t.priority?(a.style.backgroundColor="#8FBC8F",a.style.height="100px",a.style.width="200px"):"Medium"===t.priority?(a.style.backgroundColor="#FADA5E",a.style.height="100px",a.style.width="200px"):"High"===t.priority&&(a.style.backgroundColor="#E57373",a.style.height="100px",a.style.width="200px"),i.appendChild(a);const c=document.createElement("input");c.classList.add("checklist"),c.type="checkbox",c.style.height="25px",c.style.width="25px",i.appendChild(c);const l=document.createElement("p");l.classList.add("description"),l.textContent=t.description,l.style.fontWeight="bold",l.style.fontSize="24px",i.appendChild(l);const d=document.createElement("p");d.classList.add("dueDate"),d.textContent=t.dueDate,r.appendChild(d);const s=document.createElement("div");s.classList.add("buttonsDiv"),s.className="buttonsDiv",r.appendChild(s);const p=document.createElement("button");p.classList.add("editButton"),p.textContent="",p.addEventListener("click",(()=>function(e,t){v.innerHTML="";const n=document.createElement("div");n.className="modal-content",n.innerHTML="";const o=document.createElement("form"),r=document.createElement("p");r.className="modalTitle",r.textContent="Fill out the Information Below";const i=document.createElement("div");i.className="error-message",i.style.color="red";const a=document.createElement("input");a.type="text",a.name="taskName",a.placeholder="Task",a.value=e.title;const c=document.createElement("input");c.type="text",c.name="description",c.placeholder="Description",c.value=e.description;const l=document.createElement("input");l.type="date",l.name="inputDate",l.placeholder="Due Date",l.value=e.dueDate;const d=document.createElement("select");d.name="priority",d.id="Priority";const s=document.createElement("option");s.value="Low",s.text="Low",d.appendChild(s);const p=document.createElement("option");p.value="Medium",p.text="Medium",d.appendChild(p);const u=document.createElement("option");u.value="High",u.text="High",d.appendChild(u),d.value=e.priority;const m=document.createElement("button");m.type="submit",m.textContent="Submit";const h=document.createElement("button");h.textContent="Cancel",o.appendChild(r),o.appendChild(i),o.appendChild(a),o.appendChild(c),o.appendChild(l),o.appendChild(d),o.appendChild(m),o.appendChild(h),n.appendChild(o),v.appendChild(n),v.style.display="block",o.addEventListener("submit",(e=>{e.preventDefault(),function(e,t,n){e.preventDefault(),console.log("Form submitted");const o=document.querySelector("input[name=taskName]").value,r=document.querySelector("input[name=description]").value,i=document.querySelector("input[name=inputDate]").value,a=document.querySelector("select[name=priority]").value;if(console.log("Task Name:",o),console.log("Description:",r),console.log("Due Date:",i),console.log("Priority:",a),!(o&&r&&i&&a))return n.textContent="Field is required.",void console.log("Error Message:",n.textContent);n.textContent="",console.log("Error Message cleared"),y[t].title=o,y[t].description=r,y[t].dueDate=i,y[t].priority=a,C(),b()}(e,t,i)})),h.addEventListener("click",C)}(t,n))),s.appendChild(p);const u=document.createElement("button");u.classList.add("deleteButton"),u.textContent="",u.addEventListener("click",(function(){y.splice(n,1),b()})),s.appendChild(u),o.appendChild(r),e.appendChild(o)}))}function x(e,t){e.preventDefault(),console.log("Form submitted");const n=document.querySelector("input[name=taskName]").value,o=document.querySelector("input[name=description]").value,r=document.querySelector("input[name=inputDate]").value,i=document.querySelector("select[name=priority]").value;if(console.log("Task Name:",n),console.log("Description:",o),console.log("Due Date:",r),console.log("Priority:",i),!(n&&o&&r&&i))return t.textContent="Field is required.",void console.log("Error Message:",t.textContent);t.textContent="",console.log("Error Message cleared"),function(e,t,n,o,r){const i=new g(e,t,n,o,!1);y.push(i)}(n,o,r,i),document.querySelector('input[name="taskName"]').value="",document.querySelector('input[name="description"]').value="",document.querySelector('input[name="inputDate"]').value="",document.querySelector('select[name="priority"]').value="",C(),b()}function C(){v.style.display="none"}!function(){let e=document.createElement("div");e.classList.add("homepageDiv");let t=document.createElement("h1");t.classList.add("title"),t.textContent="To-Do List",e.appendChild(t);let n=document.createElement("p");n.classList.add("para"),n.textContent="Create a new project by clicking the 'New +' button",e.appendChild(n),f.appendChild(e)}(),document.getElementById("new-todo-btn").addEventListener("click",(()=>function(){v.innerHTML="";const e=document.createElement("div");e.className="modal-content",e.innerHTML="";const t=document.createElement("form"),n=document.createElement("p");n.className="modalTitle",n.textContent="Fill out the Information Below";const o=document.createElement("div");o.className="error-message",o.style.color="red";const r=document.createElement("input");r.type="text",r.name="taskName",r.placeholder="Task";const i=document.createElement("input");i.type="text",i.name="description",i.placeholder="Description";const a=document.createElement("input");a.type="date",a.name="inputDate",a.placeholder="Due Date";const c=document.createElement("select");c.name="priority",c.id="Priority";const l=document.createElement("option");l.value="Low",l.text="Low",c.appendChild(l);const d=document.createElement("option");d.value="Medium",d.text="Medium",c.appendChild(d);const s=document.createElement("option");s.value="High",s.text="High",c.appendChild(s);const p=document.createElement("button");p.type="submit",p.textContent="Submit";const u=document.createElement("button");u.textContent="Cancel",t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(c),t.appendChild(p),t.appendChild(u),e.appendChild(t),v.appendChild(e),v.style.display="block",t.addEventListener("submit",(e=>{x(e,o)})),u.addEventListener("click",C)}()))})()})();