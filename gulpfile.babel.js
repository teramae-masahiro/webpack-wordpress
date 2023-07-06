import gulp from 'gulp';
import eslint from 'gulp-eslint';
import stylelint from 'gulp-stylelint';
import imagemin from 'gulp-imagemin';
import phpcs from 'gulp-phpcs';

export const imgmin = () => gulp.src("./src/images_uncompressed/**").pipe(imagemin()).pipe(gulp.dest("./src/images_compressed"));

function lintJavaScript() {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function lintCSS() {
  return gulp.src('src/**/*.scss')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

function lintPHP() {
  return gulp.src('src/**/*.php')
    .pipe(phpcs({
      bin: 'vendor/bin/phpcs',
      standard: 'WordPress',
      warningSeverity: 0
    }))
    .pipe(phpcs.reporter('log'));
}

//htmlの場合はlintHTMLを記述する
export const lint = gulp.parallel(lintJavaScript, lintCSS, lintPHP);

// 新たにlintをデフォルトタスクに追加
export default gulp.series(imgmin, lint);


//phpではなくhtmlの場合はこちらを使用
// import htmlhint from 'gulp-htmlhint';
// function lintHTML() {
//   return gulp.src('src/**/*.html')
//     .pipe(htmlhint())
//     .pipe(htmlhint.reporter());
// }
