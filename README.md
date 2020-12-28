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
        "start": "chcp 65001 && electron ."
    }
}

6.运行
npm start

7.如果未安装依赖 请先运行
npm install
```

# Something

> 1.控制台打印时中文乱码问题
题原因是因为字符编码的问题，Windows下输入chcp,可以查看到当前字符编码，
如果大家经历过asp时代的话，就知道：每个asp页面代码的顶部，都必须定义一个数字表示的字符集。
而常见的gb2312的值是936，utf8的值是65001.
解决办法修改package.json文件
>
>  "start": "chcp 65001 && electron ."

# About me
```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-app

https://github.com/ahviplc/my-electron-app.git
```
