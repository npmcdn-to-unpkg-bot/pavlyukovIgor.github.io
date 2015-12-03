var arrNames = [];

 for (var i = 0; i < 5; i++) {
    arrNames.push(prompt('Введите имя:'));
 }
console.log(arrNames);
var name = prompt('Введите свое имя:');

for (var i = 0; i < arrNames.length; i++) {
    if (name == arrNames[i]) {
        alert(name + ' ,' + 'Вы успешно вошли!');
        break;
    }
}
if(name != arrNames[i]){
    alert('Ошибка!');
}
