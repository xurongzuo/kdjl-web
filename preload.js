const fs = require('fs');
const bytenode = require('bytenode')
if(!fs.existsSync('./main.jsc')) {
    bytenode.compileFile({
        filename: './main.js',
        output: './main.jsc',
        electron: true
    });
}
if(!fs.existsSync('./dev.jsc')) {
    bytenode.compileFile({
        filename: './dev.js',
        output: './dev.jsc',
        electron: true
    });
}
require('./main.jsc');



