import { Module } from '../core/module'
import './color-click-styles.css'

export class ColorClickModule extends Module {
    constructor(type, text) {
        super(type, text)
    }
    trigger() {
        document.addEventListener('click', event => {
            const circle = document.createElement('div')
            const X = event.clientX
            const Y = event.clientY
            const color = `hsl(${Math.round(Math.random() * 255)}, 100%, 40%)`
            const radius = Math.round(Math.random() * 140) + 20

            this.renderCircle(circle, X, Y, radius, color)
            this.growCircle(circle, X, Y, radius)
        })
    }

    renderCircle(circle, X, Y, radius, color) {
        circle.className = 'mouse-circle'
        circle.style.backgroundColor = color
        circle.style.left = `${X}px`
        circle.style.top = `${Y}px`
        let transitionTime = 0.5
        if (radius < 80) transitionTime = 0.4
        circle.style.transition = `all ${transitionTime}s ease`
        document.body.append(circle)
    }

    growCircle(circle, X, Y, radius) {
        setTimeout(() => {
            circle.style.width = `${radius * 2}px`
            circle.style.height = `${radius * 2}px`
            circle.style.left = `${X - radius}px`
            circle.style.top = `${Y - radius}px`
        }, 0)
        setTimeout(() => {
            circle.style.opacity = '0'
        }, 0)
        setTimeout(() => {
            circle.remove()
        }, 500)
    }
}