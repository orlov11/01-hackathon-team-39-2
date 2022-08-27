import {Module} from '../core/module'
import { random } from "./../utils"

const randomColorRGB = () =>
`rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`

export class BackgroundModule extends Module {
  constructor(type,text) {
    super(type, text)
  }
  trigger()  {
    document.body.style.backgroundColor = randomColorRGB()
    document.body.style.transition = `background-color 500ms ease`
  }
}



