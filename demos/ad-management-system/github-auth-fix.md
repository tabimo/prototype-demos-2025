# GitHub认证问题解决方案

## 🔐 问题原因
GitHub已不支持密码认证，需要使用Personal Access Token (PAT)。

## 🛠️ 解决方案

### 方案1：使用Personal Access Token（推荐）

#### 1. 创建Personal Access Token
1. 登录GitHub → 右上角头像 → Settings
2. 左侧菜单 → Developer settings → Personal access tokens → Tokens (classic)
3. 点击 "Generate new token" → "Generate new token (classic)"
4. 设置：
   - Note: `prototype-demos-deploy`
   - Expiration: `90 days` (或自定义)
   - 勾选权限：`repo` (完整仓库权限)
5. 点击 "Generate token"
6. **复制并保存token**（只显示一次）

#### 2. 使用Token推送代码
```bash
# 删除之前的remote
git remote remove origin

# 使用token添加remote（替换YOUR_USERNAME和YOUR_TOKEN）
git remote add origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/prototype-demos.git

# 推送代码
git push -u origin main
```

### 方案2：使用GitHub CLI（最简单）

#### 1. 安装GitHub CLI
```bash
# macOS
brew install gh

# 或下载：https://cli.github.com/
```

#### 2. 登录并推送
```bash
# 登录GitHub
gh auth login

# 创建仓库并推送（一步完成）
gh repo create prototype-demos --public --push --source=.
```

### 方案3：使用SSH密钥

#### 1. 生成SSH密钥
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

#### 2. 添加到GitHub
1. 复制公钥：`cat ~/.ssh/id_ed25519.pub`
2. GitHub → Settings → SSH and GPG keys → New SSH key
3. 粘贴公钥内容

#### 3. 使用SSH推送
```bash
git remote remove origin
git remote add origin git@github.com:YOUR_USERNAME/prototype-demos.git
git push -u origin main
```

## 💡 推荐使用方案2（GitHub CLI），最简单快捷！