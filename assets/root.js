const { app, BrowserWindow, Menu, protocol} = require('electron')
const path = require('path')
// const textfile = require('textfile')

const isMac = process.platform === 'darwin'
const isDev = process.env.npm_package_name
const host = 'file://';
const index_js_re = new RegExp(/js\/index\.\w+\.js/);
const chunk_vendor_re = new RegExp(/chunk-vendors\.\w+\.js/);
const index_css_re = new RegExp(/index\.\w+\.css/);
const long_js_re = new RegExp(/pages-index-index~pages-login-login~pages-settings-settings\.\w+\.js/);
const pages_index_index_js_re = new RegExp(/pages-index-index\.\w+\.js/);
const index_worker_js_re = new RegExp(/index\.worker\.\w+\.worker\.js/);
const pages_login_login_js_re = new RegExp(/pages-login-login\.\w+\.js/);
const pages_settings_settings_js_re = new RegExp(/pages-settings-settings\.\w+\.js/);
const pages_help_help_js_re = new RegExp(/pages-help-help\.\w+\.js/);
const no_notice_mp3_re = new RegExp(/no_notice\.mp3/);
function createWindow() {
    let win = new BrowserWindow({
        width: 320,
        height: 568,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, '../out/main.js'),
            backgroundThrottling: false
        }
    })
    win.loadURL('https://i-weather.cn/kdjl-helper/')
    protocol.interceptHttpProtocol('https', (request,callback) =>  {
        let url = request.url;
        console.log(url)
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
        } else {
            flag = true;
        }
        let response = {url};
        if(flag) response.session = null;
        callback(response)
    })
    protocol.interceptFileProtocol('file', (request,callback) => {
        let url = '../kdjl/' + request.url.substring(7).replace('/','');
        callback({path:path.join(__dirname, url)})
    })
}

const template = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                role: 'about',
                label: '关于'
            },
            { type: 'separator' },
            // { role: 'services' },
            // { type: 'separator' },
            {
                role: 'hide',
                label: '隐藏'
            },
            {
                role: 'hideothers',
                label: '隐藏其他'
            },
            {
                role: 'unhide',
                label: '取消隐藏'
            },
            { type: 'separator' },
            {
                role: 'quit',
                label: '退出'
            }
        ]
    }] : []),
    {
        label: '文件',
        submenu: [
            {
                label: '新建窗口',
                click: createWindow
            },
            isMac ? {
                role: 'close',
                label: '关闭'
            } : {
                    role: 'quit',
                    label: '退出'
                }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                role: 'undo',
                label: '撤销'
            },
            {
                role: 'redo',
                label: '重做'
            },
            { type: 'separator' },
            {
                role: 'cut',
                label: '剪切'
            },
            {
                role: 'copy',
                label: '复制'
            },
            {
                role: 'paste',
                label: '粘贴'
            },
            ...(isMac ? [
                // { role: 'pasteAndMatchStyle' },
                {
                    role: 'delete',
                    label: '删除'
                },
                {
                    role: 'selectAll',
                    label: '全选'
                },
                { type: 'separator' },
                {
                    label: 'Speech',
                    label: '语音',
                    submenu: [
                        {
                            role: 'startspeaking',
                            label: '开始语音'
                        },
                        {
                            role: 'stopspeaking',
                            label: '停止语音'
                        }
                    ]
                }
            ] : [
                    {
                        role: 'delete',
                        label: '删除'
                    },
                    { type: 'separator' },
                    {
                        role: 'selectAll',
                        label: '全选'
                    }
                ])
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                role: 'reload',
                label: '重新加载'
            },
            {
                role: 'forcereload',
                label: '强制重载'
            },
            ...(isDev ? [{
                role: 'toggledevtools',
                label: '切换调试'
            }, { type: 'separator' }] : [{ type: 'separator' }]),
            {
                role: 'resetzoom',
                label: '重置缩放'
            },
            {
                role: 'zoomin',
                label: '缩小'
            },
            {
                role: 'zoomout',
                label: '放大'
            },
            { type: 'separator' },
            {
                role: 'togglefullscreen',
                label: '切换全屏'
            }
        ]
    },
    {
        label: '窗口',
        submenu: [
            {
                role: 'minimize',
                label: '最小化'
            },
            {
                role: 'zoom',
                label: '缩放'
            },
            ...(isMac ? [
                // { type: 'separator' },
                // {
                //     role: 'front'
                // },
                // { type: 'separator' },
                {
                    role: 'window',
                    label: '窗口'
                }
            ] : [
                    {
                        role: 'close',
                        label: '关闭'
                    }
                ])
        ]
    },
    {
        role: 'help',
        label: '帮助',
        submenu: [
            {
                label: '更多帮助',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://i-weather.cn')
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on('ready', createWindow)
