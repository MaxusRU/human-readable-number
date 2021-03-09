module.exports = function toReadable (number) {

//	number = 11;
	o = Math.abs(number).toString().split('');//.reverse().join('');
	newArray = [];
	numLength = Math.abs(number).toString().length - 1;
//	for (n = 0;  n < number.toString().length; n++){
//	for (n = numLength; n >= 0; n--){
//	console.log('numLength = ' + numLength);
//	console.log('o[numLength] = ' + o[numLength]);
//  console.log('o[numLength-1] = ' + o[numLength-1]);
	
	if (((+o[numLength]) == 0) && (numLength == 0)) // 0
		newArray.unshift('zero');
	if ((+o[numLength-1]) != 1) // 1-9
		switch(+o[numLength]) {  
			case 1:
				newArray.unshift('one');
				break;
			case 2:
				newArray.unshift('two');
				break;
			case 3:
				newArray.unshift('three');
				break;
			case 4:
				newArray.unshift('four');
				break;
			case 5:
				newArray.unshift('five');
				break;
			case 6:
				newArray.unshift('six');
				break;
			case 7:
				newArray.unshift('seven');
				break;				
			case 8:
				newArray.unshift('eight');
				break;
			case 9:
				newArray.unshift('nine');
				break;
/*			case 0:
				newArray.unshift('zero');
				break;				
*/
//			default:
//				newArray.unshift('***';
//				break;
		}

  	else if ((+o[numLength-1]) == 1) // 10-19
      	switch(+o[numLength]) {
			case 0:
				newArray.unshift('ten');
				break;				
			case 1:
				newArray.unshift('eleven');
				break;
			case 2:
				newArray.unshift('twelve');
				break;
			case 3:
				newArray.unshift('thirteen');
				break;
			case 4:
				newArray.unshift('fourteen');
				break;
			case 5:
				newArray.unshift('fifteen');
				break;
			case 6:
				newArray.unshift('sixteen');
				break;
			case 7:
				newArray.unshift('seventeen');
				break;				
			case 8:
				newArray.unshift('eighteen');
				break;
			case 9:
				newArray.unshift('nineteen');
				break;
			default:
				newArray.unshift('***');
				break;
			}

	if (((+o[numLength-1]) >= 2)/* && (+o[numLength]) == 0 */) // 20-99
      	switch(+o[numLength-1]) {
			case 2:
				newArray.unshift('twenty');
				break;
			case 3:
				newArray.unshift('thirty');
				break;
			case 4:
				newArray.unshift('forty');
				break;
			case 5:
				newArray.unshift('fifty');
				break;
			case 6:
				newArray.unshift('sixty');
				break;
			case 7:
				newArray.unshift('seventy');
				break;				
			case 8:
				newArray.unshift('eighty');
				break;
			case 9:
				newArray.unshift('ninety');
				break;
			default:
				newArray.unshift('***');
				break;
		}

	if (((+o[numLength-2]) > 0)/* && (+o[numLength]) == 0 */) // 20-99
//      newArray.unshift('twenty');
      	switch(+o[numLength-2]) {
			case 1:
				newArray.unshift('one hundred');
				break;
			case 2:
				newArray.unshift('two hundred');
				break;
			case 3:
				newArray.unshift('three hundred');
				break;
			case 4:
				newArray.unshift('four hundred');
				break;
			case 5:
				newArray.unshift('five hundred');
				break;
			case 6:
				newArray.unshift('six hundred');
				break;
			case 7:
				newArray.unshift('seven hundred');
				break;				
			case 8:
				newArray.unshift('eight hundred');
				break;
			case 9:
				newArray.unshift('nine hundred');
				break;
			}

	return(newArray.join(' '));
}

//console.log(number + ' = ' + newArray.join(' '));
//console.log(o);
//	number.toString().length - 1 единицы
//	number.toString().length - 2 десятки
//	number.toString().length - 3 сотни
//	function count1
//	function count10
//	function count100
// else if (