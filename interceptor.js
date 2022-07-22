const { protocol} = require('electron')
const path = require('path')

const host = 'file://';
const index_js_re = new RegExp(/js\/index\.\w+\.js/);
const chunk_vendor_re = new RegExp(/chunk-vendors\.\w+\.js/);
const index_css_re = new RegExp(/index\.css/);
const long_js_re = new RegExp(/pages-index-index~pages-login-login~pages-settings-settings\.\w+\.js/);
const pages_index_index_js_re = new RegExp(/pages-index-index\.\w+\.js/);
const index_worker_js_re = new RegExp(/index\.worker\.\w+\.worker\.js/);
const pages_login_login_js_re = new RegExp(/pages-login-login\.\w+\.js/);
const pages_settings_settings_js_re = new RegExp(/pages-settings-settings\.\w+\.js/);
const pages_help_help_js_re = new RegExp(/pages-help-help\.\w+\.js/);
const no_notice_mp3_re = new RegExp(/no_notice\.mp3/);
const png_re = new RegExp(/\.png/);

protocol.interceptHttpProtocol('https', (request,callback) =>  {
    let url = request.url;
    let flag = false;
    if(url==='https://i-weather.cn/kdjl-helper/'||url==='https://i-weather.cn/kdjl-helper/pages/login/login') {
        url = host + 'index.html';
    }else if(index_css_re.test(url)) {
        url = host + 'index.css';
    }else if(chunk_vendor_re.test(url)) {
        url = host + 'chunk-vendors.js';
    }else if(index_js_re.test(url)) {
        url = host + 'index.js';
    }else if(long_js_re.test(url)) {
        url = host + 'long.js'
    }else if(pages_index_index_js_re.test(url)) {
        url = host + 'pages-index-index.js';
    }else if(index_worker_js_re.test(url)) {
        url = host + 'index.worker.worker.js';
    }else if(pages_login_login_js_re.test(url)) {
        url = host + 'pages-login-login.js';
    }else if(pages_settings_settings_js_re.test(url)) {
        url = host + 'pages-settings-settings.js';
    }else if(pages_help_help_js_re.test(url)) {
        url = host + 'pages-help-help.js';
    }else if(no_notice_mp3_re.test(url)) {
        url = host + 'no_notice.mp3';
    }else if (png_re.test(url)) {
        const index = url.lastIndexOf("/");
        console.log(url.substring(index))
        url = "https://static.i-weather.cn/kdjl-helper/static/" + "image" + url.substring(index);
        flag = true;
    } else {
        flag = true;
    }
    console.log(url);
    let response = {url};
    if(flag) response.session = null;
    callback(response)
})
protocol.interceptFileProtocol('file', (request,callback) => {
    let url = 'kdjl/' + request.url.substring(7).replace('/','');
    callback({path:path.join(__dirname, url)})
})
