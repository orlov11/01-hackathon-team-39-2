import {Module} from '../core/module'

export class random_sound extends Module {

    constructor(type, text) {
        
        super(type, text);
    } 

    playRandomSound();

}

let soundElement = document.querySelector("#soundItem"); //id="soundItem" добавить в элемент меню
    soundElement.addEventListener("click", playRandomSound, false);

let context = null;
let waveforms = ["sine", "square", "sawtooth", "triangle"];

function playRandomSound() {
    if (context === null) {
        context = new AudioContext();
    }

    let oscillatorNode = context.createOscillator();
    let gainNode = context.createGain();

    oscillatorNode.type = waveforms[Math.floor(Math.random() * waveforms.length)];

    let frequency = (100 + Math.random() * 10000).toFixed(2);
    oscillatorNode.frequency.value = frequency;

    console.log(`Playing a sound with a ${oscillatorNode.type} waveform at ${frequency}Hz!`);

    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
    oscillatorNode.connect(gainNode);
    gainNode.connect(context.destination);
    oscillatorNode.start(0);
}