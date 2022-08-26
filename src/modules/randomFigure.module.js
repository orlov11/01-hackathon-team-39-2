import {Module} from '../core/module'

export class RandomFigure extends Module {
  
    constructor(type, text) {
        super(type, text);
    }  

    trigger() {
    const figure = document.querySelector(".figure")
        if (figure) {
        setTimeout(() => figure.remove(), 200);
    }
    
    circleRun()
    }
}
function circleRun(){
    const el = renderFigure()
    document.body.appendChild(el);
} 


function renderFigure(){
    const w = window.innerWidth;
    const h = window.innerHeight;
    let size = (50 + 50 * Math.random()) | 0;
    let color = (0xFFFFFF * Math.random()) | 0x1000000;
    let div = document.createElement('div');
    div.classList.add("figure");
    div.style.position ="absolute" ;
    div.style.width = getRandomInRange(50, 150) + 'px';
    div.style.height = getRandomInRange(50, 150) + 'px';
    div.style.borderRadius = getRandomInRange(1, 50) +'%';
    div.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    div.style.top = Math.random() * (h - size) + 'px';
    div.style.left = Math.random() * (w - size) + 'px';
    console.log(div)
    return div 
}
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}