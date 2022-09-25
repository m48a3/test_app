import { Parallelepiped } from "./parallelepiped.js";
let wEl = document.querySelector(".w");
let lEl = document.querySelector(".l");
let hEl = document.querySelector(".h");
let outEl = document.querySelector(".output");
let buttons = document.querySelectorAll("button");
buttons[0].onclick = button0_click;
buttons[1].onclick = button1_click;
buttons[2].onclick = button2_click;

let p = new Parallelepiped();

async function button0_click() {
    await p.inputWLH(sides);
    p.calcAndShowD(() => { outEl.textContent = p.d; });
}
async function button1_click() {
    await p.inputWLH(sides);
    p.calcAndShowS(() => { outEl.textContent = p.s; });
}
async function button2_click() {
    await p.inputWLH(sides);
    p.calcAndShowV(() => { outEl.textContent = p.v; });
}
function sides() {
    return Promise.resolve([+wEl.value, +lEl.value, +hEl.value]);
}