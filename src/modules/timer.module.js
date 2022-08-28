import { Module } from '../core/module'

export class TimerModule extends Module {
	constructor(type, text) {
		super(type, text)
		this.timerBlock = document.createElement('div')
		this.finalBlock = document.createElement('div')
	}

	trigger() {
		let timerValue = +prompt('Установите ваш таймер (в секундах):')
		timerValue = this.checkInput(timerValue)

		this.renderTimerBlock(timerValue)

		const interval_id = setInterval(() => {
			timerValue -= 1
			this.checkEnd(timerValue, interval_id)
			this.timerBlock.textContent = this.formatTimer(timerValue)
		}, 1000)
	}

	renderTimerBlock(value) {
		this.timerBlock.className = 'timer-block'
		this.timerBlock.textContent = this.formatTimer(value)
		document.body.append(this.timerBlock)
	}

	formatTimer(value) {
		const timerArr = [
			Math.floor(value / 3600),
			Math.floor((value % 3600) / 60),
			value % 60,
		]
		const timerFormatedArr = timerArr.map(el => {
			if (el < 10) return '0' + el
			else return '' + el
		})
		return timerFormatedArr.join(' : ')
	}

	checkEnd(value, interval_id) {
		if (value === 0) {
			this.timerBlock.classList.add('orange-bgr')
			setTimeout(() => {
				clearInterval(interval_id)
				this.timerBlock.remove()
				this.renderFinalBlock()
			}, 300)
		}
	}

	checkInput(input) {
		while (isNaN(input) || input <= 0) {
			if (isNaN(input)) {
				input = +prompt('Некорректный ввод! Вводите, пожалуйста, только цифры:')
			}
			if (input <= 0) {
				input = +prompt('Введите число больше нуля:')
			}
		}
		return input
	}

	renderFinalBlock() {
		this.finalBlock.className = 'final-block'
		this.finalBlock.textContent = 'Таймер успешно завершил работу'
		document.body.append(this.finalBlock)
		setTimeout(() => {
			this.finalBlock.remove()
		}, 2000)
	}
}

/*
let timerValue = +prompt('Установите ваш таймер (в секундах):')
timerValue = checkInput(timerValue)
myTimer.trigger(timerValue)

*/
