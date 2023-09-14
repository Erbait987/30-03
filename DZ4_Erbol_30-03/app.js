
// ⁃ сделайте счетчик. Будет инпут и две кнопки (+/-).   При клике на + значение инпута увеличивается на 1, а при клике на - наоборот уменьшается. 
var buttonPlus = document.querySelector('.btn-plus')
var buttonMinus = document.querySelector('.btn-minus')
var count = document.querySelector('.input-form')

function btnClickPlus(){
    return count.value++
}
function btnClickMinus(){
    return count.value--
}

buttonPlus.addEventListener('click', btnClickPlus)
buttonMinus.addEventListener('click', btnClickMinus)

// ⁃ Напишите функцию, которая принимает в качестве параметра массив и математическое  действие.
//  Функция должна проходиться по массиву и делать с элементами то, что указано во втором параметре.
//   В качестве аргумента второго параметра должна быть функция 

var hideFunction = (array, callBack) => {
    var sum = 1
    for(var i of array){
       sum = callBack(sum, i)
    }
    console.log(sum);
}

var callBackMult = (a, b) => {
    return a * b
}
var callBackPlus = (a, b) => {
    return a + b
}
var callBackDivide = (a, b) => {
    return a / b
}
var callBackMinus = (a, b) => {
    return a - b
}

hideFunction([1,2,3,4,5,6], callBackMult)
hideFunction([1,2,3,4,5,6], callBackPlus)
hideFunction([1,2,3,4,5,6], callBackDivide)
hideFunction([1,2,3,4,5,6], callBackMinus)