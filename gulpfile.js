const gulp = require("gulp");
const babel = require("gulp-babel");
const babelrc = require("./babel.config");
const { execSync } = require("child_process");
const watch = require("gulp-watch");
const sourcemaps = require("gulp-sourcemaps");

const listPkg = execSync("lerna ls --p", { encoding: "utf8" })
  .split("\n")
  .filter(d => d.length > 0);

gulp.task("default", () =>
  listPkg.forEach(pkg => {
    gulp
      .src([`${pkg}/src/**/*.js`, `!${pkg}/src/**/__tests__/**/*.js`])
      .pipe(sourcemaps.init())
      .pipe(babel(babelrc))
      .on("error", console.error.bind(console))
      .pipe(gulp.dest(`${pkg}/lib`));
  })
);

gulp.task("watch", ["default"], () =>
  listPkg.forEach(pkg => {
    watch([`${pkg}/src/**/*.js`, `!${pkg}/src/**/__tests__/**/*.js`], {
      verbose: true
    })
      .pipe(babel(babelrc))
      .on("error", function(e) {
        console.log(">>> ERROR", e);
        // emit here
        this.emit("end");
      })
      .pipe(gulp.dest(`${pkg}/lib`));
  })
);
