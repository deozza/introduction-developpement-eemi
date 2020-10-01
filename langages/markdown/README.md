# Introduction au markdown

## Sommaire

- [Introduction au markdown](#introduction-au-markdown)
  * [Sommaire](#sommaire)
  * [Utilité](#utilit-)
  * [Formatage](#formatage)
    + [Ecrire un paragraphe](#ecrire-un-paragraphe)
      - [Formaté du texte](#format--du-texte)
    + [Ecrire un titre](#ecrire-un-titre)
- [Titre de niveau 1](#titre-de-niveau-1)
  * [Titre de niveau 2](#titre-de-niveau-2)
    + [Titre de niveau 3](#titre-de-niveau-3)
      - [Titre de niveau 4](#titre-de-niveau-4)
        * [Titre de niveau 5](#titre-de-niveau-5)
          + [Titre de niveau 6](#titre-de-niveau-6)
    + [Ecrire une liste](#ecrire-une-liste)
      - [Liste ordonnée](#liste-ordonn-e)
      - [Liste non ordonnée](#liste-non-ordonn-e)
    + [Faire un lien](#faire-un-lien)
    + [Ecrire du code](#ecrire-du-code)


## Utilité

Le markdown (abrégé md) est un langage de balise qui permet d'écrire des fichiers de texte formattés et légers. Il est notamment utilisé pour écrire la documentation des applications. On le retrouve également dans certains sites pour écrire des messages, comme sur Reddit.

## Formatage

### Ecrire un paragraphe

Pour écrire un paragraphe, il sufit d'écrire du texte : 

```markdown
ceci est un paragraphe
```

ceci est un paragraphe


Il n'y a pas de retour à la ligne en markdown.

```markdown
ca
s'ecrit
sur
une
ligne
```

ca s'ecrit sur une ligne


#### Formaté du texte

```markdown
*italique*

_italique_

**gras**

__gras__

***gras et italique***

___gras et italique___

**gras mais normale et _italique_**
```

*italique*

_italique_

**gras**

__gras__

***gras et italique***

___gras et italique___

**gras mais normale et _italique_**

### Ecrire un titre

```markdown

# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6

```

# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6

### Ecrire une liste

#### Liste ordonnée

```markdown

 * fruits
   * pommes
      * rouge
      * verte
      * jaune
   * banane
   * poire
 * légumes
   * concombre
   * brocoli
   * carottes
```

 * fruits
   * pommes
      * rouge
      * verte
      * jaune
   * banane
   * poire
 * légumes
   * concombre
   * brocoli
   * carottes

#### Liste non ordonnée

```markdown

 1. fruits
   1. pommes
      1. rouge
      2. verte
      3. jaune
   2. banane
   3. poire
 2. légumes
   1. concombre
   2. brocoli
   3. carottes
```

 1. fruits
   1. pommes
      1. rouge
      2. verte
      3. jaune
   2. banane
   3. poire
 2. légumes
   1. concombre
   2. brocoli
   3. carottes

### Faire un lien 

```
[aller sur google](www.google.com)
```

[aller sur google](www.google.com)


```
[aller sur le sommaire(#sommaire)
```

[aller sur le sommaire](#sommaire)

### Ecrire du code


```
Pour écrire du code, il faut l'entourer avec 3 `
```

Vous pouvez aussi spécifier de quel langage est le code est issu, afin de profiter du surlignage coloré spécifique au langage : 

<pre>
```js
let coucou = 'coucou je suis en js'
```   
</pre>
