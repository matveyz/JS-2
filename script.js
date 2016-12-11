var x1 = 14;
var y1 = 26;
var x2 = prompt( "Number for x2", "8" );
var y2 = prompt( "Number for y2", "22" );
// Обчисленя дистанції між точками
var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
//Виведення повідомлення з результатом 
alert( "The distance between points A(14, 26) and B(8, 22)" + " is " + distance );
