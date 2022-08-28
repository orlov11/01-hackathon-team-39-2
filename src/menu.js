import { Menu } from './core/menu'

export class ContextMenu extends Menu {
	constructor() {
		super('body')
		this.menu = document.querySelector('.menu')
	}

	callUpMenu() {
		this.el.addEventListener('contextmenu', e => {
			e.preventDefault()
			this.open(e.clientX, e.clientY)
		})

		this.el.addEventListener('click', e => {
			e.preventDefault()
			this.close()
		})
	}

	open(posX, posY) {
		this.menu.style.cssText = `
    position: absolute;
    left: ${posX}px;
    top: ${posY}px;
    `
		this.menu.classList.add('open')
	}

	close() {
		this.menu.classList.remove('open')
	}

	add(metod) {
		this.menu.insertAdjacentHTML('beforeend', metod)
	}

	runModule() {}
}
