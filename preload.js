const fs = require('fs');
const bytenode = require('bytenode')
if(!fs.existsSync('./main.jsc')) {
    bytenode.compileFile({
        filename: './main.js',
        output: './main.jsc',
        electron: true
    });
}
if(!fs.existsSync('./core.jsc')) {
    bytenode.compileFile({
        filename: './core.js',
        output: './core.jsc',
        electron: true
    });
}
require('./main.jsc');



