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
    alert("Вы ввели неверный степень: ");
}
  else {
    alert('Ваш ответ:' +' ' +pow(number, stepen));
}
