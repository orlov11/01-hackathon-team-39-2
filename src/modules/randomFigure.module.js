import {Module} from '../core/module'
import {random} from "../utils"
export class RandomFigure extends Module {
  
    constructor(type, text) {
        super(type, text);
    }  

    trigger() {
        const figure = document.querySelector(".figure")
        if (figure) {
        setTimeout(() => figure.remove(), 200);
        }
        const width = window.innerWidth;
        const height = window.innerHeight;
        let size = (50 + 50 * Math.random()) | 0;
        let div = document.createElement('div');
        div.classList.add("figure");
        div.style.position ="absolute" ;
        div.style.width = random(50, 150) + 'px';
        div.style.height = random(50, 150) + 'px';
        div.style.borderRadius = random(1, 50) +'%';
        div.style.backgroundColor = `rgb(${random(0,256)}, ${random(0,256)}, ${random(0,256)}`
        div.style.top = Math.random() * (height - size) + 'px';
        div.style.left = Math.random() * (width - size) + 'px';
        document.body.appendChild(div);
        }
}