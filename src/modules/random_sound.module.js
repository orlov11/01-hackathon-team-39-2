import { Module } from '../core/module'

export class random_sound extends Module {
	constructor(type, text) {
		super(type, text)
		this.soundElement = document.querySelector('#soundItem')
		this.context = null
	}

	playRandomSound() {
		if (this.context === null) {
			this.context = new AudioContext()
		}
		this.oscillatorNode = this.context.createOscillator()
		this.gainNode = this.context.createGain()
		let waveforms = ['sine', 'square', 'sawtooth', 'triangle']

		this.oscillatorNode.type =
			waveforms[Math.floor(Math.random() * waveforms.length)]

		let frequency = (100 + Math.random() * 10000).toFixed(2)
		this.oscillatorNode.frequency.value = frequency

		this.gainNode.gain.exponentialRampToValueAtTime(
			0.00001,
			this.context.currentTime + 1,
		)
		this.oscillatorNode.connect(this.gainNode)
		this.gainNode.connect(this.context.destination)
		this.oscillatorNode.start(0)
	}

	trigger() {
		this.playRandomSound()
	}
}
