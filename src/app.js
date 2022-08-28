import { ColorClickModule } from './modules/color-click'
import './styles.css'

const myDrawing = new ColorClickModule('color-click', 'Цветной клик')
myDrawing.trigger()