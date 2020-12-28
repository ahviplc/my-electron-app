# my-electron-app

> my-electron-app demo by LC.

> https://www.electronjs.org

> https://www.electronjs.org/docs

> https://www.electronjs.org/docs/tutorial/quick-start

> https://github.com/electron/electron

> https://github.com/electron/electron/tree/v11.1.1/docs/fiddles/quick-start

# Quick start & Run it
```
1.安装node npm
node -v
npm -v

2.创建基本应用程序
最小的 Electron 应用程序具有以下结构
my-electron-app/
├── package.json
├── main.js
└── index.html

3.安装 Electron
mkdir my-electron-app && cd my-electron-app
npm init -y
npm i --save-dev electron

4.创建主脚本文件和创建网页
main.js 和 index.html

5.修改您的 package.json 文件
{
    "name": "my-electron-app",
    "version": "0.1.0",
    "author": "your name",
    "description": "My Electron app",
    "main": "main.js",
    "scripts": {
        "start": "electron ."
    }
}

6.运行
npm start

7.如果未安装依赖 请先运行
npm install
```

# Something
## 1.控制台打印时中文乱码问题
> 原因是因为字符编码的问题，Windows下输入chcp,可以查看到当前字符编码，
如果大家经历过asp时代的话，就知道：每个asp页面代码的顶部，都必须定义一个数字表示的字符集。
而常见的gb2312的值是936，utf8的值是65001.
解决办法修改package.json文件

>  "start": "chcp 65001 && electron ."

> 备注：只能在win上面使用这个chcp.

## 2.升级到electron10以后的版本remote失效

> 实际是在electron 10下，remote模块默认关闭， 必须手动设置webPreferences中的enableRemoteModule为true之后才能使用
找到项目中的BrowserWindow部分

```javascript
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
```
## 3. 拼接路径
```javascript
// 引入nodejs自带模块
 var path = require('path');
 console.log(path.join(__dirname, 'templates/pages/alertPage_remote.html'))
```

> /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/my-electron-app/templates/pages/alertPage_remote.html

# About me
```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-app

https://github.com/ahviplc/my-electron-app.git
```
