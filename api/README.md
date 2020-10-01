# Les API

## Sommaire

- [Les API](#les-api)
  * [Sommaire](#sommaire)
  * [Définition](#définition)
    + [Cas d'usage](#cas-d-usage)
    + [Qu'est-ce qu'une API ?](#qu-est-ce-qu-une-api--)
    + [Quand utiliser une API ?](#quand-utiliser-une-api--)
    + [Différents types d'API](#différents-types-d-api)
      - [API REST ou SOAP ?](#api-rest-ou-soap--)
      - [API monolithe ou microarchitecture ?](#api-monolithe-ou-microarchitecture--)
  * [Le modèle de maturité de Richardson](#le-modèle-de-maturité-de-richardson)
    + [Niveau 0](#niveau-0)
    + [Niveau 1](#niveau-1)
      - [Des ressources](#des-ressources)
      - [Des routes / endpoints](#des-routes---endpoints)
    + [Niveau 2](#niveau-2)
      - [Les verbes HTTP](#les-verbes-http)
      - [Les codes / status HTTP](#les-codes---status-http)
    + [Niveau 3](#niveau-3)
      - [Les contrôles hypermedia - HATEOAS](#les-contrôles-hypermedia---hateoas)
  * [Développer une API](#développer-une-api)
    + [Quel langage utiliser pour écrire une API ?](#quel-langage-utiliser-pour-écrire-une-api--)
    + [Des langages à conseiller ?](#des-langages-à-conseiller--)


## Définition

### Cas d'usage

Imaginons que nous avons un site web, de type marketplace, qui rassemble les produits d'autres sites e-commerce. L'objectif est de pouvoir lister les produits, leur stock, leurs avis... On a, globalement, 3 manières de faire ça.

La première, longue, pas pratique, pas productive et pas viable dans le temps, consisterait à nous-mêmes à insérer puis mettre à jour manuellement chaque produit existant de tous les sites e-commerces rassemblés. 

La seconde, plus rapide et pratique, mais pas très viable non plus, consisterait à pouvoir insérer dans notre site des morceaux des sites e-commerce (via un `iframe`). Le problème de cette solution est qu'elle est très limitante dans ses évolutions : si un client poste un avis sur notre site sur un produit, le sie e-commerce du produit ne sera pas mis au courant automatiquement, on est bloqué avec le design des sites insérés et notre charte graphique n'est pas respectée, ...

Le troisième solution, un peu plus longue et contraignante, mais viable et évolutive +++ serait de mettre en place une API.

### Qu'est-ce qu'une API ?

Une API, ou `Application Programming Interface` est une application dont le but est de mettre à disposition de la donnée à destination d'autres systèmes. Cette application est résolument tournée back-end et vers de la logique, sans soucis de visuels.

### Quand utiliser une API ?

Prenons l'exemple de Facebook Messenger. Messenger est une application de messagerie instantanée, disponible sur smartphone, sur navigateur web et en logiciel pour ordinateur. Les fonctionnalités sont les mêmes quel que soit le support utilisé.

Il serait long et non productif de coder entièrement 3 fois les mêmes fonctionnalités. Ici, utiliser une API serait judicieux : 

 * on met toutes les fonctionnalités logiques de Messenger dans une application API
 * on code une application visuelle pour chaque type de support qui utilisera la même API


Second exemple : Uber. Le but d'Uber est de mettre en relation des particuliers avec des chauffeurs VTC. Sur l'application, une carte est disponible pour savoir où se trouve le chauffeur. Ce n'est pas dans l'intérêt d'Uber de développer cette fonctionnalité : elle ne correspond pas à son business et elle n'en a pas l'expertise. C'est pourquoi Uber utiliser l'API de Google Map.

### Différents types d'API

#### API REST ou SOAP ?

Il existe deux grands paradigmes de construction d'API : le REST et le SOAP.

Historiquement, le SOAP a été utilisé mais depuis plusieurs années REST est passé sur le devant de la scène. Sans rentrer dans les détails, la principale différence est que SOAP récupère et envoie de la donnée au format `XML`, un format lourd (en terme de données) et pas très lisible par un utilisateur. REST quant à lui utilise principalement le format `json`, plus léger, maléable et mieux organisé.

*A ce jour, REST est utilisé dans la très grande majorité des API. A partir de maintenant, nous parlerons par défaut de REST lorsque que nous parlerons d'API.*

#### API monolithe ou microarchitecture ?

**Monolithe**

On appelle une API monolithe lorsque toutes les fonctionalités d'un produit se concentrent dans la même fonctionnalité. Si on reprend l'exemple du site e-commerce, on aurait dans une seule et même API les fonctionnalités :
 
 * de gestion de stock de produit
 * de gestion des commandes
 * de gestion des avis
 * de gestion des utilisateurs

En général, lorsque l'on commence à développer une API pour un produit, on commence par développer une API monolithe. Ses avantages sont multiples :
 
 * plus facile à organiser et retrouver son code
 * pas de risque de dupliquer du code (et maintenir plusieurs versions du même code)
 * plus facile à déployer

On compte parmis ses inconvénients :

 * single point of failure (si l'API tombe, tout votre produit tombe avec)
 * selon la taille de l'API, les performances peuvent prendre un coup
 * plus la taille de l'API augmente, moins il est facile de rajouter des fonctionnalités et de maintenir les fonctionnalités existantes

**Microarchitecture**

Une API en microarchitecture revient à exploser les fonctionnalités d'une API monolithe en plusieurs petites API, qui communiquent entre elles. On peut choisir d'exploser les fonctionnalités selon différents critères :

 * la ressource gérée est différente
 * le produit proposé est différent
 * l'utilisateur final est différent

Les avantages de la microarchitecture sont :
 
 * multiple points of failure (si une micro API tombe, le reste des services continuent de tourner)
 * plus facile à maintenir
 * une nouvelle fonctionnalité ? Une nouvelle API
 * en général plus performant

La principale complexité est d'orchestrer toutes les micro APIs entre elles.

## Le modèle de maturité de Richardson

Le modèle de maturité de Richardson permet de dire à quel point une API est RESTful

### Niveau 0

Très simple à valider, il suffit que notre API ait une URL et qu'elle réponde à une requête HTTP.

### Niveau 1

Pour accéder au niveau 1, il faut que l'application serve les données selon des ressources, et que ces ressources soient identifiées par une route unique.

#### Des ressources

On appelle ressource de la donnée brute, structurée, qui est compréhensible directement par un système. Chaque ressource se différencie par son nom, ses propriétés et les manières de les manipuler.

**Le contrat d'interface**

Pour que deux applications puissent communiquer, il faut qu'elles puissent savoir les règles de cette communication et qu'elles les respectent. C'est ce qu'on appelle le contrat d'interface. 

#### Des routes / endpoints

Une route, ou endpoint, correspond à une url. Chaque route permet de manipuler une ressoure précise. Une route commence par `/` et est suivie par le nom de la ressource que l'on souhaite accéder. On appelle `racine` la route définine uniquement par `/`, sans ressource derrière.

Prenons l'exemple d'une ressource `User`, qui permet de gérer les utilisateurs de notre système. Pour accéder à la liste des utilisateurs, on devra faire pointer notre requête sur la route `/users`. Si on souhaite manipuler l'utilisateur avec l'identifiant 81, il faudra utiliser la route `/users/81`. Si on souhaite récupérer tous les posts de l'utilisateur avec l'identifiant 81, il faudra utiliser la route `/users/81/posts`.

### Niveau 2

Pour passer au niveau 2, il faut différencier les différents types de manipulation de ressources avec des verbes HTTP et renvoyer un code HTTP différent en fonction du résultat de la manipulation.

#### Les verbes HTTP

Un verbe HTTP permet de préciser quel genre d'action nous souhaitons réaliser sur la ressource ciblée avec notre requête. voici les principaux verbes utilisés dans une API :

| Code   | Cas d'usage                                                  |
|--------|--------------------------------------------------------------|
| GET    | Récupérer une ressource existante                            |
| POST   | Créer une nouvelle ressource                                 |
| PUT    | Modifier une ressource existante en la remplaçant totalement |
| PATCH  | Modifier une ressource existante partiellement               |
| DELETE | Supprimer une ressource existante                            |


#### Les codes / status HTTP

Un code HTTP peut se rapprocher d'un tampon placé sur une réponse d'une API. Juste avec ce tampon, nous pouvons savoir quel type de réponse l'API nous envoie (succès ou erreur). Voici la liste des principaux codes HTTP que nous rencontrons dans les réponses des API :

| Code | Définition            | Cas d'usage                                                                              | Verbe HTTP utilisé en général |
|------|-----------------------|------------------------------------------------------------------------------------------|-------------------------------|
| 200  | Success               | La requête est réussie et voici la ressource demandée                                    | GET, PUT, PATCH               |
| 201  | Created               | La requête est réussie et voici la ressource que vous venez de créer                     | POST                          |
| 204  | No content            | La requête est réussie, la réponse est vide                                              | DELETE                        |
| 301  | Moved permanently     | La ressource demandée a été déplacée                                                     | GET                           |
| 302  | Found                 | La ressource demandée a été déplacée temporairement                                      | GET                           |
| 400  | Bad request           | La requête que vous avez envoyé a été mal formulée                                       | POST, PATCH, PUT              |
| 401  | Unauthorized          | Vous devez être identifié pour faire cette requête                                       | GET, POST, PATCH, PUT, DELETE |
| 403  | Forbidden             | Vous êtes identifié, mais vous n'avez pas le droit de faire cette requête                | GET, POST, PATCH, PUT, DELETE |
| 404  | Not found             | La ressource demandée n'a pas été trouvée                                                | GET, POST, PATCH, PUT, DELETE |
| 405  | Method not allowed    | Le verbe HTTP utilisé n'est pas le bon                                                   |                               |
| 409  | Conflict              | La requête est correcte, mais l'état actuel de l'application ne permet pas de la valider | GET, POST, PATCH, PUT, DELETE |
| 500  | Internal server error | L'application a planté                                                                   |                               |

### Niveau 3

#### Les contrôles hypermedia - HATEOAS

Un contrôle hypermedia est une donnée rajoutée dans les réponses pour donner davantage d'informations sur la ressource que l'on manipule. Par exemple, lorsque l'on manipule une liste de ressources, un contrôle hypermedia intéressant à rajouter serait de la pagination : ainsi on ne charge pas la totalité des ressources (ce qui serait très lourd) mais on peut tout de même naviguer simplement et de manière fluide dans ces ressources.

**Exemple de réponse avec des contrôles hypermedia pour la pagination**

```json
{
	"ressources": [
		{
			"id": 3,
			"username": "toto"
		},
		{
			"id": 4,
			"username": "tutt"
		}
	],
	"totalItems": 10,
	"currentPage": "monapi.com/users?page2",
	"precedentPage": "monapi.com/users?page1",
	"nextPage": "monapi.com/users?page3"
}
```



## Développer une API

### Quel langage utiliser pour écrire une API ?

On peut utiliser n'importe quel langage de programmation pour construire une API. Ce qui est très intéressant avec ce genre d'applications, c'est que deux APIs peuvent communiquer entre elles peu importe le langage dans lequelles elles ont été écrites.

### Des langages à conseiller ?

Même s'il est possible de construire une API à partir de n'importe quels langages, certains sont plus adaptés ou accessibles que d'autres. Les langages tournés web notamment, comme JS et PHP. Ces deux langages possèdent d'ailleurs framework les plus utilisés pour construire des API (express.js pour JS et Symfony pour PHP).

Vous pourrez retrouver [ici](https://github.com/gothinkster/realworld) un projet qui liste différentes manières de construire la même API pour reproduire le site medium à partir de différents langages et différentes technologies.
