# vueflix

## Header/footer

- Le but est de mettre en place le découpage global de l'application, qui viendra "autour" du contenu principal.
- On pense à conserver `<RouterView>` (qui sera abordé plus tard).
- Pour le logo il faut penser que le chemin `/` pointe sur la racine du serveur web, en réalité le dossier `public` du projet qui y a été recopié.
- Dans le footer, la date est remplacée par une expression JavaScript `new Date().getFullYear()` qui n'est évaluée qu'une seule fois au premier chargement.
- Pour masquer le bloc "notifications" on peut utiliser `v-if="false"` ou `v-show="false"` la conséquence sera semblable à l'écran, à l'exception que v-if ne conserve pas d'élément invisible dans le DOM.
- Le titre est modifié manuellement dans index.html (pour le moment), il n'est donc pas dynamique mais on pourrait le manipuler avec JavaScript et `document.title`.

## Réactivité

- On ajoute `v-model` avec pour valeur le nom de la ref `search` lier celle-ci à l'input.
- On utilise les refs dans le template pour afficher le nombre de notifications entre moustaches, et dans un attribut dynamique `style` qui peut être écrit de différentes façons `:style="notifications < 1 ? 'visibility: hidden' : ''"` ou `:style="{opacity: notifications > 0 ? 1 : 0}"` par exemple. On utilise les propriétés CSS visibility ou opacity plutôt qu'un v-show qui appliquerait `display: none` et ferait disparaître le bloc sans réserver l'espace (d'où le décalage lorsqu'il réapparaît).

## Composants

- Pour _MediaGallery_, on importe les données brutes et on les utilise directement dans le template avec une boucle `v-for` sans oublier `:key`. Les images étant dans le dossier public et le sous dossier médias, on les appelle avec le préfixe `/medias/`.
- Pour _MediaList_, on passe en props les médias, la valeur du filtre et de la recherche, et on combine le tout grâce à un `computed` pour préserver la réactivité si une seule de ces valeurs change.

## Événements

- Au clic sur les boutons de défilement, on applique une transformation CSS avec pour valeur `translateX` et on exploite `v-bind` dans la partie `<style>` du composant pour éviter d'avoir à injecter un attribut dynamique `:style` (même si cela fonctionne aussi).
- Pour donner le focus à la recherche (sans passer par l'attribut `autofocus` qui existe déjà) on ajoute un attribut `ref` et on nomme une variable de la même façon pour récupérer l'élément dans la partie script du composant, on évite de passer par une fonction DOM native (querySelector, getElementById, etc).

## Slots

- On crée les composants attendus, celui constituant la _popin_ est quasiment vide car il ne s'agit que d'une coquille : un `<slot>` et un bouton de fermeture qui émet l'événement correspondant.
- Pour les comportements spécifiques, on utilise : un écouteur d'événement natif attaché à `window` pour attraper l'appui de touche sur l'ensemble du document ; un `<KeepAlive>` englobant tout le composant de _popin_ pour préserver son état.

## Routing

- On utilise `<RouterLink>` pour tous les liens internes avec pour attribut obligatoire `to`.
- Le composant _MediaView_ est ajouté et attrape le paramètre `id` par l'intermédiaire de l'objet renvoyé par `useRoute()`, importé de `vue-router`.
- Pour fermer la popin éventuellement ouverte on se branche sur `router.beforeEach` qui sera déclenché avant chaque changement de route.

## Store

- Dès le store `medias` créé dans le dossier `stores` et déclaré par `defineStore`, avec pour (le moment) seule `ref` le tableau des médias, on l'exploite à tout endroit utile via `useMediaStore()` : _MediaView_ mais aussi _MediaGallery_/_MediaList_.
- On optimise (en option) en utilisant un getter réactif vers le store, cela permet de ne pas déclencher les actions uniquement au chargement de la vue et de rafraîchir le rendu si le store change.
