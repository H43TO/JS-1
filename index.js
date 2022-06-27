// ------------------------------------------------------------------1------------------------------------------------------------

// const name = "Генератор захисного поля";
// const price = 1000;

// let ammount = prompt("Ammount:");
// let finalPrice = ammount * price;

// console.log("Обрано «" + name + "» , ціна за штуку " + finalPrice + " кредитів");

// ------------------------------------------------------------------2------------------------------------------------------------

// const total = 100;
// const ordered = prompt();

// if (total < ordered) {
//     console.log("Out of stock");
// }

// ------------------------------------------------------------------3------------------------------------------------------------

// const adminPass = "zsíroskenyér";
// let userPass = prompt("Please ender the password!");

// if (adminPass === userPass) {
//      console.log("corect!")
// } else {
//     console.log("The password was not correct!");
// }

// ------------------------------------------------------------------4------------------------------------------------------------

// const budget = 23580;
// const pricePerBot = 3000;

// let orderedAmmount = prompt();
// let finalPrice = pricePerBot * parseInt(orderedAmmount);

// function left(funds) {
//     return funds - finalPrice;
// }

// if ( finalPrice <= budget) {

//     console.log("You have " + left(budget) + " credist left!");

// } else {
//     console.log("Insufficient funds!");
// }

// ------------------------------------------------------------------5------------------------------------------------------------

// let order = prompt();
// let price;

// switch (order.toLowerCase()) {
//     case "китай":
//         price = 100;
//         console.log("Доставка в ", order ," буде коштувати " , price , " кредитів");
//         break;
//     case "чилі":
//         price = 250;
//         console.log("Доставка в ", order ," буде коштувати " , price , " кредитів");
//         break;
//     case "австралія":
//         price = 170;
//         console.log("Доставка в ", order ," буде коштувати " , price , " кредитів");
//         break;
//     case "індія":
//         price = 80;
//         console.log("Доставка в ", order ," буде коштувати " , price , " кредитів");
//         break;
//     case "ямайка":
//         price = 120;
//         console.log("Доставка в ", order ," буде коштувати " , price , " кредитів");
//         break;
//     default:
//         alert("У вашій країні доставка недоступна");
//         break;
// }

// ------------------------------------------------------------------6------------------------------------------------------------

let input;
let total = 0;

while (true) {
    input = prompt();
    if (input === null) {
        alert("Загальна сума чисел дорівнює " + total);
        break;
    }
    total = parseInt(total) + parseInt(input);
    console.log(total, input);
}