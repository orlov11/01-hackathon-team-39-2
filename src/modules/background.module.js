import {Module} from '../core/module'
import { random } from "./../utils"

export class BackgroundModule extends Module {
  constructor(type,text) {
    super(type, text)
  }
  randomColorRGB()  {
    document.body.style.backgroundColor = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`
    document.body.style.transition = `background-color 500ms ease`
  }
}



