# vueflix

## Header/footer

- Le but est de mettre en place le découpage global de l'application, qui viendra "autour" du contenu principal.
- On pense à conserver `<RouterView>` (qui sera abordé plus tard).
- Pour le logo il faut penser que le chemin `/` pointe sur la racine du serveur web, en réalité le dossier `public` du projet qui y a été recopié.
- Dans le footer, la date est remplacée par une expression JavaScript `new Date().getFullYear()` qui n'est évaluée qu'une seule fois au premier chargement.
- Pour masquer le bloc "notifications" on peut utiliser `v-if="false"` ou `v-show="false"` la conséquence sera semblable à l'écran, à l'exception que v-if ne conserve pas d'élément invisible dans le DOM.
- Le titre est modifié manuellement dans index.html (pour le moment), il n'est donc pas dynamique mais on pourrait le manipuler avec JavaScript et `document.title`.
