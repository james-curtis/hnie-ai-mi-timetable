# HNIE强智教务系统对接小爱课表

**鸣谢：** [小爱课程表开发者资源库](https://open-schedule-prod.ai.xiaomi.com/docs/#/assets/)

## 使用说明

首先修改`config.ini`，根据注释修改为自己对应的文件，保存间隔最好还是不要低于300，通信和处理信息都需要时间

lock文件是使用了淘宝镜像源的，可以直接`npm i`

随后就可以运行脚本`npm run start`

此时打开开发者工具，进入`版本详情`Tab，如果代码编写右边出现绿色链接标志，则表明链接成功

修改你在`config.ini`配置的代码文件，则会自动同步到代码框中

> 注意：不要在输入框弹出的时候使用，是不生效的

本工具还附带了模拟服务器环境运行parser的功能，在进行本地测试时会自动调用

如需debug需要自行关注命令行输出

## 常见问题

#### 1. 小爱课表提示：“开发者代码错误，无法解析”
这种情况确实是开发的代码有问题。
浏览器插件环境能跑，但是小爱课表中E2E测试过不了，请看下面。
1. `provider.js` 中必须要使用 `dom` 来替代 `document`
2. `timer.js` 在E2E时，没有参数传入，无法从入参获取到 `parserRes`,`providerRes`
