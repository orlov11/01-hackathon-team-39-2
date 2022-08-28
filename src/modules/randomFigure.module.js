import { Module } from '../core/module'
import { random } from '../utils'

export class RandomFigure extends Module {
	constructor(type, text) {
		super(type, text)
	}

	renderFigure() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.size = (50 + 50 * Math.random()) | 0
		this.div = document.createElement('div')
		this.div.classList.add('figure')
		this.div.style.position = 'absolute'
		this.div.style.width = random(50, 150) + 'px'
		this.div.style.height = random(50, 150) + 'px'
		this.div.style.borderRadius = random(1, 50) + '%'
		this.div.style.backgroundColor = `rgb(${random(0, 256)}, ${random(
			0,
			256,
		)}, ${random(0, 256)}`
		this.div.style.top = Math.random() * (this.height - this.size) + 'px'
		this.div.style.left = Math.random() * (this.width - this.size) + 'px'
		return this.div
	}

	trigger() {
		const figure = document.querySelector('.figure')
		if (figure) {
			setTimeout(() => figure.remove(), 200)
		}

		const el = this.renderFigure()
		document.body.appendChild(el)
		setTimeout(() => el.remove(), 2000)
	}
}
