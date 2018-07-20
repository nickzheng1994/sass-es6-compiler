const chokidar = require('chokidar')
const babel = require('babel-core')
const sass = require('node-sass');
const options = {
  presets: ['es2015']
}
const fs = require('fs');

function babelCompiler(path){
    const file = readFile(path);
    const es5Code = babel.transform(file,options).code;
    fs.writeFileSync('./dist/test.js',es5Code)
}
function scssCompiler(path){
    const file = readFile(path);
    let result = sass.renderSync({
        data: file
    }).css;
    fs.writeFileSync('./dist/test.css',result)
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
        }
    }
  })
