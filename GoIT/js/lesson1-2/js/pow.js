var number = prompt('Введите число: ', '');
var  stepen = prompt('Введите степень: ', '');
function pow(number, stepen) {
  var result = number;
      for (var i = 1; i < stepen; i++) {
       result = number * result;
      }
      return result;
  }

if (stepen <= 1) {
    console.log("Вы ввели неверный степень: ");
}
  else {
    console.log('Ваш ответ:' +' ' +pow(number, stepen));
}
