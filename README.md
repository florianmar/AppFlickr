# AppFlickr
app fotos
Etape 0/ Créer un Environnement à l’application


 Créer un environnement avec Gulp et Bower  "Ready To Go" avec: init


+ L’environnement GULP et ses plugins en implémentant les plugins gulp-size (taille du fichier), puis gulp-uncss  et mettre en place les SourceMaps a travers gulp-sass: https://github.com/dlmanning/gulp-sass


Petite pause: Lire l'article suivant sur les SourceMap en Naviguateur: https://developer.mozilla.org/fr/docs/Outils/D%C3%A9bogueur/Comment/Utiliser_une_source_map


ATTENTION : gulp-concat-css n’est pas compatible avec SourceMap. Il faut utiliser gulp-concat. Pour les pb d’erreur missing semicolon, il faut bien placer la ligne “.pipe(sourcemaps.write('.'))” juste avant la ligne “.pipe(gulp.dest('./dist/css/'))”.


+ Créer une architecture SASS pour préparer la mise en forme de l’application à travers ses composants Grille, des Cards, la Navbar SideNav et le Formulaire et les Inputs (Voir Chapitre SASS de Materialize)


+ Créer unository sur Github “AppFlickr Rep” et synchroniser votre environement avec GIT (git init, git add origin, git add, git commit, git push...) avec un README.MD a la racine en guise de notice. Faire un premier push de l’environnement :)






NB: SASS: Les Variables, MIxins que nous offre MaterializeCss
http://materializecss.com/sass.html


---------------------------------------------------------------------------------------------------------------------------






Etape 1/ Ajax avec l'API Flickr




1/ Créer un Menu Navbar de 5 Buttons centrés sur la pages: Javascript - PHP - AngularJs - HTML - CSS


2/ Quand je clique sur un boutton, cela m’ajoute une classe active sur le bouton et ça me charge des images en AJAX les photos Flickr avec la fonction $.ajax()  dans une Grid de photos


4/ Mettre en, place une SideNav et à l’intérieur créer un formulaire avec 2 éléments en Materializecss. Le formulaire aura les champs suivants: 


 + un champs input "Tags"
+ un bouton de soumission "Ajouter d'autre photos"
Quand je saisis un texte, cela s'ajoute un bouton “actif” au Menu des Bouttons et quand je clique sur ce bouton cela me charges sur Flickr les images en conséquent
5/ Afficher les tags saisies du formulaire avec des Chips de Materializecss sous le champs input Tags http://materializecss.com/chips.html
6/ Mettre en mémoire les Tags saisies grâce à la Session Storage  (voir lien)
7/ Quand on arrive sur l'application, par défaut les tags se recharge.
8/ Ajouter un Range Slider Materialize CSS qui me permet d'afficher un nombre limité d'items dans la Grid ( de 10 à 100)
9/ Ajouter un bouton “Voir plus” me permettant de charger plus de photos en fonctions du Bouton sélectionné.
10/ Ajouter un effet de survol caption aux elements de ma Grid (voir lien)










Magasin à Bonus


Bonus: Préparer en SASS les medias queries pour tablette, phablette et smartphone de l’application
Bonus: Ajouter “Pre-loader” une animation qui se lance au chargement des photos en AJAX
Bonus: Je peux ajouter plusieurs tags séparés par des virgules
Bonus: Ajouter le plugin Masonry et un effet au scroll  (voir lien Typanus)
Bonus: Créer un classe Flickr en ES6 transpilé par Babel avec le module npm Babelify afind e factoriser les fonctionnalités dans une classe qui gères tout le fonctionnement  logique de l’applications
