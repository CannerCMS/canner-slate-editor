const gulp = require("gulp");
const babel = require("gulp-babel");
const babelrc = require("./babel.config");
const { execSync } = require("child_process");
const watch = require("gulp-watch");

const listPkg = execSync("lerna ls --p", { encoding: "utf8" })
  .split("\n")
  .filter(d => d.length > 0);

gulp.task("default", () =>
  listPkg.forEach(pkg => {
    gulp
      .src([`${pkg}/src/**/*.js`, `!${pkg}/src/**/__tests__/**/*.js`])
      .pipe(babel(babelrc))
      .pipe(gulp.dest(`${pkg}/lib`));
  })
);

gulp.task("watch", () =>
  listPkg.forEach(pkg => {
    watch([`${pkg}/src/**/*.js`, `!${pkg}/src/**/__tests__/**/*.js`])
      .pipe(babel(babelrc))
      .pipe(gulp.dest(`${pkg}/lib`));
  })
);
