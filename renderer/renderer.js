// 渲染进程方法集

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
