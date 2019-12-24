# 启动

yarn install

# commands

## 配置

lerna.json

## 创建包

yarn lerna create @demo/helper
yarn lerna create @demo/ui

## 安装依赖包，目前一次只能添加一个包

yarn lerna add react === yarn lerna add react packages/\*
yarn lerna add react --scope=@demo/helper --scope=@demo/ui

# 应用

## 用 create-react-app 创建应用

yarn create react-app app
修改 package.json 中 workspaces 配置
修改 lerna.json 中 packages 配置

## 添加本地包

yarn lerna add @demo/helper --scope=app
yarn lerna add @demo/ui --scope=app

## 添加软链接，本地调试

yarn lk1
yarn lk2

## 运行

yarn start
