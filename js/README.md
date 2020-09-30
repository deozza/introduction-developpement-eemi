# Introduction à JS

## Sommaire


## Les sites utiles

 * https://developer.mozilla.org/fr/docs/Web/JavaScript

## Un peu d'histoire

JS est un langage de programmation intérprété créé en 1995. Son premier objectif a été de rendre les pages web dynamiques et animées. Principalement tourné vers les navigateurs web (front end), il est désormais possible de l'exécuter sur un serveur (back-end).

## Les principes de JS

### L'utilisation de `;`

Dans JS, il n'est pas obligatoire de terminer une instruction (une ligne de code) avec un `;` . Cela est en revanche recommandé pour une meilleure lisibilité.

```js

let firstNumber = 2
let secondNumber = 3
let result = firstNumber * secondNumber

```

```js

letfirstNumber = 2;
let secondNumber = 3;
let result = firstNumber * secondNumber;

```

**Ces deux codes sont valides et font la même chose**.

*Si on ne met pas de `;` à la fin d'une instruction, JS interprétera automatiquement le saut de ligne comme étant la fin de l'instruction.*

### Les commentaires

Pour écrire des commentaires en JS, on utilise `//` ou `/* */`;

```js

//Ceci est un commentaire sur une ligne

/*

Ceci
est
un
commentaire
sur
plusieurs
lignes

*/

/*
 * Ceci est aussi
 * un commentaire
 * sur plusieurs
 * lignes
*/


let number = 10; //a gauche on a le code exécuté, ici un commentaire

```

### Les variables

Il existe 3 manières de créer une variable en JS.

#### Avec `let` ou `var`

Une variable créée avec le mot clef `let` ou `var` est une variable dont la valeur peut changer au cours de l'exécution : 


```js

let myNewVariable = 'value';

console.log(myNewVariable); // affichera 'value'

myNewVariable = 'new value';

console.log(myNewVariable); // affichera 'new value'
```

#### Avec `const`

Une variable créée avec le mot clef `const` est en réalité une constante : sa valeur ne pourra jamais changer.

```js

const numberOfMonthsInAYear = 12;

numberOfMonthsInAYear = 15; // le programme crashera ici

```

### Les types dans JS

JS est, par défaut, un langage a typage faible. Ce qui implique :
 * lorsque l'on crée une variable, on ne précise pas de quel type elle est - JS le devine tout seul
 * lorsque l'on définie les arguments d'une fonction, on ne précise pas de quels types ils sont
 * il est possible de changer le type d'une variable

Cela ne veut pas dire pour autant qu'il est possible d'utiliser n'importe quel type de variable dans n'importe quelle condition.

#### Cas de la valeur typée string

Si on veut enregistrer un string, la valeur sera entourée de `'` ou de `"`. En JS, l'utilisation de double quote permet d'interpréter le code contenu dans les double quote.

```js

let valueWithSingleQuote = 'Ceci est une phrase sans formatage.\nSans retour à la ligne.';

let valueWithDoubleQuote = "Ceci est une phrase sans formatage.\nAvec retour à la ligne. En plus je peux écrire aujourd'hui sans probleme."";
```

Ici, l'utilisation de double quote va intérpréter le `\n` comme étant un retour à la ligne.

#### Concaténer deux strings

Pour concatener deux strings, on utilise en JS l'opérateur `+` . Il est possible de concaténer autant de strings que l'on souhaite.

*Attention ! C'est le même opérateur que pour l'addition !*

```js

let firstName = "Emile";
let lastName = "Louis";

let fullName = firstname + " " + lastname;

console.log(firstName); // affichera "Emile"
console.log(lastName); // affichera "Louis"
console.log(fullName); // affichera "Emile Louis"


let firstNumber = 10;
let secondNumber = 20;
let resultOfAddition = firstNumber + secondNumber;
let mixedResult = fullName + resultOfAddition;

console.log(firstNumber); // affichera 10
console.log(secondNumber); // affichera 20
console.log(resultOfAddition); // affichera 30
console.log(mixedResult); // affichera "Emile Louis30"
```


#### Les objets

Si l'on souhaite créer un objet, on utilisera la notation `{variable: value}` : 

```js

let userObject = {
	username: 'toto',
	email: 'toto@gmail.com',
	role: 'admin'
}
```

Pour accéder à une valeur d'un objet, on utilise l'opérateur `.` ou la notation `['variable']` : 

```js
let userObject = {
	username: 'toto',
	email: 'toto@gmail.com',
	role: 'admin'
}

console.log(userObject.username); //affichera 'toto'
console.log(userObject['role']); //affichera 'admin'
```

Pour rajouter une valeur a la volée à un objet, on utilise l'opérateur `.` ou la notation `['variable']` :

```js
let userObject = {
	username: 'toto',
	email: 'toto@gmail.com',
	role: 'admin'
}

userObject.address = '1 rue de la Paix';
userObject['city'] = 'Paris';

console.log(userObject.address); //affichera '1 rue de la Paix'
console.log(userObject['city']); //affichera 'Paris'
```

Dans JS, tout est objet. Lorsque l'on crée une variable, JS va de lui-même attacher cette variable a un de ses objets en fonction du type de cette dernière. Cela a pour avantage de pouvoir utiliser des fonctions natives de JS. 

**Exemple avec un tableau**

```js
//Création d'une variable de type array

let daysInAWeek = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

let numberOfDaysInAWeek = daysInAWeek.length; //utilisation de la propriété `length`, obtenue grâce au type array

console.log(numberOfDaysInAWeek); //affichera la taille du tableau, soit 7
```

### Les fonctions

Pour créer une fonction en JS, on utilisera le mot-clef `function` suivi du nom de la fonction, de la liste des arguments entourés de `()`, puis le code à exécuter par la fonction dans `{}`: 

```js
function greetings(name){
	console.log('Hello '+name);
}
```

Pour appeler une fonction, il suffit d'utiliser son nom : 

```js
function greetings(name){
	console.log('Hello '+name);
}

greetings('toto'); //affichera 'Hello toto'

```

#### Fonctions anonymes

Une fonction anonyme est une fonction qui n'a pas été créée avec un nom. C'est pratique dans le cas d'une fonction courte dont le résultat va immédiatement être stockée dans une variable.

```js
let nums = [0,1,2];

//pour chaque element de `num`, on le remplace par element * 2
let doubledNums = nums.map( function(element){ return element * 2; } ); 

console.log(doubledNums);// affichera [0,2,4]
```

### Un langage asynchrone

Un langage asynchrone est un langage qui permet de faire des exécutions en arrière plan. 

Par exemple, avec une application synchrone, a chaque appel de fonction, le programme doit attendre que cette fonction finisse son exécution avant de passer à la prochaine instruction.

Avec JS, il est possible d'appeler une fonction, mette de côté son exécution pour faire d'autres instructions en attendant, et dès que celle-ci aura terminé de gérer le résultat qu'elle retournera.

Cette manière de gérer les fonctions permet notamment la création de chat en live : l'utilisateur n'a pas a attendre que le message qu'il a écri soit effectivement reçu pour écrire et envoyer un deuxième message. 

## Des exemples de programmes simples avec JS

Pour aller plus loin et s'entrainer, vous pourrez retrouver 3 programmes basiques en JS : 
 1. [hello world](./exemples/helloWorld)
   * une fonction simple pour faire des messages d'accueil personnalisés
   * notions vues : 
     * créer une variable
     * créer une fonction
     * manipuler une variable
     * rendre le code robuste
 2. [foobar](./exemples/foobar)
   * une fonction qui affiche des messages en fonction des données envoyées
   * notions vues :
     * opérations mathématiques
     * structures de controle
 3. [factorial](./exemples/factorial)
   * les structures de controle, c'est pour les faibles, les vrais font de la récursivité
   * notions vues :
     * bah la récursivité
