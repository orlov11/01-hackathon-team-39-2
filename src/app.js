import './styles.css'
import { TimerModule } from './modules/timer.module'
import { checkInput } from './modules/check-input'

const myTimer = new TimerModule('timer', 'Включить таймер')
let timerValue = +prompt('Установите ваш таймер (в секундах):')
timerValue = checkInput(timerValue)
myTimer.trigger(timerValue)