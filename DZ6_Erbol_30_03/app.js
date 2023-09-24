// 1task
const nameBookWithY = []
const nameBookWithoutY = []

function nameOfBookFromU(...rest){
  for (let i = 0; i < rest.length; i++) {
    if (rest[i].toLowerCase().includes('у')) {
        nameBookWithY.push(rest[i])
    }else{
        nameBookWithoutY.push(rest[i])
    }
  }
}

const books = ['Война и мир','Преступление и наказание','Мастер и Маргарита','Унесенные ветром','Гарри Поттер и философский камень','Гордость и предубеждение','Исчезнувшая']
nameOfBookFromU(...books)

console.log(nameBookWithY);
console.log(nameBookWithoutY);

// 2 task
const multyBy = document.querySelector('#multyply')
const plysBy = document.querySelector('#plus')
const minusBy = document.querySelector('#minus')
const devideBy = document.querySelector('#devide')

multyBy.addEventListener('click',() => calc('*'))
plysBy.addEventListener('click',() => calc('+'))
minusBy.addEventListener('click',() => calc('-'))
devideBy.addEventListener('click',() => calc('/'))

function calc(operator){
    let result
    let firstNumber = parseFloat(document.querySelector('#firstNum').value);
    let secondNumber = parseFloat(document.querySelector('#secondNum').value);
    switch (operator) {
        case '+':
            alert(result = firstNumber + secondNumber)
            document.querySelector('#secondNum').classList.remove('red');
            break;
        case '-':
            alert(result = firstNumber - secondNumber)
            document.querySelector('#secondNum').classList.remove('red');

            break;
        case '*':
            alert(result = firstNumber * secondNumber)
            document.querySelector('#secondNum').classList.remove('red');

            break;
        case '/':
            if(secondNumber !== 0){
                alert(result = firstNumber / secondNumber)
                document.querySelector('#secondNum').classList.remove('red');

            }else{
                document.querySelector('#secondNum').classList.add('red');
                alert('На ноль делить нельзя!')
            }
            break;
    }
}
<<<<<<< HEAD


=======
>>>>>>> cbc1f0d9d650d1aae22162746f040928d998d797
