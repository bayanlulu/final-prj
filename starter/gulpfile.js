import gulp from "gulp";
import shell from "gulp-shell";

// Start development server with Parcel
gulp.task("default", shell.task(["npx parcel index.html --open"]));

// Run Mocha tests
gulp.task("testm", shell.task(["npx mocha"]));

// Run Cypress tests
gulp.task("testc", shell.task(["npx cypress run"]));