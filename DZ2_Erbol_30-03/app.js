//N1
var starbucks = {
    coffee: {
        americano: 'Американо — одиночная порция эспрессо, разбавленная горячей водой, классический кофе.',
        cappuccino: 'Капучино — эспрессо с равными частями подогретого молока и молочной пены.',
        latte: 'Латте — эспрессо с молоком, подогретым до пара, и небольшим количеством молочной пены.',
        espresso: 'Эспрессо — сильный кофе, приготовленный путем прохождения горячей воды через молотое кофейное зерно.',
        lungo: 'Лунго — разновидность эспрессо с большим объемом горячей воды, более слабый вкус.',
        ristretto: 'Ристретто — суперкрепкий кофе, сделанный с минимальным объемом воды, очень крепкий вкус.',
        flatwhite: 'Флэт уайт — кофейный напиток с эспрессо и молоком, с мягкой пеной.',
        cortado: 'Кортадо — короткий кофейный напиток, состоящий из эспрессо и небольшого количества молока, идеальный баланс.',
        mokaccino: 'Мокачино — кофейный напиток, сочетающий в себе эспрессо, горячее молоко и какао, обычно с молочной пеной.'
    },
    tea: {
        blackTea:{
            assam:'Черный чай Ассам - Крепкий и насыщенный черный чай с нотами сухих фруктов.',
            earlgrey:'Черный чай Эрл Грей - Ароматный черный чай с бергамотовым маслом, легко узнаваемый по своему цитрусовому вкусу.',
            darjeeling:'Черный чай Дарджилинг - Престижный черный чай с цветочными нотами и легкой остротой.',
            minthoneytea:'Чай с мятой и медом - Черный чай с мятой и медом, сочетание сладости и прохлады.'
        },
        greenTea:{
            jasmine:'Жасмин - Легкий зеленый чай, ароматизированный цветками жасмина, создает приятный аромат и вкус.',
            zhujun:'Чжу Цзюн - Зеленый чай с нежными цветочными нотами и сладким послевкусием.',
            melissa:'Чай с мелиссой - Зеленый чай с добавлением мелиссы, создающей освежающий цитрусовый вкус.',
            peppermint:'Мятный чай - Ароматный зеленый чай с мятой, придает ощущение свежести.',
        }
    },
    soda: {
        cocacola:'КокаКола - Известный газированный напиток с освежающим вкусом и ароматом.',
        pepsi:'Пепси - Конкурент Кока-Коле, также с приятным вкусом и искристостью.',
        fanta:'Фанта - Лимонад с ярким цитрусовым вкусом и освежающими пузырьками.',
        sprite:'Спрайт - Освежающий апельсиновый напиток с фруктовым вкусом.',
        sevenUp:'7UP - Безалкогольный лимонад с нотками лимона и лайма.',

    }
}

alert('Здравствуйте! Добро пожаловать в Starbucks если хотите заказать напитки нажмите ОК')
var drink = prompt('что вы хотите: coffee,tea или soda? например: soda').toLowerCase()

if(drink === 'coffee'){
    var nameOfCoffee = prompt('какой вид кофе хотите? например: Latte').toLowerCase()
    if (starbucks.coffee.hasOwnProperty(nameOfCoffee)) {
        alert('Ваш заказ принят!вы заказли: ' + starbucks.coffee[nameOfCoffee])
    } else {
        alert('Извините, такого вида кофе нет в меню Starbucks.')
    }

}else if(drink === 'tea'){
    var typeOfTea = prompt('какой вид чая вы хотите? например: green или black').toLowerCase()
    var nameOfTea
    if(typeOfTea === 'green'){
        nameOfTea = prompt('какой вид зеленого чая вы хотите? например: Jasmine').toLowerCase()
        if (starbucks.tea.greenTea.hasOwnProperty(nameOfTea)) {
            alert('Ваш заказ принят!вы заказли: ' + starbucks.tea.greenTea[nameOfTea])
        }else{
            alert('Извините, такого чая нет в меню Starbucks.')
        }
    }else if(typeOfTea === 'black'){
        nameOfTea = prompt('какой вид черного чая вы хотите? например: minthoneytea').toLowerCase()
        if (starbucks.tea.blackTea.hasOwnProperty(nameOfTea)) {
            alert('Ваш заказ принят!вы заказли: ' + starbucks.tea.blackTea[nameOfTea])
        }else{
            alert('Извините, такого чая нет в меню Starbucks.')
        }
    }
    else{
        alert('такого вида чая нет в меню Starbucks.')
    }
    
}else if(drink === 'soda'){
    var nameOfSoda = prompt('какой вид газировки хотите? например: CocaCola').toLowerCase()
    if (starbucks.soda.hasOwnProperty(nameOfSoda)) {
        alert('Ваш заказ принят!вы заказли: ' + starbucks.soda[nameOfSoda])
    }else{
        alert('Извините, такой газировки нет в меню Starbucks.')
    }
}else{
    alert('такого напитка нет в меню Starbucks.')
}
//---------------------------------------------------------------------------------------------------------------
//N2
//---------------------------------------------------------------------------------------------------------------
var cities = ['Bishkek', 'Los Angeles', 'Chicago',  'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for(var i = 0; i < cities.length; i++){
    // console.log(i)
    if(cities[i].length >= 9){
        console.log(cities[i])
    }
    continue
}
// N3
//---------------------------------------------------------------------------------------------------------------
var dayOfTheWeek = Number(prompt('Введите число от 1 до 7 и узнайте какой день недели'))
switch (dayOfTheWeek) {
    case 1:
        console.log('это - Понедельник');
        break;
    case 2:
        console.log('это - Вторник');
        break;
    case 3:
        console.log('это - Среда');
        break;
    case 4:
        console.log('это - Четверг');
        break;
    case 5:
        console.log('это - Пятница');
        break;
    case 6:
        console.log('это - Суббота');
        break;
    case 7:
        console.log('это - Воскресенье');
        break;
    default:
        console.log('вы допустили ошибку! введите числа от 1 до 7');
        break;
}