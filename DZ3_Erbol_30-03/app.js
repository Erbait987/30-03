// ДЗ:
//  ⁃ дан массив [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50].
//  Пройдитесь циклом и выведите только те числа, которые начинаются на 2 и 5. Результат должен вывестись в новом массиве newArray
// -----------------------------------------------------------------------------------------------------
// N1
var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []
for(var myArray of array){
    var stringArray = myArray.toString()
    if(stringArray.charAt(0) === '2' || stringArray.charAt(0) === '5'){
        newArray.push(stringArray)
    }
}
console.log(newArray)
// -----------------------------------------------------------------------------------------------------
// Написать функцию (любой из видов пройденных на уроке) , которая принимает аргумент и возвращает его тип данных в консоли.
// Пример:    getDataType(false) => boolean    getDataType('hello world!') => string
// getDataType(42) => number
// -----------------------------------------------------------------------------------------------------
// N2
var myObject = {
    name: 'Erbol',
    group: '30-03'
}
var empty = null

// function here
var symbol = Symbol('1')
function getDataType(anyType){
    return console.log(typeof anyType)
}
getDataType(42)
getDataType('string')
getDataType(true)
getDataType(1n)
getDataType(myObject)
getDataType(empty) // тут офиц баг в js про который вы говорили
getDataType(symbol)
getDataType()
// -----------------------------------------------------------------------------------------------------
// ⁃ Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’].
//  Вам нужно посчитать каких тегов сколько штук.  Обязательные условия:  1. Конечный результат должен вывестись как объект {},
//  где ключ - это сам тег, а значение - это количество сколько раз этот тег встречается в массиве. 
// -----------------------------------------------------------------------------------------------------
// N3
var tegsArray = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var newTegsObject = {}
for(var tegs of tegsArray){
    if(newTegsObject[tegs]){
        newTegsObject[tegs]++
    }else{
        newTegsObject[tegs] = 1
    }
}
console.log(newTegsObject)
