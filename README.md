## 📦 Setup
*推荐使用 pnpm*
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
## 🗺️ 路径映射

项目中需要在如下文件中配置路径映射

- [tsconfig.paths.json](https://www.typescriptlang.org/tsconfig#paths): `compilerOptions.paths`, *build 前*
- config-overrides.js: `addWebpackAlias`, *build 后*
- .eslintrc.js: `settings['import/internal-regex']`, *lint 时*