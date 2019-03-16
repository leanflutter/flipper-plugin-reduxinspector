# flipper-plugin-reduxinspector

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=lijy91%40live.com&currency_code=USD&source=url)

[English](./README.md) | 简体中文

## 简介

*Redux Inspector for flipper (Extensible mobile app debugger).*

## 快速开始

### 必备条件

开始之前确保你已安装：

- 已安装 [Flipper Desktop](https://fbflipper.com/docs/getting-started.html)

### 安装

创建一个目录 `~/flipper-plugins`，[Flipper](https://fbflipper.com) 可动态加载该目录的自定义插件

```
$ mkdir ~/flipper-plugins
$ cd ~/flipper-plugins
```

克隆插件到该目录下

```
$ git clone --depth 1 --single-branch --branch master https://github.com/blankapp/flipper-plugin-reduxinspector.git
```

将路径在添加到 `~/.flipper/config.json`

```diff
{
    "pluginPaths": [
+      "~/flipper-plugins"
    ],
    "disabledPlugins": [],
    "lastWindowPosition": {
        "x": 0,
        "y": 23,
        "width": 1680,
        "height": 947
    },
    "updaterEnabled": true
}
```

## 探讨

如果您对此项目有任何建议或疑问，可以通过 [Telegram](https://t.me/lijy91) 或我的微信进行讨论。

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## 许可证

```
MIT License

Copyright (c) 2019 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
