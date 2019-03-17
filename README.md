# flipper-plugin-reduxinspector

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=lijy91%40live.com&currency_code=USD&source=url)

English | [简体中文](./README.zh_CN.md)

## Introduction

*Redux Inspector for flipper (Extensible mobile app debugger).*

![reduxinspector](./snapshot.png)

## Quick Start

### Prerequisites

Before starting make sure you have:

- Installed [Flipper Desktop](https://fbflipper.com/docs/getting-started.html)

### Installation

Create a directory `~/flipper-plugins`，[Flipper](https://fbflipper.com) can dynamically load custom plugins for this directory

```
$ mkdir ~/flipper-plugins
$ cd ~/flipper-plugins
```

Clone the plugin to this directory

```
$ git clone --depth 1 --single-branch --branch master https://github.com/blankapp/flipper-plugin-reduxinspector.git
```

Add the path to `~/.flipper/config.json`

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

Build plugin

> For the first time, please run the development version to build the custom plugin, and then use the production version directly.

```
$ git clone https://github.com/facebook/flipper.git
$ cd flipper
$ yarn
$ yarn start
```

## Discussion

If you have any suggestions or questions about this project, you can discuss it by [Telegram](https://t.me/lijy91) or my wechat.

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## License

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
