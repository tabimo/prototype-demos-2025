# GitHub Pages 部署指南

## 🚀 快速部署步骤

### 1. 创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`prototype-demos` (或其他名称)
4. 设置为 **Public** (GitHub Pages免费版需要公开仓库)
5. 点击 "Create repository"

### 2. 推送代码到GitHub
在项目目录执行以下命令：

```bash
# 添加远程仓库 (替换为你的GitHub用户名)
git remote add origin https://github.com/YOUR_USERNAME/prototype-demos.git

# 推送代码
git branch -M main
git push -u origin main
```

### 3. 启用GitHub Pages
1. 进入GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 滚动到 "Pages" 部分
4. 在 "Source" 下选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save"

### 4. 访问在线地址
几分钟后，你的demo将在以下地址可用：
```
https://YOUR_USERNAME.github.io/prototype-demos/
```

## 📋 访问链接

- **项目首页**: `https://YOUR_USERNAME.github.io/prototype-demos/`
- **Offer管理系统**: `https://YOUR_USERNAME.github.io/prototype-demos/demos/offer-management/`
- **基础模板**: `https://YOUR_USERNAME.github.io/prototype-demos/templates/basic.html`

## 🔄 更新部署

当你修改代码后，只需：
```bash
git add .
git commit -m "Update: 描述你的修改"
git push
```

GitHub Pages会自动重新部署，通常在几分钟内生效。

## 💡 提示

- GitHub Pages部署通常需要2-10分钟
- 确保仓库是Public（免费版限制）
- 可以使用自定义域名（在Settings → Pages中配置）
- 支持HTTPS，无需额外配置

## 🎯 分享给团队

部署完成后，直接将链接分享给业务同学：
- 主页：展示所有原型列表
- 直接链接：可直接访问特定原型页面