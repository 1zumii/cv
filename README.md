## 📦 Setup

*推荐使用 [pnpm](https://pnpm.io/zh/installation)*

### 安装
```bash
pnpm install
```
### 开发
```bash
pnpm run start
```
### 部署
```bash
pnpm run build
pnpm run deploy
```
#### Github Pages

项目使用 Github 提供的 `Pages` 服务托管打包后的静态页面资源文件，所以需要在仓库的 `Settings` -> `Pages` 里配置发布源。

项目使用的 npm 包 [gh-pages](https://www.npmjs.com/package/gh-pages) 运行发布命令（即上述「部署」部分）以后，会发布到远端仓库的 `gh-pages` 分支中。

所以，我们配置的发布源应该配置为：

> Branch: gh-pages

## 👨‍🔧 自动部署

- 使用 [husky](https://typicode.github.io/husky) 来实现在主分支提交时，自动运行上述的「部署」部分
- 脚本内容详见 [post-commit](./.husky/post-commit)

## 🗺️ 路径映射

项目中需要在如下文件中配置路径映射

- [tsconfig.paths.json](https://www.typescriptlang.org/tsconfig#paths): `compilerOptions.paths`, *build 前*
- [webpack.config.js](https://webpack.docschina.org/configuration/resolve#resolvealias): `resolve.alias`, *build 后*
- [.eslintrc.json](https://github.com/import-js/eslint-plugin-import#importinternal-regex): `settings['import/internal-regex']`, *lint 时*

## ✍️ 修改建议

#### xiaohong:

- [x] 项目经历中的「责任描述」的第一条

  > 负责的东西第一条就概括了，后面列的点又太细了
  > 
  > 可能需要把第一条再描述下
  > 
  > 看不出来你干了很多事，这句话放在哪个项目都能用
  
  > *jaycee 的建议*
  > 
  > 可以针对其中一条扩展成和多方角色（如产品、设计、后端）的协作沟通流程

#### lisa:

- [x] TTES 项目描述中「日常活动」修改为「研发活动」

- [x] 项目经历中的「责任描述」

  > 提到的技术点，可不可以再写的深一点？我看到更多的是功能点的罗列

#### jaycee:

- [x] 可以增加 比如调研引入react-query 实现服务器端异步状态的管理，缓存请求数据，实现加载性能的优化
- [x]  熟悉的技术可以加上node、express、nestjs
- [x] tmap可以加上mobx，结合mobx和事件中心，完成整个系统所有跨层级组件的通信
- [x] 富文本这里可以多写一些，比如cos相关的问题的解决
- [x] echarts多写一些，定制化开发了那些图表、或者额外扩展图表的哪些能力
- [ ] ~~项目可以额外增加公众号项目，主要突出熟悉和完成，完整的一个新项目的创建、架构、选型、流水线设置、123服务，部署发布流程~~

#### verson:

- [x] 「工作经历」去掉部门信息，避免不必要的联想
- [ ] 「专业技能」措辞可以改成：了解 => 熟练掌握
- [x] 「工作经历」中的实习部分，把项目名称写全
- [ ] 「项目经历」项目亮点可以措辞体现出：攻坚、优化

