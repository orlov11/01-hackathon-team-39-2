import { Module } from '../core/module'
import './clicks-styles.css'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.duration = 10000
        this.singleClicks = 0
        this.doubleClicks = 0
    }

    trigger() {
        const startTime = Date.now()
        const infoBlock = document.createElement('div')
        const interval_id = this.renderInfoBlock(infoBlock)
        this.renderStatusBlock(infoBlock, interval_id)

        const singleClickCounterBlock = this.renderCounterBlock('Single clicks')
        const singleClickNumber = this.renderClickNumber(singleClickCounterBlock)

        const doubleClickCounterBlock = this.renderCounterBlock('Double clicks')
        const doubleClickNumber = this.renderClickNumber(doubleClickCounterBlock)

        let isSingleClick = false

        document.addEventListener('click', () => {
            const clickTime = Date.now()
            if (clickTime - startTime < this.duration) {
                isSingleClick = !isSingleClick
                setTimeout(() => {
                    if (isSingleClick) {
                        this.singleClicks += 1
                        singleClickNumber.textContent = this.singleClicks
                        isSingleClick = !isSingleClick
                    } else {
                        this.doubleClicks += 1
                        if (this.doubleClicks % 2 === 0) {
                            doubleClickNumber.textContent = this.doubleClicks / 2
                        }
                    }
                }, 200)
            }
        })
    }

    renderInfoBlock(block) {
        block.className = 'info-block'
        block.textContent = 'Click anywhere!'
        document.body.append(block)
        const interval_id = setInterval(() => {
            if (block.classList.contains('hide')) {
                block.classList.remove('hide')
            } else {
                block.classList.add('hide')
            }
        }, 200)
        return interval_id
    }

    renderStatusBlock(infoBlock, interval_id) {
        const statusBlock = document.createElement('div')
        statusBlock.className = 'time-status'
        statusBlock.textContent = 'Counting clicks...'
        document.body.append(statusBlock)
        setTimeout(() => {
            statusBlock.textContent = 'Finished'
            clearInterval(interval_id)
            infoBlock.classList.add('hide')
        }, this.duration)
    }

    renderCounterBlock(text) {
        const block = document.createElement('div')
        block.className = 'clicks-counter'
        block.innerHTML = `${text}: <b></b>`
        return block
    }

    renderClickNumber(parentBlock) {
        const childBlock = parentBlock.querySelector('b')
        childBlock.textContent = '0'
        document.body.append(parentBlock)
        return childBlock
    }
}