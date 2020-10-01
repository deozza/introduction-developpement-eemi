# Hello world

Le hello world est un programme simple pour apprendre les bases d'un langage. Son but est d'affiché un message d'accueil personnalisé en fonction du nom de la personne que l'on souhaite accueillir.

Dans cet exemple, nous verrons pas à pas comment écrire ce programme. Si vous êtes pressés et souhaitez voir le résultat final, c'est [ici](./index.js) que ça se passe.

Vous pouvez coder sur votre machine si vous avez un environnement de développement prêt. Sinon vous pouvez utiliser le site [playcode.io](https://playcode.io/).

## 1. Le résultat naif

Quel est notre besoin ? Nous voulons afficher un message d'accueil.

```js
console.log('Salut toto');
```

Et voilà ! Terminé ! Bien oui, grâce au `console.log()` nous affichons un message d'accueil. 

Ca a l'air un peu débile, mais c'est normal : c'est un code dit naif. Si nous faisions un test unitaire dessus, et que dans ce test nous vérifions que `'Salut toto'` s'affiche, le test passerait. C'est la première étape vers un programme complet. Bien évidemment, nous allons étoffer tout ça.


## 2. Soyez dynamique

Si on reprenait l'histoire du test unitaire ? On rappelle que notre code doit afficher un message d'accueil personnalisé. Donc on doit vérifier que notre code puisse aussi bien afficher `'Salut toto'` que `'Salut Giseline'`. Pour l'instant, seul le premier test passerait. Et si on faisait :

```js
console.log('Salut Giseline');
```

Cette fois-ci, seul le second test passerait et le premier échouerait. Nous avons besoin de rendre l'affichage dynamique. Pour cela, nous allons utiliser une variable :

```js

let name = 'toto';

console.log('Salut '+name);
```

C'est un début, mais on pourrait faire mieux. Concaténer directement dans le `console.log`, c'est pas top niveau bonnes pratiques. Et si on déplaçait le tout dans une fonction ?

```js
function greetings(name){
	return 'Salut ' + name;
}


let personToGreet = 'toto';

let greetingText = greetings(personToGreet);

console.log(greetingText);
```

Si on résume, on a une fonction `greetings` qui prend un argument `name` et qui renvoie un string en fonction de cet argument. Le résultat de cette fonction est affichée avec le `console.log()`;

## Un peu de robustesse

Ok, on a maintenant une fonction qui renvoi un message personnalisé. Mais qu'est-ce qu'il se passerait si `name` était tout sauf ce qui était prévu ? Si on ne mettait rien ? Si on mettait un `int` au lieu d'un `string` ? Au mieux le message serait bizarre, au pire le code crash. Il faut donc s'assurer que `name` soit bien ce qu'on veuille : un string.

Pour cela, on va commencer par rajouter un première vérification : que `name` soit bien passé en argument de la fonction : 

```js
function greetings(name){

	if(name === undefined || name === null){
		return {error: '`name` should not be null'};		
	}
	
	return 'Salut ' + name;
}


let personToGreet = 'toto';

let greetingText = greetings(personToGreet);

console.log(greetingText);
```

Maintenant que l'on sait que `name` ne peut ni être absent des arguments passés, ni être null, il faut vérifier que c'est un `string` :

```js
function greetings(name){

	if(name === undefined || name === null){
		return {error: '`name` should not be null'};		
	}
	
	if(typeof name !== "string"){
		return {error: '`name` should be a string'};
	}

	return 'Salut ' + name;
}


let personToGreet = '';

let greetingText = greetings(personToGreet);

console.log(greetingText);

```

Le mot réservé `typeof` suivit d'une variable retourne le type de cette dernière. Il suffit de vérifier que ce que renvoi `typeof` soit bien `string` pour que l'on puisse continuer l'exécution de notre fonction.

Super ! Avec nos deux `if`, on s'assure que `name` soit bien envoyé, qu'il n'est pas `null` et qu'il est de type `string`. On peut faire une dernière vérification, pour la route, et s'assurer que `name` ne soit pas un string vide.

*Une chaine de caractère vide n'est pas `null`, mais simplement `''`, sans caractère*

```js
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
```

On remerciera au passage JS et sa philosophie `Tout est objet` pour nous fournir la propriété `length`. Chaque variable `string` en a une, et nous permet de connaître le nombre de caractères présents dans la chaîne.

Et voilà ! Vous venez de voir comment créer des variables, définir une fonction, manipuler des variables et rendre votre code robuste ! On passe à la [suite](../foobar) ?
