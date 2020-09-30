function foobar(numbers){
	if(numbers === undefined || numbers === null){
		return {error: '`numbers` should not be null'};
	}

	if(typeof numbers !== 'object'){
		return {error: '`numbers` should be an array'};
	}

	if(numbers.length <= 0){
		return {error: '`numbers` array should not be empty'};
	}

	let resultText = '';

	for(element in numbers){
		if(typeof numbers[element] !== 'number' && typeof numbers[element] !== 'float'){
			return {error: 'Elements of `numbers` array should be `float` or `int`'};			
		}

		let textToAdd = '';
		let isFoo = numbers[element] % 3 === 0;
		let isBar = numbers[element] % 5 === 0;

		if(isFoo === true){
			textToAdd += 'foo';
		}
		
		if(isBar === true){
			textToAdd += 'bar';
		}

		if(isFoo === null && isBar === false){
	      textToAdd = numbers[element];
		}

	    if(element < numbers.length - 1){
	      textToAdd += ' ';
	    }

	    resultText += textToAdd;
	}

	return resultText;
}

let numbers = [1, 10, 3, 15, 20, 7, 65, 31, 27];

console.log(foobar(numbers));
