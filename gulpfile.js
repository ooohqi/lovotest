var gulp=require('gulp');
// var gulp=require('gulp-sass');


gulp.task("copyallfile",function(){
	gulp.src("*/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo"))
});
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo"))
});

gulp.task("copy-php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo"))
});

gulp.task("copy-img",function(){
	gulp.src("img/*.{jpg,png,tmp,gif,jpeg}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo\\img"))
});

gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo\\css"))
});

gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lovo\\js"))
});
// gulp.task("copyallfile",function(){
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tm"))
// });

// gulp.task("sass",function(){
//  	//gulp.src("index.html").pipe(gulp.dest("dist"));
// 	gulp.src("sass/*.scss")
//  	.pipe(sass())
//  	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tm\\css"));
//  });ulp.task("")

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch('img/*.{jpg,png,tmp,gif}',["copy-img"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("*.php",["copy-php"]);
	// gulp.watch("sass/*.scss",["sassfile"]);
})