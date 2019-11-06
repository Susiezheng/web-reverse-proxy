# 基础容器使用说明

## 路径

路径名|说明
---|---
/web=reverse-proxy/public| 前端dist包解压后存放路径

### 本地启动项目
node app.js

### 本地加后端启动项目
PROXY_VUE=http://xxxxx node app.js


### 服务器上部署前端启动
1. ssh xxx@ip地址 进入这个服务器
1. useradd xxx 新增用户
1. passwd xxx 设置密码
1. exit 退出
1. 使用新账号登录
1. 使用FileZilla应用，把编译后的文件上传到服务器指定路径
1. su - xxx 切换用户，安装node
1. 到相应目录下，启动PROXY_VUE=http://xxxxx node app.js
