const {app, BrowserWindow, Menu, protocol, session} = require('electron')
const path = require('path')
const fs = require('fs')
const isMac = process.platform === 'darwin'
const isDev = process.env.npm_package_name
const host = 'file://';
function createWindow() {
    let win = new BrowserWindow({
        width: 320,
        height: 568,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
            backgroundThrottling: false,
        }
    });
    win.loadURL('https://i-weather.cn/kdjl-helper/');
    protocol.interceptHttpProtocol('https', (request,callback) =>  {
        let url = request.url;
        let flag = false;
        if(url==='https://i-weather.cn/kdjl-helper/'||url==='https://i-weather.cn/kdjl-helper/pages/login/login') {
            url = host + 'index.html';
        }else if(url.endsWith('index.css')) {
            url = host + 'index.css';
        }else if(url.indexOf('chunk-vendors') !== -1) {
            url = host + 'chunk-vendors.a5a58c04.js';
        }else if(url.indexOf('index.209687f3.js') !== -1) {
            url = host + 'index.209687f3.js';
        }else if(url.indexOf('pages-index-index~pages-login-login~pages-settings-settings.25e988ad.js')!==-1) {
            url = host + 'xxx2.js'
        }else if(url.indexOf('pages-index-index.4ab16ff2.js')!==-1) {
            url = host + 'pages-index-index.4ab16ff2.js';
        }else if(url.indexOf('index.worker.3aba2554.worker.js')!==-1) {
            url = host + 'index.worker.3aba2554.worker.js'
        // }else if(url.indexOf('pages-login-login.4a7c1507.js')!==-1) {
        //     url = host + 'pages-login-login.4a7c1507.js'
        }else if(url.indexOf('pages-settings-settings.172a567b.js')!==-1) {
            url = host + 'pages-settings-settings.172a567b.js'
        }else {
            flag = true;
        }
        console.log(url)
        let response = {url};
        debugger
        if(flag) response.session = null;
        callback(response)
    })
    protocol.interceptFileProtocol('file', (request,callback) => {
        let url = 'crack20220621/' + request.url.substring(7).replace('/','');
        console.log(url)
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
            {type: 'separator'},
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
            {type: 'separator'},
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
            {type: 'separator'},
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
                {type: 'separator'},
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
                {type: 'separator'},
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
            }, {type: 'separator'}] : [{type: 'separator'}]),
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
            {type: 'separator'},
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
                    const {shell} = require('electron')
                    await shell.openExternal('https://i-weather.cn')
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on('ready', createWindow)
