# Lexique général autours de la programmation

Vous trouverez ici des termes que l'on utilise lorsque l'on code dans un langage de programmation.

Tous les exemples utilisés pour illustrer les termes seront écrits en pseudo-code, et non pas dans un langage particulier.

## Sommaire

- [Lexique général autours de la programmation](#lexique-général-autours-de-la-programmation)
  * [Sommaire](#sommaire)
  * [Algoritme](#algoritme)
  * [Variable](#variable)
  * [Fonction](#fonction)
  * [Opérateurs](#op-rateurs)
  * [Structures de contrôles](#structures-de-contrôles)

## Algoritme

Un algoritme est une suite d'instructions, le plus souvent écrites en pseudo-code. Il sert à résoudre une problématique et repondre à un besoin.
On peut faire le rapprochement entre un algoritme et une recette de cuisine : 

 * les ingrédients correspondent aux variables nécessaires au fonctionnement de l'algoritme
 * les manipulations de cuisine correspondent aux opérations réalisées dans l'algoritme
 * le plat est le résultat de l'algoritme


## Variable

Une variable est un moyen de stocker une valeur et de la retrouver facilement.Comme son nom l'indique, une le contenu de la variable peut changer pendant l'exécution du programme.

**Exemple**

```
dateOfMillenium = '01/01/2000'
```

Ici, la partie à gauche du `=` est le nom que l'on a choisi de donner à notre variable. A droite est la valeur que nous avons enregistré dans cette variable.

Pour des raisons de lisibilité, il est important de donner un nom cohérent et parlant à une variable. De plus, il est préférable de donner un nom anglais à ses variables. L'anglais est souvent plus court à écrire, plus simple à comprendre, et surtout vous facilitera la tâche lorsque vous demanderez conseil sur des forums internationnaux.


### Types de variables

La valeur enregistrée dans une variable est adossée à un type. Le type de la valeur permettra, ou non, d'utiliser certaines fonctions particulières. Les types les plus communs sont : 

 * int : nombre entier
 * float : nombre à virgule flottante
 * string : chaîne de caractères
 * array : tableau ou liste de valeurs (le plus souvent sans index)
 * map : un tableau avec un index

Par exemple, on peut demander dans la plupart des langages de programmation la taille d'un string : 

```php
<?php
$sizeOfString = strlen('ceci est une chaine de caratères'); //$sizeOfString vaut 33
?>
```

Il est impossible de réaliser la même opération avec un int.

### Changer le type d'une variable

Il faut noter que dans certains langages (comme le js ou le php), il est possible de transformer le type d'une variable. Par exemple en js : 

```pseudo code

isAnInt = 10; // la variable isAnInt est un int qui vaut 10

isAntInt = isAnInt+''; //la variable isAnInt est à présent un string qui vaut '10'
```

Dans d'autres langages, plus strictes (comme le C ou le java), il est impossible de changer le type d'une variable.

### Reconnaitre le type d'une variable

La plupart du temps, les langages de programmation ont des moyens communs pour différencier à l'oeil les types des variables.

 * string : la variable se compose de lettres, de chiffres, de caractères spéciaux, d'espaces et  est entourée de `'` ou de `"`
 * int : la variable se compose uniquement de chiffres
 * float : la variable se compose de chiffres séparés par un point (la virgule flottante en anglais)
 * array : la variable se compose d'une liste de valeurs de divers types, séparées par des virgules et entourés de `[]`

*Exemples en pseudo code*

```
stringWithSingleQuote = 'ceci est un string entouré de single quote';

stringWithDoubleQuote = "ceci est un string entouré de double quote";

number = 10;

floatWithDecimals = 10.098091;

arrayOfStrings = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

arrayOfInt = [0, 2, 4, 6, 8];

arrayOfMixedTypes = [0, 'lundi', 10.102];
```

## Scope

Le scope peut être défini comme la zone dans laquelle un élément (variable ou fonction) est accessible. On ne peut pas manipuler un élément en dehors de son scope.

Par exemple, si une variable est définie dans une fonction, elle est manipulable uniquement dans cette fonction et pas ailleurs.

```

globalVariable = 'I am global';

function stupid(){
	stupidVariable = 'I am in stupid';

	afficher(globalVariable); //affichera 'I am global'
	afficher(stupidVaribale); //affichera 'I am in stupid'
	
}

afficher(globalVariable); //affichera 'I am global'
afficher(stupidVaribale); //le programme plantera, stupidVariable a été défini dans un scope moins global

```

## Objet

Un objet est un type particulier d'une variable. Tous les langages de programmation n'utilisent pas les objets. C'est un élément que l'on retrouve en JS et en PHP par exemple.

Un objet est une variable embarquant avec elle un certains nombre de propriétés et de fonctions. Les fonctions d'un objet ne peuvent être appelées que si un objet valide est présent. 

L'état d'un objet (ses propriétés) peut être modifié à tout moment :

```

myObject = {
	name: 'toto',
	email: 'toto@gmail.com'
};

function setName(object, name){
	object.name = name;
}

afficher(myObject.name); //affichera 'toto'

setName(myObject, 'tutu');

afficher(myObject.name); //afficehera tutu

```

## Fonction

Une fonction en développement reprend le principe de la fonction en mathématiques : 

 * elle attend un ou plusieurs arguments
 * elle fait un traitement par rapport à cet argument
 * elle retourne un ou plusieurs résultats

*Dans la grande majorité des langages, une fonction ne retourne qu'un seul résultat.*

Une fonction est définie par son nom. On différencie une fonction d'une variable par un mot clef (le plus souvent `function`) situé avant son nom.

*Exemples de fonction en js:*

```js

//Une fonction qui permet d'afficher la phrase "Hello world !" dans la console du navigateur

function greetings(){
	console.log("Hello world !");	
}


//Une fonction qui prend un int en argument et retourne son double

function doubleEnteredNumber(number){
	double = number * 2;
	return double;
}
```

Une fonction est utilisable et réutilisable à l'infini. On appelle le fait d'utiliser une fonction un `appel`. 

Il est possible de stocker le résultat d'une fonction dans une variable. Afin de faire sortir le résultat d'une fonction, on utilise le mot réservé `return` suivi du résultat (qui peut être une valeur écrite en dur, une variable ou un appel d'une autre fonction). Lorsque le mot réservé `return` est atteint par le programme, la fonction s'arrête et on passe à la prochaine instruction.


*Exemple en js d'une fonction qui retourne un résultat en dur:*

```js

function returnAlwaysGreetings(){

	return 'Hello world !';
}


greetings = returnAlwaysGreetings();

console.log(greetings); //affichera 'Hello world !'

```


*Exemple en js d'une fonction qui prend un argument et retourne un résultat en dur:*

```js

function returnAlwaysGreetings(uselessArgument){

	return 'Hello world !';
}


greetings = returnAlwaysGreetings('je veux retourner autre chose');

console.log(greetings); //affichera 'Hello world !'

```


*Exemple en js d'une fonction qui prend un argument et retourne un résultat adapté:*

```js

function returnDynamicGreetings(name){

	textToReturn = 'Hello ';
	textToReturn = textToReturn + name;
	
	return textToReturn;
}


greetings = returnDynamicGreetings('toto');

console.log(greetings); //affichera 'Hello toto'

```


*Exemple en js d'une fonction qui prend un argument, retourne un résultat et ignore les instructions suivantes:*

```js

function returnDynamicGreetings(name){

	textToReturn = 'Hello ';
	textToReturn = textToReturn + name;
	
	return textToReturn;

	textToReturn = 'Je voulais retourner autre chose';
}


greetings = returnDynamicGreetings('toto');

console.log(greetings); //affichera 'Hello toto'

```

*Exemple en js de fonctions qui s'appellent entre elles:*

```js

function returnSquare(number){

	square = number * number;
	return square;
}

function returnCube(number){
	return returnSquare(number) * number;
}


number = 3;

square = returnSquare(number); //contient 9
cube = returnCube(number); //contient 27

```

## Opérateurs

On rencontre les opérateurs communs suivant:

 * `>` : supérieur
 * `>=` : supérieur OU égal
 * `<` : inférieur
 * `<=` : inférieur OU égal
 * `==` : égal
 * `!=` : différent
 * `+` : addition
 * `-` : soustraction
 * `*` : multiplication
 * `/` : division
   * *attention* : selon le langage, cet opérateur peut retourner le résultat d'une division entière ou d'une division à virgule flottante
 * `%` : modulo


Il existe aussi l'opérateur de concaténation. Ce dernier permet de coller ensemble plusieurs chaînes de caractères. Cet opérateur change en fonction du langage utilisé. Veuillez vous référez à la documentation de ce langage pour plus d'informations.

## Structures de contrôles

Une structure de contrôle permet d'ajouter de la logique dans notre programme. On rencontre les structures communes suivantes :

 * `if ... else ...` : si la condition est remplie exécuter ... sinon exécuter ...
 * `for` : pour un nombre fini d'itérations, exécuter ...
 * `while` : tant que ma condition est remplie, exécuter
 * `switch` : une manière simplifiée d'enchainer des if...else if...else if...else

*Exemple d'utilisation du if en :*

```
function checkNumberIsPositive(number){

	if(number == 0){
		return 'il est positif et négatif'; 
	}
	else if(number > 0){
		return 'il est positif';
	}else{
		return 'il est négatif';
	}
}

checkNumberIsPositive(0); // 'il est positif et négatif'
checkNumberIsPositive(10); // 'il est positif'
checkNumberIsPositive(10.2657); // 'il est positif'
checkNumberIsPositive(-23); // 'il est négatif'
```

*Meme exemple mais avec un switch en :*

```
function checkNumberIsPositive(number){
	switch(number){
		case number == 0 : return 'il est positif et négatif';
		case number > 0 : return 'il est positif';
		default : return 'il est négatif';
	}
}

checkNumberIsPositive(0); // 'il est positif et négatif'
checkNumberIsPositive(10); // 'il est positif'
checkNumberIsPositive(10.2657); // 'il est positif'
checkNumberIsPositive(-23); // 'il est négatif'
```


Lorsqu'une structure de contrôle exécute le même bout de code plusieurs fois d'affilés, on appelle cela une boucle.
