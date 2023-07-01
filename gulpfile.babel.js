import gulp from "gulp";
import imagemin from "gulp-imagemin";

export const imgmin = () => gulp.src("./src/images_uncompressed/**").pipe(imagemin()).pipe(gulp.dest("./src/images_compressed"));

export default imgmin;
