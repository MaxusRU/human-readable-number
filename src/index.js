module.exports = function toReadable (number) {
//	toReadable(1); // Will return 'one'
//	toReadable(997); //will return 'nine hundred ninety seven'
//	let i = -192;
//	let o;
//	number = 987;
	o = Math.abs(number).toString().split('');//.reverse().join('');
	
//	number.toString().length - 1 единицы
//	number.toString().length - 2 десятки
//	number.toString().length - 3 сотни

//	function count1
//	function count10
//	function count100

 	
	
	for (n = 0;  n < number.toString().length; n++){
//		console.log(o[n]);
  		if (n == 2)
			switch(+o[n]) {
			case 1:
				o[n] = 'one';
				break;
			case 2:
				o[n] = 'two';
				break;
			case 3:
				o[n] = 'three';
				break;
			case 4:
				o[n] = 'four';
				break;
			case 5:
				o[n] = 'five';
				break;
			case 6:
				o[n] = 'six';
				break;
			case 7:
				o[n] = 'seven';
				break;				
			case 8:
				o[n] = 'eight';
				break;
			case 9:
				o[n] = 'nine';
				break;
			case 0:
				o[n] = 'zero';
				o.length--;
				break;				
//			default:
//				o[n] = '***';
//				break;
		}
	if (n == 1)
			switch(+o[n]) {
			case 1:
//				o[n] = '*one*';
	
				switch(+o[n+1]) {
				case 1:
					o[n] = 'eleven';
					o.length--;
					break;
				case 2:
					o[n] = 'twelve';
					o.length--;
					break;
				case 3:
					o[n] = 'thirteen';
					o.length--;
					break;
				case 4:
					o[n] = 'fourteen';
					o.length--;
					break;
				case 5:
					o[n] = 'fifteen';
					o.length--;
					break;
				case 6:
					o[n] = 'sixteen';
					o.length--;
					break;
				case 7:
					o[n] = 'seventeen';
					o.length--;
					break;				
				case 8:
					o[n] = 'eighteen';
					o.length--;
					break;
				case 9:
					o[n] = 'nineteen';
					o.length--;
					break;
				case 0:
					o[n] = '*zero*';
					break;				
				default:
					o[n] = '***';
					break;
			}
	
				break;
			case 2:
				o[n] = 'twenty';
				break;
			case 3:
				o[n] = 'thirty';
				break;
			case 4:
				o[n] = 'forty';
				break;
			case 5:
				o[n] = 'fifty';
				break;
			case 6:
				o[n] = 'sixty';
				break;
			case 7:
				o[n] = 'seventy';
				break;				
			case 8:
				o[n] = 'eighty';
				break;
			case 9:
				o[n] = 'ninety';
				break;
			case 0:
//				o[n] = '*zero*';
				o[n] = o[n+1];
				o.length--;
				break;				
			default:
				o[n] = '***';
				break;
		}
		if (n == 0)
			switch(+o[n]) {
			case 1:
				o[n] = 'one hundred';
				break;
			case 2:
				o[n] = 'two hundred';
				break;
			case 3:
				o[n] = 'three hundred';
				break;
			case 4:
				o[n] = 'four hundred';
				break;
			case 5:
				o[n] = 'five hundred';
				break;
			case 6:
				o[n] = 'six hundred';
				break;
			case 7:
				o[n] = 'seven hundred';
				break;				
			case 8:
				o[n] = 'eight hundred';
				break;
			case 9:
				o[n] = 'nine hundred';
				break;
			case 0:
				o[n] = '*zero*';
				break;				
			default:
				o[n] = '***';
				break;
		}

	}
//console.log(o.join(' '));
//console.log(number.toString().length);

	return o.join(' ');
	
//console.log(o);
//console.log(typeof(o));
}
