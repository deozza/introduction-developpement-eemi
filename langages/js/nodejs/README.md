# Introduction a node.js

## Sommaire

## C'est quoi ?

Nodejs est une plateforme logicielle pour le langage de programmation JS.

## A quoi ça sert ?

JS est un langage qui a la base utilisé dans le navigateur. Mais c'est un langage tellement puissant que certains développeurs ont souhaité le faire sortir du navigateur pour pouvoir l'exécuter ailleurs. C'est ce à quoi sert nodejs. Grâce à nodejs, on peut exécuter du code JS à un niveau backend (dans une console sur un serveur web).

## Comment installer 

### Sur Unix 

#### MacOS

**Installer nodejs**


 * [installer nodejs](https://nodejs.org/dist/v12.18.4/node-v12.18.4.pkg)

**Terminal**

 * utiliser le terminal intégré à MacOS
  * utiliser le finder


#### Ubuntu/Debian

**Installer nodejs**

```bash
sudo apt-get install nodejs npm
```

**Terminal**

 * utiliser le terminal gnome intégré

`ctrl+alt+t`


#### Arch

**Installer nodejs**

```bash
sudo pacman nodejs -S
```

**Terminal**

 * utiliser le terminal intégré

`ctrl+alt+t`


### Sur Windows

**Installer nodejs**

 * [installer postman](https://nodejs.org/dist/v12.18.4/node-v12.18.4-x86.msi)

**Terminal**

 * [installer CMDER](https://github.com/cmderdev/cmder/releases/download/v1.3.16/cmder_mini.zip)


## NPM

NPM, ou Node Package Manager, est comme son nom l'indique un manager de paquets pour node. Un paquet est une mini application qui a été développée par un tiers et correspond à un ensemble de fonctionnalités, que vous pouvez intégrer et utiliser dans une application plus grande.

Par exemple, si vous souhaitez construire une API, au lieu de coder à la main toutes les fonctionnalités liées à la communication HTTP, le formatage des réponses et le parsing des requêtes, vous pouvez utiliser dans votre application le paquet `express.js`.

Si vous avez besoin d'utiliser des paquets dans votre application, vous avez besoin de démarrer un projet npm. Pour ce faire, allumez un terminal et positionnez-vous dans le dossier contentant votre application. Ensuite utilisez la commande :

```bash
npm init
```

Répondez aux quelques questions, elles serviront à décrire un peu plus votre projet. Ces descriptions sont enregistrées dans le fichier `package.json` .

Tous les paquets utilisés dans votre application devront être au préalable installés avec la commande  :

```bash
npm install <nom-du-paquer> --save
```

Lorsque vous installerez un paquet comme ça, vous pouvez remarquer deux choses. La première, dans le fichier `package.json`, est l'apparition d'une nouvelle catégorie `dependencies` avec la liste des paquets installés. La seconde est la création d'un dossier `node_modules` : c'est dans ce dossier que sont enregistrés les paquets installés.

## Utiliser nodejs

Nodejs s'utilise exclusivement dans le terminal, en ligne de commande.

### Exécuter du JS dans le terminal

Il est possible d'exécuter du code JS directement depuis l'environnement nodejs. Pour y entrer, il faut lancer la commmande : 

```bash
node
```

### Lancer un script JS

Pour lancer un script JS, il suffit de se positioner au niveau du script que l'on souhaite exécuter. Puis on utilise la commande : 

```bash
node <nom-du-script>
```

