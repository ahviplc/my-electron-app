// 渲染进程方法集

// 引入nodejs自带模块
var path = require('path');
// 引入三方模块
var md5 = require('md5');

// 获取process platform 信息
// 对应#btn01
function getProcessInfo() {
    var qs = document.querySelector('#showProcessId');
    qs.innerHTML = process.platform;
    console.log(process)
    console.log(process.getCPUUsage())
    console.log(process.platform)
    console.log(process.arch)
    console.log(process.env)
}

// 获取process arch信息
// 对应#btn02
function getArchInfo() {
    var qs = document.querySelector('#showProcessId');
    qs.innerHTML = process.arch
    console.log(process)
    console.log(process.getCPUUsage())
    console.log(process.platform)
    console.log(process.arch)
    console.log(process.env)
}

// window.onload 方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法
// 对应#btn03
window.onload = function () {
    var btn = document.querySelector('#btn03');
    var qs = document.querySelector('#showProcessId');
    // 方法1
    // btn.onclick = function () {
    //     qs.innerHTML = process.arch
    // }
    // 方法2
    btn.onclick = () => {
        qs.innerHTML = process.arch
        console.log(process)
        console.log(process.getCPUUsage())
        console.log(process.platform)
        console.log(process.arch)
        console.log(process.env)
    }
}

// 计算md5
// 对应#btn04
function getMd5() {
    var qsInput = document.querySelector('#inputMd5Id');
    var qsShow = document.querySelector('#showMd5Id');
    // console.log(qsInput.value)
    // console.log(qsInput.value.length )
    // 判断空
    if (qsInput.value.length == 0) {
        qsShow.innerHTML = "输入框不可以为空"
        return
    }
    // 走到这里 就不会是空的
    // 使用引入md5计算
    qsShow.innerHTML = md5(qsInput.value);
}

// 复制结果
// 剪贴板 在系统剪贴板上执行复制和粘贴操作
// 对应#btn05
function copyThat() {
    var qsShow = document.querySelector('#showMd5Id');
    const {clipboard} = require('electron')
    // 写入-作为纯文本写入剪贴板 type相当于key
    clipboard.writeText(qsShow.innerHTML.toString(), 'selection')
    // 读取-剪贴板中的纯文本内容
    if (clipboard.readText('selection').length != 0) {
        // 通过type获取
        console.log(clipboard.readText('selection'))
    }
}

// 弹出子窗口
// 使用window.open
// 对于#btn06
function alertPage() {
    // window.open("http://www.oneplusone.vip","一加壹博客") // http://oneplusone.vip/index.html
    // 带宽高
    window.open("http://www.oneplusone.vip","一加壹博客",'height=400, width=600')
}

// 弹出子窗口
// 使用remote
// 对于#btn07
function alertPage2() {
    let win = null;
    BrowserWindow = require('electron').remote.BrowserWindow;
    // 调用 BrowserWindow打开新窗口
    win = new BrowserWindow({
        width: 600,
        height: 400,
        // frame:false,
        // fullscreen:true
    })
    // 以下均可
    win.loadFile(path.join(__dirname, 'templates/pages/alertPage_remote.html')) // 具体输出在README.md
    // win.loadFile('templates/pages/alertPage_remote.html')
    // win.loadFile('./templates/pages/alertPage_remote.html')
    win.on('closed', () => {
        console.log('win.on closed 子窗口关闭了')
        win = null;
    })
}
