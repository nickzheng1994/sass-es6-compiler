const chokidar = require('chokidar');
const babel = require('babel-core');
const sass = require('node-sass');
const gulp = require('gulp');
const livereload = require('gulp-livereload');
const options = {
  presets: ['es2015']
};
const fs = require('fs');

function babelCompiler(path){
    try{
        const file = readFile(path);
        const es5Code = babel.transform(file,options).code;
        fs.writeFileSync('./dist/homework.js',es5Code)
    }catch(err){
        console.log(err)
    }
}
function scssCompiler(path){
    const file = readFile(path);
    try{
        let result = sass.renderSync({
            data: file
        }).css;
        fs.writeFileSync('./dist/homework.css',result)
    }catch(err) {
        console.log(err)
    }
}

function htmlCompiler(path){
    const file = readFile(path);
    try{
        fs.writeFileSync('./dist/homework.html',file)
    }catch(err) {
        console.log(err)
    }
   
}

function readFile(path){
    return fs.readFileSync(path,'UTF-8');
}
chokidar
  .watch('./homework', {
    ignored: /(^|[\/\\])\../
  })
  .on('all', (event, path) => {
    if (event === 'change') {
        console.log(event, path);
        if(path.match(/.js/)){
            babelCompiler(path)
        }else if(path.match(/.scss/)){
            scssCompiler(path);
        }else if(path.match(/.html/)){
            htmlCompiler(path)
        }
    }
  })

gulp.task('watch',function(){
    gulp.task('watch',function () {
        livereload.listen();    
        gulp.watch('homework/*.*',function(file){
            livereload.changed(file.path);
        });
    });
})
gulp.task('default',['watch'])
