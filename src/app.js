import './styles.css'
import { ContextMenu } from './menu'
import {
	click,
	backgroun,
	messege,
	myTimer,
	figure,
	game,
	sound,
	encod,
} from './menu'

const menu = new ContextMenu()

menu.add(backgroun.toHTML())
menu.add(click.toHTML())
menu.add(messege.toHTML())
menu.add(myTimer.toHTML())
menu.add(figure.toHTML())
menu.add(game.toHTML())
menu.add(sound.toHTML())
menu.add(encod.toHTML())

menu.callUpMenu()
menu.runModule()
