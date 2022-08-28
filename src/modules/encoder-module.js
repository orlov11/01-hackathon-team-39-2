import { Module } from '../core/module'
import IMG from '../assets/img.svg'
export class Encoder extends Module {
	constructor(type, text) {
		super(type, text)
		this.letters = [
			'й',
			'ц',
			'у',
			'к',
			'е',
			'н',
			'г',
			'ш',
			'.',
			'з',
			'х',
			'ъ',
			'ф',
			'ы',
			'в',
			'а',
			'п',
			'р',
			'о',
			'л',
			'д',
			'э',
			'я',
			'ч',
			'с',
			'м',
			'и',
			'т',
			'ь',
			'б',
			'ю',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'0',
			'щ',
			',',
			'ж',
			' ',
		]
		this.code = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			' 9',
			'0',
			'<',
			'Q',
			'{',
			':',
			'+',
			'(',
			')',
			'P',
			'&',
			'A',
			'>',
			'_',
			'@',
			'?',
			'!',
			'|',
			'=',
			'*',
			'^',
			'$',
			'}',
			'#',
			'I',
			'O',
			'l',
			'v',
			'c',
			't',
			'q',
			'm',
			'e',
			'%',
			'y',
			'"',
			'№',
		]
	}

	renderHTML() {
		document.body.insertAdjacentHTML(
			'beforeend',
			`
        <div class="container">
    <div class="encryption">
        <h2>Зашифровать</h2>
        <div class="input">
            <input type="text" class="encryption__input " 
            placeholder="Введите любой текст например 'Привет'">
            <button class="rest" id="one">
                <img src="${IMG}" alt="" class="rest__image">
            </button>
        </div>
        <div class="div__en"></div>
        <button class="encryption__btn">Защифровать</button>
    </div>
    <div class="decryption">
        <h2>Расшифровать</h2>
        <div class="input">
            <input type="text" class="decryption__input" placeholder="Введите шифр,чтобы получить перевод">
            <button class="rest" id="two" >
                <img src="${IMG}" alt="" class="rest__image">
            </button>
        </div>
         <div class="div__ds"></div>
        <button class="decryption__btn">Расшифровать</button>
    </div>
    
    <button class="close_btn"  >
                <img src="${IMG}" alt="" class="close">
            </button>
</div>
        `,
		)
	}

	encoding() {
		this.btnEnc = document.querySelector('.encryption__btn')
		this.btnDec = document.querySelector('.decryption__btn')
		this.textEn = document.querySelector('.encryption__input')
		this.textDec = document.querySelector('.decryption__input')
		this.divEn = document.querySelector('.div__en')
		this.divDs = document.querySelector('.div__ds')
		this.rest1 = document.querySelector('#one')
		this.rest2 = document.querySelector('#two')
		this.rest = document.querySelectorAll('.rest')

		this.restInput()
		this.btnEnc.addEventListener('click', () => {
			this.divEn.innerHTML = this.myWrap(this.encryption(this.textEn.value))
		})

		this.btnDec.addEventListener('click', () => {
			this.divDs.innerHTML = this.myWrap(this.decryption(this.textDec.value))
		})

		this.textEn.addEventListener('input', () => {
			if (this.textEn.value.length > 1) {
				this.rest1.style.display = 'block'
			} else if (this.textEn.value.length == 0) {
				this.rest1.style.display = 'none'
			}
		})

		this.textDec.addEventListener('input', () => {
			if (this.textDec.value.length > 1) {
				this.rest2.style.display = 'block'
			} else if (this.textDec.value.length == 0) {
				this.rest2.style.display = 'none'
			}
		})
	}

	decryption(str) {
		let decArr = str.split('')
		let res2 = []

		decArr.forEach(i => {
			res2.push(this.letters[this.code.indexOf(i)])
		})

		res2 = res2.join('')
		return res2
	}

	encryption(str) {
		str = str.toLowerCase()
		let arr2 = str.split('')

		let res = []

		arr2.forEach(i => {
			res.push(this.code[this.letters.indexOf(i)])
		})
		res = res.join('')
		return res
	}

	myWrap(val) {
		if (val.length > 40) {
			return `<div class="encryption__res">${val.substr(0, 35)}<br>${val.substr(
				35,
				50,
			)}</div>`
		} else {
			return `<div class="encryption__res">${val}</div>`
		}
	}

	restInput() {
		this.rest.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (i == 0) {
					this.textEn.value = ''
					item.style.display = 'none'
					this.divEn.innerHTML = ''
				} else if (i == 1) {
					this.textDec.value = ''
					item.style.display = 'none'
					this.divDs.innerHTML = ''
				}
			})
		})
	}

	close() {
		this.end = document.querySelector('.close_btn')
		this.cot = document.querySelector('.container')
		this.end.addEventListener('click', () => {
			console.log(123)
			this.cot.remove()
		})
	}

	trigger() {
		this.renderHTML()
		this.encoding()
		this.close()
	}
}
