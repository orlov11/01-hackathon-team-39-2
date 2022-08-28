import { Module } from '@/core/module'
import { random } from '@/utils'

export class Message extends Module {
  #container
  constructor(type, text) {
    super(type, text)
    this.#container = document.createElement('div')
    this.#container.className = 'message'

    this.randomMessages = [
      'Самая трудно излечимая фобия – боязнь страха',
      'Земля делает полный оборот вокруг своей оси за 23 часа 56 минут и 4 секунды.',
      'Лимон содержит больше сахара, чем клубника.',
      'JavaScript один из самых популярных языков программирования в мире',
      'Емкость мозга человека превышает 4 терабайта.',
      'Среднее облако весит порядка 500 тонн, столько же весят 80 слонов',
    ]
  }

  trigger() {
    const message = document.createElement('p')
    message.style.cssText = `

    background-color: rgb(35, 35, 35);
    color: white;
    padding: 5px;
    border-radius: 10px 0px 10px 10px;
    margin-top: 5px;
    `

    this.#container.style.position = 'absolute'
    this.#container.style.top = '8px'
    this.#container.style.right = '6px'
    this.#container.style.display = 'Flex'
    this.#container.style.flexDirection = 'column'
    this.#container.append(message)

    message.textContent =
      this.randomMessages[random(0, this.randomMessages.length - 1)]

    setInterval(() => {
      message.remove()
    }, 4000)

    return document.body.prepend(this.#container)
  }
}
