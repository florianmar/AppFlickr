
var gulp = require('gulp'); // appel du module gulp
var browserSync = require ('browser-sync'); //appel de browserSync
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var notify = require("gulp-notify");
const autoprefixer = require('gulp-autoprefixer');
var sass = require ( 'gulp-sass');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
const size = require('gulp-size');
var uncss = require('gulp-uncss');
var sourcemaps = require('gulp-sourcemaps');
// rafraîchissement du browser
var reload      = browserSync.reload;

gulp.task('default', function() {
  console.log('Ma tâche par défaut...')
});

gulp.task('browser-sync', function() {
  browserSync({
    port: 3000,
    server: {
      baseDir: "./", //base directory
      index: "foto.html" //fichier à charger par défaut
    }
  });
});

// crée une tâche css
gulp.task('css', function() {
  console.log('Ma tâche css...')
  //gulp.src -> cherche un ou plusieurs fichiers sources à minifier
  return gulp.src(['./css/foto.css', './css/contact.css']) // src = source de fichiers
  .pipe(sourcemaps.init())
  .pipe(uncss({
          html: ['index.html', 'posts/**/*.html', 'http://example.com']
      }))
  .pipe(size())
  // .pipe(autoprefixer())
  .pipe(minifyCss()) // compresser ma css par le module gulp-minify-css
  .pipe(concat('bundle.css'))//concaténation en 1 fichier

  .pipe(reload({stream: true, once:true})) // je rafraîchis mon navigateur quand ma tâche css est accomplie
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css/')) // permet d'envoyer le fichier minifié dans le répertoire de destination dist/css
  .pipe(notify('css-compressée et concaténée'));


});

gulp.task('js', function() {
  console.log('Ma tâche js...')
  return gulp.src(['js/*js']) // src = source de fichier
  .pipe(concat('app.min.js'))//concaténation en 1 fichier
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/')) // permet d'envoyer le fichier minifié dans le répertoire de destination dist/css
  .pipe(notify('js-modifié'))

  .pipe(reload({stream: true, once:true})); // je rafraîchis mon navigateur quand ma tâche css est accomplie
});



//je crée une tĉhe default
//Au lancement par default, la tâche browser-sync va se lancer
gulp.task('default', ['browser-sync','css','js'], function() {
  gulp.watch('./js/*.js',['js']);
  gulp.watch('./css/*.css', ['css']); // watch permet de "watcher", observer les changements de fichiers CSS du
  gulp.watch('./sass/**/*.scss', ['sass']);
  // dossier CSS et relncer la tâche "css"
  console.log('Ma tâche par défaut...')
});


//je crée une tache sass
gulp.task('sass', function() {
  console.log('Ma tâche sass...')
  //gulp.src -> cherche un ou plusieurs fichiers sources à minifier
  return gulp.src(['sass/main.scss']) // src = source de fichiers
  .pipe(sass().on('error', sass.logError))
  // .pipe(autoprefixer())
  .pipe(sourcemaps.init())

  .pipe(minifyCss()) // compresser ma css par le module gulp-minify-css
  .pipe(concat('bundle-sass.css'))//concaténation en 1 fichier

  .pipe(gulp.dest('dist/css/')) // permet d'envoyer le fichier minifié dans le répertoire de destination dist/css
  .pipe(notify('sass-compilé compressée et concaténée'))
  .pipe(reload({stream: true, once:true})); // je rafraîchis mon navigateur quand ma tâche css est accomplie
});
