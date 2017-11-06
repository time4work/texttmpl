var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('template.json', 'utf8'));
var obj = JSON.parse(fs.readFileSync('template2.json', 'utf8'));
// console.log(obj);


var who = rand(obj.who.adjective)+" "
	+rand(obj.who.noun)+" "
	+rand(obj.who.nationality)+" "
	+rand(obj.who.type)+" "
	+rand(obj.who.name);
// var where = rand(obj.where.time)+" "+rand(obj.where.location);
var condition = rand(obj.condition.do)+" "
	+rand(obj.condition.noun)+" "
	+rand(obj.condition.adjective)+" "
	+rand(obj.condition.and)+" "
	+rand(obj.condition.do2)+" "
	+rand(obj.condition.event);

var consequent = rand(obj.consequent.result);

// console.log(who+" "+where+" "+condition+" "+consequent);
console.log(who+" "+condition+". "+consequent);



function rand(items){
    return items[~~(Math.random() * items.length)];
    // return items[Math.floor(Math.random()*items.length)];
}
// var text = '';
// var arr = [who,where,condition];
// arr = shuffle(arr);

// for(var i in arr){
// 	text += arr[i]+" "
// }
// text += consequent
// console.log(text);
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}