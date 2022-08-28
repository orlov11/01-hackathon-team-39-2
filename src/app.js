import './styles.css'
import { ClicksModule } from './modules/clicks.module'

const myClicks = new ClicksModule('clicks-counter', 'Считать клики (за 3 секунды)')
alert('Lets start!')
myClicks.trigger()