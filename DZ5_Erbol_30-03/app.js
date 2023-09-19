const btn = document.querySelector('.btn')
const wrapper = document.querySelector('.wrapper')
btn.addEventListener('click', () => {
    let text = prompt('введите любой текст')
    if(text.trim() === ''){
        alert('ERROR вы ничего не ввели')
        wrapper.textContent = '' //типо после ошибки чистит текст
    }else{
        wrapper.textContent = text
    }
})


let array = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', '456']
const bigArray = array.reduce((newArr, element) => {
    if (typeof element === 'string' && element.length > 3) {
        newArr[0].push(element)
    } else if (typeof element === 'number' && element.toString().length > 3) {
        newArr[1].push(element)
    } else if (typeof element === 'boolean' && String(element).length > 3) {
        newArr[2].push(element)
    } else if (element === null && String(element).length > 3) {
        newArr[3].push(element)
    } else if (element === undefined && String(element).length > 3) {
        newArr[4].push(element)
    }
    return newArr
}, [[], [], [], [], []])

bigArray.sort((a, b) => b.length - a.length)

console.log(bigArray);

