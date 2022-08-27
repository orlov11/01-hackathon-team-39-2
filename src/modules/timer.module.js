import { Module } from '../core/module'
import './timer-styles.css'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.timerBlock = document.createElement('div')
        this.finalBlock = document.createElement('div')
    }

    trigger(timerValue) {
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
            Math.floor(value % 3600 / 60),
            value % 60
        ]
        const timerFormatedArr = timerArr.map((el) => {
            if (el < 10) return '0' + el
            else return '' + el
        })
        return timerFormatedArr.join(' : ')
    }

    checkEnd(value, interval_id) {
        if (value === 0) {
            clearInterval(interval_id)
            this.timerBlock.classList.add('hide')
            this.renderFinalBlock()
        }
    }

    renderFinalBlock() {
        this.finalBlock.className = 'final-block'
        this.finalBlock.textContent = 'Таймер успешно завершил работу'
        document.body.append(this.finalBlock)
        this.finalBlock.classList.add('visible') 
    }
}