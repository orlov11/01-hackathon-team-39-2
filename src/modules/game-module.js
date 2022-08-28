import { Module } from '../core/module'
import { random } from '../utils'

export class GameLuck extends Module {
  constructor(type, text) {
    super(type, text)
    this.card = document.createElement('div')
    this.gameOver = document.createElement('div')
    this.title = document.createElement('h2')
    this.cardItems = document.createElement('div')
    this.btn = document.createElement('button')
  }
  // Добавляем стили
  settingsHtml() {
    this.card.classList.add('card')
    this.cardItems.classList.add('card__items')
    this.btn.classList.add('btn')
    this.counterAll = 0
    this.counterWin = 0
  }
  // Создаем разметку
  renderHTML() {
    this.settingsHtml()
    this.btn.textContent = 'Результат'
    this.title.textContent =
      'Протестируйте вашу удачу! Выбирайте билеты, а когда решите что хватит нажмите "Результат"'
    this.cardItems.innerHTML = '' // удаляем следы предыдущей
    this.cardItems.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="card__item">1</div>
        <div class="card__item">2</div>
        <div class="card__item">3</div>
        <div class="card__item">4</div>
        <div class="card__item">5</div>
        <div class="card__item">6</div>
        <div class="card__item">7</div>
        <div class="card__item">8</div>
        <div class="card__item">9</div>
        `,
    )
    this.card.append(this.gameOver)
    this.card.append(this.title)
    this.card.append(this.cardItems)
    this.card.append(this.btn)
    return this.card
  }
  // Скрипт для процесса игры
  gameProcess() {
    const card = document.querySelectorAll('.card__item') // получпем игровые карточки
    card.forEach((item, i) => {
      item.addEventListener('click', () => {
        // обабатываем клик по кнокретной крточки
        this.counterAll++ // прибавляем счетчик кликов
        if (
          // Логика счета удач с увеличенным шансом
          i + 1 === random(1, 3) ||
          i + 1 === random(3, 6) ||
          i + 1 === random(6, 9) ||
          i + 1 === random(1, 9) ||
          i + 1 === random(1, 9)
        ) {
          // обрабатываем если совпали значения
          this.counterWin++
          item.classList.add('card__item-win')
          item.textContent = 'You Win!'
          setTimeout(() => {
            item.classList.remove('card__item-win')
            item.textContent = i + 1
          }, 1000)
        } else {
          // обрабатываем если не совпали значения
          item.classList.add('card__item-lose')
          item.textContent = 'Not this time!'
          setTimeout(() => {
            item.classList.remove('card__item-lose')
            item.textContent = i + 1
          }, 1000)
        }
      })
    })
  }
  // скрипт конца игры
  gameOverScript() {
    this.btn.addEventListener('click', () => {
      if (this.counterAll == 0) {
        alert('Для определения удачи сыграйте хотябы один раз!')
      } else {
        this.card.innerHTML = `<h1>Ваша удача: <span class='result'>${Math.ceil(
          (this.counterWin * 100) / this.counterAll,
        )} </span>%</h1> ` // Показываем результат
        setTimeout(() => {
          // обнуляем игрвое поле для следующей игры
          this.counterAll = 0
          this.counterWin = 0
          this.cardItems.remove()
          this.card.remove()
        }, 3000)
      }
    })
  }

  trigger() {
    document.body.append(this.renderHTML())
    this.gameProcess()
    this.gameOverScript()
  }
}
