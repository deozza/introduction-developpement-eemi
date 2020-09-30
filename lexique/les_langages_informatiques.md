# Lexique autours des langages informatiques

Vous trouverez ici des termes que l'on utilise pour désigner les différents langages informatiques.

Tous les exemples utilisés pour illustrer les termes seront écrits en pseudo-code, et non pas dans un langage particulier.

## Sommaire

- [Lexique autours des langages informatiques](#lexique-autours-des-langages-informatiques)
  * [Sommaire](#sommaire)
  * [Langage informatique](#langage-informatique)
  * [Langage de programmation](#langage-de-programmation)
  * [Langage de balise](#langage-de-balise)
  * [Langage de requête](#langage-de-requ-te)
  * [Langage pseudo-code](#langage-pseudo-code)

## Langage informatique

Les machines communiquent et agissent en fonction du courant électrique qui traverse leurs composants. Elles se basent sur un langage binaire : le courant passe, ou le courant ne passe pas.

Il serait bien trop compliqué de donner des instructions complexes à une machine si l'on devait se baser sur ce langage très bas niveau. C'est pourquoi nous utilisons des langages informatiques.

Un langage de informatique est un langage lisible facilement par un humain, et traduit par la machine en binaire. Il existe plusieurs catégories de langages informatiques :

 * le langage de programmation (comme le php, le js, le C, le java, ...)
 * le langage de balise (comme l'html, le xml, le markdown, le yml, le json ...)
 * le langage de requête (comme le sql, le mongoDB, le )
 * le langage pseudo-code

## Langage de programmation

Un langage de programmation a comme principale caractéristique qu'il permet de créer des programmes. Une suite d'instructions exécutées par une machine. L'intérêt du langage de programmation est de pouvoir adaptées les instructions en fonction des données que l'on envoie au programme.

Il existe plusieurs manières de différencier des langages de programmations : selon leurs philosophies, leurs manières de s'exécuter, leurs paradigmes... Voici un exemple de différenciation : 

### Langage de programmation compilé

Un programme écrit dans un langage  dit `compilé` est un programme qui doit passer par un compilateur afin d'obtenir un fichier exécutable.

Le passage dans le compilateur a plusieurs avantages :
 * on obtient un premier debug rapide et basique
   * le compilateur vérifie que le code est cohérent (toutes les fonctions et variables appelées existent, il n'y a pas de fautes de syntaxe, le typage est respecté, ...)
 * on obtient un fichier exécutable qui est utilisable, on n'a plus besoin du code pour lancer le programme

Les inconvénients sont :
 * le fichier exécutable n'est pas forcément compatible avec toutes les machines
 * en général, le langage est plus stricte et rigoureux

### Langage de programmation interprété / scriptural

Un programme écrit dans un langage  dit `interprété` ou `scriptural` est un programme qui n'a pas besoin de passer par un compilateur. Il est exécutable à tout moment.

L'inconvénient majeur de ces langages est qu'il faudra soi-même rigoureusement tester son code avant de l'envoyer en production. En effet, puisque le programme est interprété au fur et à mesure de son exécution, les erreurs ne seront pas détectées en amont. Le programme plantera lors de l'exécution.

## Langage de balise

Le langage de balise est un langage qui permet d'organiser des données selon des tiroirs : selon des balises. Il n'y a aucune logique ou intelligence dans un langage de balise.

## Langage de requête

Le langage de requête est un langage utilisé pour communiquer avec une base de données afin d'insérer, mettre à jour et récupérer des jeux de données.

## Langage pseudo-code

Le langage pseudo-code ne correspond à aucun langage particulier et n'est pas compris par la machine. C'est un langage utilisé par un développeur afin qu'il puisse poser les bases de son algorithme, sans être limité par les contraintes d'un vrai langage. Il est surtout utilisé au début d'un projet, pour vérifier que le besoin est couvert, mais aussi pour simplifier une session de debug.

## Mots-clefs (ou mots réservés) d'un langage

Les mots-clefs (ou mots réservés) d'un langage sont des mots qui sont interprétés d'une certaine manière par un langage. Ils ne sont pas utilisables par le développeur en dehors du cadre qui leur sont réservés. Les mots réservés et leur nombre change d'un langage à un autre.

Le mot clef le plus commun est `function` (ou un équivalent), utilisé pour définir une fonction dans un programme.
