# my-jira

说明：这是一个 react+ts 项目

1. 准备
   首先在 github 上创建一个空项目
   在本地使用 cra 创建一个 react+ts 的项目 npx create-react-app jira --template typescript
   npm nrm(管理源) nvm(node 版本管理) npx(临时下载一个包，用完后删除，比如下载 create-react-app)
   本地仓库关联远程仓库 git remote add origin xxx@safsd.git
   本地分支关联远程分支 git pull origin main --allow-unrelated-histories(因为 cra 会有几次 commit)
2. init
   删除一些文件
   tsconfig 配置绝对路径 baseurl
   [安装 prettier git-commit](https://www.prettier.cn/docs//install.html)
3. 配置环境变量
   在.env 文件中配置 build 时的变量
   在.env.development 文件中配置 npm start 时的变量
   如果取值为 undefined 有可能是因为变量没以 VUE_APP 或 REACT_APP 开头
