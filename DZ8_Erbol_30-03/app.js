
const inputOne = document.querySelector('.input-one')
const inputTwo =  document.querySelector('.input-two')

const outputOne = document.querySelector('.output-one')
const outputTwo =  document.querySelector('.output-two')

const btnOne = document.querySelector('.btn-1')
const btnTwo = document.querySelector('.btn-2')

btnOne.onclick = function() {
    const inputText = inputOne.value
    function isPalindrome(str) {
        str = str.replace(/\s/g, '').toLowerCase();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }
    const palindrome = isPalindrome(inputText)
    outputOne.value = palindrome ? 'true' : 'false'
}

btnTwo.onclick = function(){
    const newArr = []
    const inputArray = inputTwo.value.toLowerCase().replace(/\s/g, '').split('');
    for(let i of inputArray){
        newArr.unshift(i)
    }
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }
    const isEqual = arraysEqual(newArr, inputArray);
    outputTwo.value = isEqual ? 'Палиндром' : 'Не палиндром';

    arraysEqual(newArr, inputArray)
}