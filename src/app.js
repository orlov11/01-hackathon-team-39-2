import './styles.css'
import { ClicksModule } from './modules/clicks.module'

const myClicks = new ClicksModule('some-type', 'Считать клики (за 3 секунды)')
alert('Lets start!')
myClicks.trigger()