import {Module} from '../core/module'
import './clicks-styles.css'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }
    trigger() {
        const timeStatusBlock = document.createElement('div')
        timeStatusBlock.className = 'time-status'
        timeStatusBlock.textContent = 'Start'
        document.body.append(timeStatusBlock)

        let clicks = 0
        const currentTime = Date.now()
        const counterBlock = document.createElement('div')
        counterBlock.className = 'clicks-counter'
        counterBlock.innerHTML = `You have clicked <b></b> times.`
        const clickNumberBlock = counterBlock.querySelector('b')
        clickNumberBlock.textContent = clicks
        document.body.append(counterBlock)

        document.addEventListener('click', () => {
            if (Date.now() - currentTime < 3000) {
                clicks += 1
                clickNumberBlock.textContent = clicks
            } else {
                timeStatusBlock.textContent = 'End'
            }
        })
    }
}