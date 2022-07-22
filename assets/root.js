const { app, BrowserWindow, Menu, protocol} = require('electron')
const path = require('path')
// const textfile = require('textfile')

const isMac = process.platform === 'darwin'
const isDev = process.env.npm_package_name

function createWindow() {
    let win = new BrowserWindow({
        width: 320,
        height: 568,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, '../preload.js'),
            backgroundThrottling: false
        },
        icon: path.join(__dirname, '../assets/kdjl.ico')
    })

    win.loadURL('https://i-weather.cn/kdjl-helper/')
    // win.loadFile(path.join(__dirname, '../index.html'))
    require('../interceptor.js');
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
