import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { Message } from './modules/customMessage.module'
import { TimerModule } from './modules/timer.module'
import { RandomFigure } from './modules/randomFigure.module'
import { GameLuck } from './modules/game-module'
import { random_sound } from './modules/random_sound.module'
import { Encoder } from './modules/encoder-module'

export const backgroun = new BackgroundModule(
	'back',
	'Сменить цвет фона на случайный',
)
export const click = new ClicksModule('click', 'Сосчитать клики( за 10 секунд')
export const messege = new Message('мessege', 'Показать случайное сообщение')
export const myTimer = new TimerModule('timer', 'Включить таймер')
export const figure = new RandomFigure('figure', 'Создать случайную фигуру')
export const game = new GameLuck('game', 'Определить свою удачу')
export const sound = new random_sound('sound', 'Случайный звук')
export const encod = new Encoder('encode', 'Шифровка(только русский)')

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

	runModule() {
		this.menu.addEventListener('click', e => {
			const attr = e.target.getAttribute('data-type')
			if (attr === 'back') {
				backgroun.trigger()
			}
			if (attr === 'click') {
				click.trigger()
			}

			if (attr === 'мessege') {
				messege.trigger()
			}

			if (attr === 'timer') {
				myTimer.trigger()
			}
			if (attr === 'figure') {
				figure.trigger()
			}
			if (attr === 'game') {
				game.trigger()
			}
			if (attr === 'sound') {
				sound.trigger()
			}
			if (attr === 'encode') {
				encod.trigger()
			}
		})
	}
}
