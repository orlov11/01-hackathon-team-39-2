export function checkInput(input) {
    while (isNaN(input) || input <= 0) {
        if (isNaN(input)) {
            input = +prompt('Некорректный ввод! Вводите, пожалуйста, только цифры:')
        }
        if (input <= 0) {
            input = +prompt('Введите число больше нуля:')
        }
    }
    return +input
}