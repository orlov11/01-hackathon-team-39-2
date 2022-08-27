import { Module } from '../core/module'
import './clicks-styles.css'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }
    trigger() {
        const startTime = Date.now()

        const infoBlock = document.createElement('div')
        infoBlock.className = 'info-block'
        infoBlock.textContent = 'Click anywhere!'
        document.body.append(infoBlock)

        const my_set_interval_id = setInterval(() => {
            if (infoBlock.classList.contains('hide')) {
                infoBlock.classList.remove('hide')
            } else {
                infoBlock.classList.add('hide')
            }
        }, 200)

        const timeStatusBlock = document.createElement('div')
        timeStatusBlock.className = 'time-status'
        timeStatusBlock.textContent = 'Counting clicks...'
        document.body.append(timeStatusBlock)
        setTimeout(() => {
            timeStatusBlock.textContent = 'Finished'
            clearInterval(my_set_interval_id)
            infoBlock.classList.add('hide')
        }, 10000)

        let singleClicks = 0
        let doubleClicks = 0
        let isSingleClick = false

        const singleClickCounterBlock = this.rendeCounterBlock('Single clicks')
        const singleClickNumberBlock = singleClickCounterBlock.querySelector('b')
        singleClickNumberBlock.textContent = singleClicks
        document.body.append(singleClickCounterBlock)

        const doubleClickCounterBlock = this.rendeCounterBlock('Double clicks')
        const doubleClickNumberBlock = doubleClickCounterBlock.querySelector('b')
        doubleClickNumberBlock.textContent = doubleClicks
        document.body.append(doubleClickCounterBlock)

        document.addEventListener('click', () => {
            const clickTime = Date.now()
            if (clickTime - startTime < 10000) {
                isSingleClick = !isSingleClick
                setTimeout(() => {
                    if (isSingleClick) {
                        singleClicks += 1
                        singleClickNumberBlock.textContent = singleClicks
                        isSingleClick = !isSingleClick
                    } else {
                        doubleClicks += 1
                        if (doubleClicks % 2 === 0) {
                            doubleClickNumberBlock.textContent = doubleClicks / 2
                        }
                    }
                }, 200)
            }
        })
    }

    rendeCounterBlock(text) {
        const block = document.createElement('div')
        block.className = 'clicks-counter'
        block.innerHTML = `${text}: <b></b>`
        return block
    }
}