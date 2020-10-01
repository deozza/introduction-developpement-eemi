# Introduction à express.js

## Sommaire

- [Introduction à express.js](#introduction---expressjs)
  * [Sommaire](#sommaire)
  * [C'est quoi](#c-est-quoi)
  * [A quoi ça sert](#a-quoi-ça-sert)
  * [Comment l'installer](#comment-l-installer)
  * [Développer avec express](#développer-avec-express)
    + [Initialiser un serveur web express](#initialiser-un-serveur-web-express)
    + [Créer une route](#créer-une-route)
      - [Envoyer une réponse](#envoyer-une-réponse)
      - [Lire les paramètres dans l'url (queryParams)](#lire-les-paramètres-dans-l-url--queryparams-)

## C'est quoi

`express` est un framework basé sur Nodejs.

## A quoi ça sert

Avec `express`, on peut créer des applications web back-end, notamment des serveurs web et des API.

## Comment l'installer

*Prérequis :*

Il vous faut un projet `npm` initialisé. Pour plus d'informations, [voir](../README.md#npm).

Pour installer express, lancez la commande :

```bash
npm install express --save
```

## Développer avec express

Pour pouvoir utiliser les fonctionnalités d'express dans un programme js, il faut rajouter au début du script les lignes suivantes : 

```js

//dire à l'application que j'ai besoin d'express
const express = require('express');

//récupérer toutes les fonctionnalités d'express pour pouvoir les utiliser au travers de la variable `app`
let app = express();

````

### Initialiser un serveur web express

#### Créer une route

Pour créer une route avec express, il faut se référer au verbe HTTP que l'on souhaite utiliser pour cette route.

*Pour plus d'informations sur les verbes HTTP, [voir](../../../api)*

Par conséquent, on a accès aux fonctions :

 * `get()`
 * `post()`
 * `patch()`
 * `put()`
 * `delete()`


Chacune de ces fonctions attend au moins 2 arguments : 

 * une route, préfixée par `/`
 * une fonction, qui comprend la logique derrière la route - cette fonction comprend 2 arguments : 
   * `request` : contient toutes les informations envoyées dans la requête par le client
   * `response` : permet de répondre au client

*Les deux arguments `request` et `response` peuvent être appelés autrement, cela n'impactera pas le comportement du programme.*

**Exemple :**

```js
const express = require('express');
let app = express();

app.get('/hello', function(request, response) {
});
```

Un peu de décryptage :

 * ligne 1 : on demande de mettre à disposition le framework express
 * ligne 2 : on crée une variable pour utiliser le framework express
 * ligne 4 : on crée une route, qui répondra lorsque l'on fait une requête `GET` sur l'url `/hello`


*Attention !*

Il est possible de faire plusieurs routes avec la même URL et des methodes différentes.

```js

// valide


const express = require('express');
let app = express();

app.get('/hello', function(request, response) {
});

app.post('/hello', function(request, response) {
});

app.delete('/hello', function(request, response) {
});
```

Cependant, faire deux routes avec la même url et la même méthode ne sera pas valide. Seule la première route sera utilisée :

```js

// valide


const express = require('express');
let app = express();

app.get('/hello', function(request, response) {
	//on passera toujours ici
});

app.get('/hello', function(request, response) {
	//sera toujours ignoré
});

```

##### Envoyer une réponse

Pour envoyer une réponse, on utilise la fonction `send()` de l'argument `response` : 

```js
const express = require('express');
let app = express();

app.get('/hello', function(request, response) {
	response.send('Coucou');
});
```

##### Lire les paramètres dans l'url (queryParams)

Pour récupérer la liste des queryParams, on va chercher la variable `query` de l'argument `request` : 

```js
const express = require('express');
let app = express();

app.get('/hello', function(request, response) {

	let params = request.query;

	response.send('Coucou');
});
```

`request.query` retourne un objet. Donc pour accéder à un queryParams particulier (à une propriété particulière de cet objet), on utilise `.` : 

```js
const express = require('express');
let app = express();

app.get('/hello', function(request, response) {

	let nameFromParam = request.query.name;

	response.send(nameFromParam); // retourne la valeur contenue dans le queryParam `name`
});
```

##### Lire le contenu de la requête (body)

Dans le cas où on envoie des données dans une requête, notamment dans une requête `POST`, `PATCH` ou `PUT`, il est intéressant de pouvoir lire ces données pour pouvoir adapter notre réponse.

Pour cela, on utilise la propriété `body` de l'argument `request` : 

```js
const express = require('express');
let app = express();

app.post('/hello', function(request, response) {

	let contentOfRequest = request.body;

	response.send('Coucou');
});
```

Le problème que l'on rencontre ici, c'est que le contenu envoyé dans la requête est le plus souvent au format `json` : c'est du texte formaté. Il n'est pas utilisable tel quel dans un programme. 

Pour pouvoir utiliser le contenu, il faut rajouter dans notre code une nouvelle dépendance : 

```js
const express = require('express');
let app = express();

const bodyParser = require('body-parser'); // on demande de mettre à disposition la librairie `body-parser`
app.use(bodyParser.json()); // on permet à notre application express d'utiliser automatiquement cette librairie


app.post('/hello', function(request, response) {

	let contentOfRequest = request.body;

	response.send('Coucou');
});
```

Le contenu de `request.body` est automatiquement traduit en objet. Donc pour accéder à une propriété particulière (à une propriété particulière de cet objet), on utilise `.` : 

```js
const express = require('express');
let app = express();

const bodyParser = require('body-parser'); // on demande de mettre à disposition la librairie `body-parser`
app.use(bodyParser.json()); // on permet à notre application express d'utiliser automatiquement cette librairie


app.post('/hello', function(request, response) {

	let nameFromBody = request.body.name;

	response.send(nameFromBody); // retourne la valeur contenue dans la propriété `name`, envoyée dans la requête
});
```