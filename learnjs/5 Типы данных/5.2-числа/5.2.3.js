// Создайте функцию readNumber, которая будет запрашивать ввод числового
//  значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber(){
let number;
while ( !isFinite(number)){
    number = prompt('Введите число')
}
if (num === null || num === '') return null;
return +num;
}

