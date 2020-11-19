// Variables used to import plugins - gulp, sass, autoprefixer;
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer');

// Define our src path for *.scss files and where we want these outputted to;
var sassPath = {
    sass: {
        src: "./sass/*.scss",
        dest: "./css"
    }
}

// Create our 'style' function to compile the *.scss files;
function style() {
    return gulp
        // Take our 'src' path as stated before;
        .src(sassPath.sass.src)
        // Process it via sass;
        .pipe(sass())
        // Log any errors;
        .on("error", sass.logError)
        // Apply autoprefix to deal with pesky browser support;
        .pipe(autoprefix())
        // Compile to the dest path as specified;
        .pipe(gulp.dest(sassPath.sass.dest))
}

// Create the task from the function - gulp 4 syntax;
exports.style = style;

// Create our 'watch' function;
function watch() {
    // Uses the .watch() API call to watch for changes in the 'src' directory and process them via the style task;
    gulp.watch(sassPath.sass.src, style);
}

// Make this task
exports.watch = watch;