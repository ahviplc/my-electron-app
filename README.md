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

# 打包
```markdown
这里使用electron-builder进行打包
执行命令:
npm i electron --save-dev
npm i electron-builder --save-dev

然后执行:
打包win32位安装包 执行-> npm run app:win32
打包win64位安装包 执行-> npm run app:win64
打包mac安装包 执行-> npm run app:mac

注意:
Build for macOS is supported only on macOS, please see 
> https://electron.build/multi-platform-build

其他配置项 具体去看package.json吧:
    "files": [
      "./**/*"
    ],
等效于->
    "files": [
      "./*",
      "static/**/*",
      "renderer/**/*",
      "templates/**/*"
    ]
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

## 4.获取今日诗词Token代码

```javascript
// 获取今日诗词token
 const {net} = require('electron').remote
// 先获取Token
// 对于每一个用户第一次访问，先使用 获取 Token ，然后存到 Storage 里面。（ Storage 表示一些长效的储存机制，如 localStorage ，您 不应该存储到运行内存 中）
const request_token = net.request('https://v2.jinrishici.com/token')
request_token.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`)
        console.log(JSON.parse(chunk.toString())) // {"status":"success","data":"7yzsEYo2vZ3zwBG+yfTtWtblmvFbz7QD"}
        // 存储
        // 现在改为从localStorage获取token 设置进去对应key为是【jinrishici_token】 
        localStorage.setItem("jinrishici_token", JSON.parse(chunk.toString()).data);
    })
    response.on('end', () => {
        console.log('No more data in response.')
    })
})
request_token.end()
```
> localStorage.getItem('jinrishici_token') 即可从缓存中获取

## 5. Node.js EventEmitter

> EventEmitter 的核心就是事件触发与事件监听器功能的封装.

> EventEmitter 事件派发器 - 事件派发器是一种模式，它监听一个已命名的事件，触发回调，然后发出该事件并附带一个值。有时这被称为“发布/订阅”模型或监听器。它们指的是同一件事。

> Node.js EventEmitter | 菜鸟教程

> https://www.runoob.com/nodejs/nodejs-event.html

> EventEmitter简单样例

```javascript
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
    console.log('some_event 事件触发');
});
setTimeout(function() {
    event.emit('some_event');
}, 10000);
```

# About me

```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-app

https://github.com/ahviplc/my-electron-app.git
```

---
> 基于 vue (基本上是它听起来的样子) 来构造 electron 应用程序的样板代码 electron-vue demo 请去下面链接

> ahviplc/my-electron-vue-app: a demo of the electron-vue by LC.
https://github.com/ahviplc/my-electron-vue-app

---
> electron与vue-cli3.0脚手架做了很好的融合 使用技术栈以及其版本 比较新的版本

> ahviplc/my-electron-vue3-app: a demo of the electron-vue3 by LC.
  https://github.com/ahviplc/my-electron-vue3-app
