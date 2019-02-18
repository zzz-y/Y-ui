# Y-ui

[![Build Status](https://travis-ci.org/zzz-y/Y-ui.svg?branch=master)](https://travis-ci.org/zzz-y/Y-ui)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1. 添加 CSS 样式

  使用本框架前请在css中开启border-box
  ```
  *,*::before,*::after{box-sizing:border-box}
  ```
  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  IE 8 及以上浏览器都支持此样式
  ```
  :root {
        --button-height: 32px;--font-size: 14px;--button-bg: #fff;--button-active-bg: #eee;
        --border-radius: 4px;--color: #333;--border-color: #999;--border-color-hover: #666;
      }
  ```
  IE 15 及以上浏览器都支持此样式

2. 安装 y-ui
  ```
  npm i --save @zzz-y/y-ui
  ```

3. 引入 y-ui
  ```
  import {Button} from '@zzz-y/y-ui'
  import '@zzz-y/y-ui/dist/index.css'

  export default {
    name: 'app',
    components: {
      'y-button': Button
    }
  }
  ```
4. 引入 svg symbols
  ```
  <script src="//at.alicdn.com/t/font_1042770_s9h5mvmkj6i.js"></script>
  ```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

