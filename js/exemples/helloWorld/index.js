function greetings(name){

	if(name === undefined || name === null){
		return {error: '`name` should not be null'};		
	}
	
	if(typeof name !== "string"){
		return {error: '`name` should be a string'};
	}

	if(name.length <= 0){
		return {error: '`name` length should be greater than 0'};
	}

	return 'Salut ' + name;
}


let personToGreet = '';

let greetingText = greetings(personToGreet);

console.log(greetingText);
