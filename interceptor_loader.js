const fs = require('fs');
const bytenode = require('bytenode')

if(!fs.existsSync('./interceptor.jsc')) {
    bytenode.compileFile({
        filename: './interceptor.js',
        output: './interceptor.jsc',
        electron: true
    });
}
require('./interceptor.jsc')
