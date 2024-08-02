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
