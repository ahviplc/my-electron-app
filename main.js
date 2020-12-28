const {app, BrowserWindow} = require('electron')
const path = require('path')
// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let nil_win
let author = "LC"

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // 在electron 10.0.0之后，remote模块默认关闭
            // 必须手动设置webPreferences中的enableRemoteModule为true之后才能使用
            enableRemoteModule: true
        }
    })

    // 导航完成时触发，即选项卡的旋转器将停止旋转，并指派onload事件后
    win.webContents.on('did-finish-load',()=>{
        console.log("win.webContents.on did-finish-load")
    })

    // 一个框架中的文本加载完成后触发该事件
    win.webContents.on('dom-ready',()=>{
        console.log("win.webContents.on dom-ready")
    })

    // 加载index.html文件
    win.loadFile('index.html')

    // 打开开发者工具
    // win.webContents.openDevTools()

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        console.log("win.on closed")
    })
}

// 当 Electron 完成初始化时，发出一次
// 写法1
// app.whenReady().then(createWindow)
// 写法2
// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数
// 部分 API 在 ready 事件触发后才能使用
app.on('ready', () => {
    createWindow() // 注意 这里是调用createWindow()方法 直接写成createWindow是不好使的
    console.log(path.join(__dirname,'main.js'))
    console.log("app.on ready")
})

// 当应用程序完成基础的启动的时候被触发
// 在 Windows 和 Linux 中, will-finish-launching 事件与 ready 事件是相同的;
// 在 macOS 中，这个事件相当于 NSApplication 中的 applicationWillFinishLaunching 提示。
// 通常会在这里为 open-file 和 open-url 设置监听器，并启动崩溃报告和自动更新
app.on('will-finish-launching', () => {
    console.log("app.on will-finish-launching")
})

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
    console.log("app.on window-all-closed")
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        console.log("bye 非mac用户 " + author)
        app.quit()
    } else {
        // 可以走到这里就是mac用户
        console.log("bye mac用户 " + author)
    }
})

// 在程序关闭窗口前发信号
// 在应用程序开始关闭窗口之前触发
app.on('before-quit', () => {
    console.log("app.on before-quit")
})

// 在所有窗口都已关闭并且应用程序将退出时发出
app.on('will-quit', () => {
    console.log("app.on will-quit")
})

// 在应用程序退出时发出
app.on('quit', () => {
    console.log("app.on quit")
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
        console.log("app.on activate")
        createWindow()
    }
})

// 还有其他事件 可在【https://www.electronjs.org/docs/all】搜索【事件】查看学习。

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
