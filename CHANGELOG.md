# Angular Everyday (Blog Change Log)

## 2017-07-25

找到了样式文件处理的解决方案，虽然感觉阿库娅。

在每个组件样式文件中引入共同样式文件:
```@import '~styles/main.scss';```

使用```:host```选择器给组件本身赋予样式:
[special-selectors](https://angular.io/guide/component-styles#special-selectors)

## 2017-07-24

通过生成器生成的组件的样式文件发现在使用中限制太大，仅适用于严格作用域范围时的细节修改，故选择将样式文件集中管理。
做了个卡片样式的错误信息页面。

## 2017-07-23

用进度条组件做了个全局加载状态，原本想法是在页面切换过程中显示，但效果不甚理想。考虑使用Observables对象重新实现一个。