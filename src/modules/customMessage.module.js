import { Module } from '@/core/module'
import { random } from '@/utils'

export class Message extends Module {
  #container
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#container.className = 'message'
  }

  trigger() {
    const message = document.createElement('p')

    console.log(randomMessages[random(0, randomMessages.length - 1)])

    message.textContent = randomMessages[random(0, randomMessages.length - 1)]

    this.#container.style.position = 'absolute'
    this.#container.style.top = '10px'
    this.#container.style.right = '30px'
    this.#container.append(message)

    setInterval(() => {
      message.remove()
    }, 3000)

    return document.body.prepend(this.#container)
  }
}

const randomMessages = [
  'Самая трудно излечимая фобия – боязнь страха',
  'Земля делает полный оборот вокруг своей оси за 23 часа 56 минут и 4 секунды.',
  'Лимон содержит больше сахара, чем клубника.',
  'JavaScript один из самых популярных языков программирования в мире',
  'Емкость мозга человека превышает 4 терабайта.',
  'Среднее облако весит порядка 500 тонн, столько же весят 80 слонов',
]
