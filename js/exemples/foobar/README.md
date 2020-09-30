# Foobar

Le foobar est un classique des programmes pour débutant. Son objectif est simple : on lui passe une liste de nombres, pour chacun des nombres on affiche `foo` s'il est divisible par 3, `bar` s'il est divisible par 5. Ou l'inverse, je sais plus. S'il n'est divisible ni par 3, ni par 5, on affich le nombre. 

**Exemple : **

La liste de nombres `[1, 10, 3, 15, 20, 7, 65, 31, 27]`, une fois passée dans foobar, fera afficher le string `1 bar foo foobar bar 7 bar 31 foo`.

## 1. Le résultat naif

On veut quoi ? Une fonction qui affiche `foo`, `bar`, ou `foobar` . Bon ben voilà :

```js

function foobar(){
	console.log('foo'),
}

foobar();
```

Impressionnat hein ? 

## 2. Avec des if on mettrait Paris...

Impressionant mais pas suffisant. On va rajouter un peu de variables la-dedans :

```js
function foobar(number){
	return 'foo';
}

let number = 3;

console.log(foobar(number));
```

Pour l'instant on va rester simple et tester notre fonction avec un seul nombre. On verra pour gérer un `array` plus tard. On remarque que là encore, le code est assez naif. On va rajouter notre premier contrôle pour savoir si on retourne `foo` ou non. On doit vérifier que le nombre est divisible par 3. Pour faire ça, on utilise l'opérateur `%` (modulo). Un opérateur assez cool puisqu'il nous renvoi le reste d'une division entière. Si un chiffre est divisible par 3, alors le modulo de ce chiffre par 3 vaut 0. En code, ça se traduit comme ça :

```js
function foobar(number){
	if(number % 3 === 0){
		return 'foo'
	}
	return number;
}

let number = 3;

console.log(foobar(number));
```


En français ça donne : si le reste de la division entière de `number` par 3 vaut 0, alors on renvoie `foo`, sinon on renvoie `number`. Plus qu'à faire la même chose avec 5 :


```js
function foobar(number){
	if(number % 3 === 0){
		return 'foo'
	}

	if(number % 5 === 0){
		return 'bar';
	}
	
	return number;
}

let number = 3;

console.log(foobar(number));
```

Là par contre on a un problème. Si on envoie un `number` divisible par 3 et 5, on devrait avoir `foobar` comme résultat. Là, dans l'état, on n'a que `foo` . Peut-être que les return sont un peu brutaux. On va assouplir le tout :

```js
function foobar(number){

	let isFoo = false;
	let isBar = false;
	let textToReturn = '';
	
	if(number % 3 === 0){
		isFoo = true
	}

	if(number % 5 === 0){
		isBar = true;
	}

	if(isFoo === false && isBar === false){
		textToReturn += number;		
	}

	if(isFoo === true){
		textToReturn += 'foo';
	}

	
	if(isBar === true){
		textToReturn += 'bar';
	}

	return textToReturn;
	
}

let number = 3;

console.log(foobar(number));
```

Il s'est passé beaucoup de chose. On va décortiquer. Au début, on crée 3 variables :

 * `textToReturn` : contient le texte à renvoyer à la fin de la fonction
 * `isFoo` : un sélecteur qui nous indique si le chiffre est divisible par 3
 * `isBar` : un sélecteur qui nous indique si le chiffre est divisible par 5

Ensuite, on a gardé nos `if`, qui agissent maintenant sur nos sélecteurs.

Enfin, on vérifie l'état de nos sélecteurs : 
 * si aucun n'est passé à `true`, ca veut dire qu'il faut renvoyer le nombre tel quel
 * sinon, on ajoute le mot qu'il faut

## 3. Un peu de robustesse ?

Dans le programme actuel, on pourrait envoyer n'importe quel genre de données dans `numnber`. Il faut sécuriser notre fonction. Dans un premier temps, vérifier que le champs `number` est bien transmis à la fonction et n'est pas null. Ensuite, qu'il contient bien un nombre, entier ou décimal. Voilà le résultat avec quelques `if` supplémentaires en début de fonction :

```js
function foobar(number){

	if(number === undefined || number === null){
		return {error: '`number` should not be null'};
	}

	if(typeof number !== 'number' && typeof number !== 'float'){
		return {error: '`number` should be `float` or `int`'};			
	}
	
	let isFoo = false;
	let isBar = false;
	let textToReturn = '';
	
	if(number % 3 === 0){
		isFoo = true
	}

	if(number % 5 === 0){
		isBar = true;
	}

	if(isFoo === false && isBar === false){
		textToReturn += number;		
	}

	if(isFoo === true){
		textToReturn += 'foo';
	}

	
	if(isBar === true){
		textToReturn += 'bar';
	}

	return textToReturn;
	
}

let number = 3;

console.log(foobar(number));
```

## 4. Avec plusieurs chiffres

Maintenant que notre fonction sait gérer les chiffres un par un, il est temps de gérer une liste de chiffres. Pour passer de la version précédente de notre programme à la version finale, voici les modifications nécessaires :
 * parcourir chaque élément de la liste envoyée
 * appliquer pour chaque élément l'algoritme pour déterminer le mot à afficher
 * construire un string final avec tous les mots à afficher

```js
function foobar(numbers){

	//vérifier que l'argument numbers est défini et non null
	if(numbers === undefined || numbers === null){
		return {error: '`numbers` should not be null'};
	}

	//vérifier que l'argument numbers est bien une liste
	if(typeof numbers !== 'object'){
		return {error: '`numbers` should be an array'};
	}

	//vérifier que la liste numbers contient des éléments
	if(numbers.length <= 0){
		return {error: '`numbers` array should not be empty'};
	}

	let resultText = '';

	//traiter chaque élément de la liste
	for(element in numbers){

		//vérifier que chaque élément de la liste est un nombre, entier ou décimal
		if(typeof numbers[element] !== 'number' && typeof numbers[element] !== 'float'){
			return {error: 'Elements of `numbers` array should be `float` or `int`'};			
		}

		let isFoo = false;
		let isBar = false;
		let textToReturn = '';
		
		if(number % 3 === 0){
			isFoo = true
		}

		if(number % 5 === 0){
			isBar = true;
		}

		//déterminer quel mot ajouter à la phrase finale
		if(isFoo === true){
			textToAdd += 'foo';
		}
		
		if(isBar === true){
			textToAdd += 'bar';
		}

		if(isFoo === null && isBar === false){
	      textToAdd = numbers[element];
		}

		//s'il reste des éléments à traiter, rajouter un espace pour séparer le mot du prochain
	    if(element < numbers.length - 1){
	      textToAdd += ' ';
	    }


		//ajouter le mot à la phrase finale
	    resultText += textToAdd;
	}

	return resultText;
}

let numbers = [1, 10, 3, 15, 20, 7, 65, 31, 27];

console.log(foobar(numbers));
```

