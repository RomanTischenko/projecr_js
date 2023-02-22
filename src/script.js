'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start()

let appData = {
    budget: money,
    timeData: time,
    expenses: {},    
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpanses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется", "");

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string'
            && (typeof(b)) != null && a != '' && b != "" && a.length < 50) {
            console.log('done');

            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpanses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш ежедневный бюджет состовляет: " + appData.moneyPerDay + "руб");
}

detectDayBudget();

// ЦИКЛ DO...WHILE
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется", "");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("Все верно");

//         appData.expenses[a] = b;
//     } else {
//         console.log("Ошибка");
//         i--;
//     }
//     i++;
// }
// while (i < 2);

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
    console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 1500) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 1500) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    };
}

detectLevel();

function cheakSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}

cheakSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = +prompt("Статья необязательных расходов?")
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log (appData.questionOptExpenses);
    } 
}

chooseOptExpenses();
