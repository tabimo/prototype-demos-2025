#!/bin/bash

# GitHub Pages 部署命令脚本
# 请先在GitHub创建仓库，然后替换下面的YOUR_USERNAME为你的GitHub用户名

echo "🚀 开始部署到GitHub Pages..."

# 替换为你的GitHub用户名
GITHUB_USERNAME="tabimo"
REPO_NAME="prototype-demos"

echo "📝 请先替换脚本中的YOUR_USERNAME为你的GitHub用户名"
echo "📝 确保已在GitHub创建了仓库: $REPO_NAME"

read -p "按回车键继续，或Ctrl+C取消..."

# 添加远程仓库
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# 推送到GitHub
git branch -M main
git push -u origin main

echo "✅ 代码已推送到GitHub"
echo "🌐 请到GitHub仓库设置中启用Pages功能"
echo "📍 仓库地址: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "🔗 部署后访问地址: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"