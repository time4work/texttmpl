var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('template2.json', 'utf8'));
// console.log(obj);

var res = parse( obj['start'], obj );
console.log(res);
console.log();


function parse(e, obj){
	var regexp = /<\w*>/ig;

	console.log('- e:');
	console.log(e);
	console.log('-----');

	if ( Array.isArray(e) ){
		return parse( rand(e), obj );
	}
	else{
		if( /<\w*>/i.test(e) ){
			var result = '';
			var last_pos = 0;
			while ( foo = regexp.exec(e)) {

				result += e.substring(last_pos,foo.index);
				
				var ind = foo[0].replace(/[<>]*/g,'');
				result += parse( obj[ind], obj );

				last_pos = regexp.lastIndex;
			}
			return result;
		}else{
			return e;
		}
	}
}
function rand(items){
    return items[~~(Math.random() * items.length)];
    // return items[Math.floor(Math.random()*items.length)];
}
// var arr = [who,where,condition];
// arr = shuffle(arr);
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