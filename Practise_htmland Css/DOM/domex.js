const link=document.querySelector("a");
link.textContent="Mozila FireFox website";
link.href = "https://developer.mozilla.org";
const sect=document.querySelector("section");
const para =document.createElement("p");
para.textContent="hi this is paragraph";
sect.appendChild(para);
const text=document.createTextNode(" — the premier source for web development knowledge.",);
const linkpara=document.querySelector("p");
linkpara.appendChild(text);
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
localStorage.setItem("name","ram");
localStorage.removeItem("name");
if (typeof(Worker) !== "undefined") {
    window.console.log("Yes it supports worker");
} else {
window.console.log( "Sorry! No Web Worker support..");

}