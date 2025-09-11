# HTML原型发布到GitHub Pages完整SOP

> 本文档提供从零开始的完整操作指南，帮助团队成员快速搭建HTML原型并发布到公网供所有人访问。

## 📋 目录
- [环境准备](#环境准备)
- [GitHub账号设置](#github账号设置)
- [本地开发环境](#本地开发环境)
- [AI协作指南](#ai协作指南)
- [创建和发布原型](#创建和发布原型)
- [最佳实践](#最佳实践)
- [常见问题](#常见问题)

---

## 🛠️ 环境准备

### 1. 安装Git

#### Windows系统
1. 访问 [Git官网](https://git-scm.com/download/win)
2. 下载Git for Windows安装包
3. 运行安装程序，全部使用默认设置
4. 安装完成后，右键桌面选择"Git Bash Here"验证安装

#### macOS系统
```bash
# 方法1：使用Homebrew（推荐）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git

# 方法2：使用Xcode Command Line Tools
xcode-select --install
```

#### 验证安装
```bash
git --version
# 应该显示类似：git version 2.x.x
```

### 2. 安装GitHub CLI

GitHub CLI (gh) 是GitHub官方命令行工具，可以简化仓库创建和管理操作。

#### Windows系统
```bash
# 使用winget（Windows 10/11）
winget install --id GitHub.cli

# 或下载安装包
# 访问 https://github.com/cli/cli/releases
# 下载 gh_*_windows_amd64.msi 并安装
```

#### macOS系统
```bash
# 使用Homebrew（推荐）
brew install gh

# 或使用MacPorts
sudo port install gh
```

#### Linux系统
```bash
# Ubuntu/Debian
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# CentOS/RHEL/Fedora
sudo dnf install gh
```

#### 验证安装
```bash
gh --version
# 应该显示类似：gh version 2.x.x
```

#### 登录GitHub CLI
```bash
# 登录GitHub账号
gh auth login

# 选择：
# 1. GitHub.com
# 2. HTTPS (推荐) 或 SSH
# 3. 使用浏览器登录
# 4. 按提示完成认证

# 验证登录状态
gh auth status
```

### 3. 安装代码编辑器

推荐使用 **Visual Studio Code**：
1. 访问 [VS Code官网](https://code.visualstudio.com/)
2. 下载对应系统版本
3. 安装并启动

**推荐插件**：
- Live Server（实时预览HTML）
- Prettier（代码格式化）
- Auto Rename Tag（HTML标签自动重命名）

---

## 🔐 GitHub账号设置

### 1. 注册GitHub账号
1. 访问 [GitHub官网](https://github.com)
2. 点击"Sign up"注册账号
3. 验证邮箱地址

### 2. 配置Git用户信息
```bash
# 设置用户名（替换为你的GitHub用户名）
git config --global user.name "你的用户名"

# 设置邮箱（替换为你的GitHub邮箱）
git config --global user.email "你的邮箱@example.com"

# 验证配置
git config --global --list
```

### 3. 设置SSH密钥（推荐）

#### 生成SSH密钥
```bash
# 生成新的SSH密钥
ssh-keygen -t ed25519 -C "你的邮箱@example.com"

# 按Enter使用默认文件位置
# 按Enter设置空密码（或设置密码）
```

#### 添加SSH密钥到GitHub
```bash
# 复制公钥内容
# Windows
cat ~/.ssh/id_ed25519.pub | clip

# macOS
cat ~/.ssh/id_ed25519.pub | pbcopy

# Linux
cat ~/.ssh/id_ed25519.pub
```

1. 登录GitHub，点击右上角头像 → Settings
2. 左侧菜单选择"SSH and GPG keys"
3. 点击"New SSH key"
4. 粘贴公钥内容，点击"Add SSH key"

#### 测试SSH连接
```bash
ssh -T git@github.com
# 看到"Hi username! You've successfully authenticated"表示成功
```

---

## 🏗️ 本地开发环境

### 1. 创建GitHub仓库

#### 方法1：使用GitHub CLI（推荐）
```bash
# 创建公开仓库
gh repo create prototype-demos-2025 --public --description "HTML原型演示项目" --add-readme

# 克隆到本地
gh repo clone prototype-demos-2025
cd prototype-demos-2025
```

#### 方法2：使用GitHub网页界面
1. 登录GitHub，点击右上角"+"号 → "New repository"
2. 填写仓库信息：
   - **Repository name**: `prototype-demos-2025`
   - **Description**: `HTML原型演示项目`
   - **Public**: 选择公开
   - **Add a README file**: 勾选
3. 点击"Create repository"

### 2. 克隆仓库到本地

```bash
# 进入你想存放项目的目录
cd ~/Documents  # macOS/Linux
cd C:\Users\你的用户名\Documents  # Windows

# 克隆仓库（替换为你的用户名和仓库名）
git clone https://github.com/你的用户名/prototype-demos-2025.git

# 进入项目目录
cd prototype-demos-2025
```

### 3. 创建项目结构

```bash
# 创建目录结构
mkdir -p demos assets/css assets/js assets/images

# 创建基础文件
touch assets/css/main.css
touch assets/js/main.js
```

### 4. 创建主页导航（可选）

创建 `index.html` 文件：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>原型演示导航</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">原型演示导航</h1>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="list-group">
                    <a href="demos/demo1.html" class="list-group-item list-group-item-action">
                        演示1 - 用户管理
                    </a>
                    <a href="demos/demo2.html" class="list-group-item list-group-item-action">
                        演示2 - 数据分析
                    </a>
                    <!-- 添加更多原型链接 -->
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🤖 AI协作指南

> 这是整个SOP中最关键的部分！高质量的提示词能让AI快速、准确地构建出专业的HTML原型。

### 1. 基本沟通原则

#### 明确具体的需求
```
✅ 好的提示：
“创建一个用户管理页面，包含用户列表、搜索框、添加用户按钮、批量操作功能，使用Bootstrap 5样式”

❌ 模糊的提示：
“做一个管理页面”
```

#### 提供业务上下文
```
✅ 带上下文：
“这是一个广告投放系统的渠道管理页面，需要管理不同渠道的出价配置和状态”

❌ 缺乏上下文：
“做一个表格”
```

### 2. 高效提示词模板

#### 基础模板
```
创建一个[**页面类型**]原型，包含以下功能：

**主要功能**：
- [功能1]
- [功能2] 
- [功能3]

**UI要求**：
- 使用Bootstrap 5框架
- 响应式设计
- [特定颜色/风格要求]

**交互行为**：
- [点击事件]
- [表单验证]
- [数据展示逻辑]

**数据结构**：
- [字段名1]: [类型/说明]
- [字段名2]: [类型/说明]
```

#### 具体示例
```
创建一个包裹价格管理页面原型，包含以下功能：

**主要功能**：
- 包裹价格列表展示（表格形式）
- 高级筛选（渠道、包裹类型、状态、日期范围）
- 批量操作（启用/禁用/删除）
- 新增/编辑价格配置弹窗
- 导入/导出功能

**UI要求**：
- 使用Bootstrap 5框架
- 主色调为蓝色(#007bff)
- 响应式设计，支持移动端
- 表格支持排序和分页

**交互行为**：
- 点击行可编辑
- 多选框选中后显示批量操作按钮
- 筛选条件实时更新结果
- 表单验证和错误提示

**数据结构**：
- channel: 渠道名称
- package: 包裹名称  
- price: 价格（元）
- status: 状态（活跃/暂停）
- created_date: 创建日期
- updated_date: 更新日期
```

### 3. 不同类型原型的提示技巧

#### 表单类原型
```
关键要素：
- 明确字段类型（输入框/下拉框/日期选择器/文件上传）
- 说明验证规则（必填/格式限制/长度限制）
- 描述提交后的行为（跳转/弹窗/刷新）

示例：
“创建用户注册表单，包含用户名（必填，3-20位）、邮箱（必填，需验证格式）、密码（必填，8位以上）、手机号、头像上传，提交成功后显示成功提示并跳转到登录页”
```

#### 数据列表类原型
```
关键要素：
- 列表字段和显示格式
- 筛选和搜索功能
- 排序和分页需求
- 操作按钮（查看/编辑/删除）

示例：
“创建订单管理列表，显示订单号、客户名、金额、状态、下单日期，支持按状态和日期范围筛选，按金额排序，每页显示20条，每行有查看详情和取消订单按钮”
```

#### 仪表板类原型
```
关键要素：
- 数据指标和卡片布局
- 图表类型（柱状图/线图/饼图）
- 时间维度和筛选器

示例：
“创建销售数据仪表板，顶部显示4个指标卡片（今日销售额、订单数、新客户数、转化率），中间显示近七天销售趋势线图，底部显示产品销量排行柱状图，左上角有日期范围选择器”
```

### 4. 进阶技巧

#### 分步骤构建
```
对于复杂原型，建议分步骤说明：

1. 先创建基础结构和布局
2. 再添加具体功能组件
3. 最后完善交互和样式

示例：
“第一步：先创建一个基础的两列布局，左侧是筛选区域，右侧是列表区域”
```

#### 提供参考样式
```
可以提供具体的设计参考：

“参考Ant Design的表格组件风格”
“使用类似GitHub的卡片布局”
“按钮风格参考Bootstrap的primary和secondary样式”
```

#### 明确数据模拟
```
提供具体的模拟数据示例：

“使用以下模拟数据：
- 用户名：张三、李四、王五
- 邮箱：zhangsan@example.com
- 状态：活跃、禁用、待审核
- 注册日期：2024-01-01到2024-12-31”
```

### 5. 页面元素描述大全

#### 导航类元素
```
**顶部导航栏**：
- “顶部固定导航栏，包含Logo、主菜单、用户头像下拉菜单”
- “响应式导航栏，移动端折叠为汉堡包菜单”
- “面包屑导航：首页 > 用户管理 > 用户列表”

**侧边栏导航**：
- “左侧可折叠侧边栏，包含多级菜单和图标”
- “侧边栏支持收起/展开，收起时只显示图标”
- “当前页面菜单项高亮显示，支持二级菜单展开”

**标签页导航**：
- “水平标签页，支持关闭和拖拽排序”
- “垂直标签页，左侧标签列表，右侧内容区域”
```

#### 表单类元素
```
**输入框类型**：
- “带搜索图标的输入框，支持实时搜索提示”
- “密码输入框，右侧有显示/隐藏密码的眼睛图标”
- “多行文本域，支持自动高度调整，右下角显示字数统计”
- “数字输入框，右侧有加减按钮，支持步长设置”

**选择器类型**：
- “带搜索的下拉选择框，支持多选和清空”
- “级联下拉框：省份-城市-区县三级联动”
- “标签式多选框，选中项以标签形式显示，可单独删除”
- “单选按钮组，按钮风格，支持禁用状态”

**日期时间选择**：
- “日期范围选择器，支持快捷选项（今天、本周、本月）”
- “日期时间选择器，支持分钟级精度选择”
- “相对日期选择：最近7天、最近30天等预设选项”

**文件上传**：
- “拖拽上传区域，支持多文件、进度显示、预览功能”
- “头像上传，支持裁剪、旋转、缩放预览”
- “批量文件上传，显示上传列表和整体进度”
```

#### 数据展示类元素
```
**表格组件**：
- “带排序的表格，点击表头切换升序/降序，显示排序箭头”
- “可选中表格，支持单选、多选、全选，表头有全选复选框”
- “固定列表格，左侧操作列固定，内容区水平滚动”
- “展开收起表格，点击行可展开显示详细信息”
- “带筛选的表格，表头有筛选图标，点击显示筛选下拉框”

**列表组件**：
- “卡片列表，每个卡片包含头像、标题、描述、操作按钮”
- “无限滚动列表，滚动到底部自动加载更多数据”
- “分组列表，按类别分组显示，每组有标题和折叠功能”

**统计卡片**：
- “数据卡片，包含大数字、标题、环比增长率、趋势图标”
- “进度卡片，显示完成百分比、进度条、剩余时间”
- “对比卡片，左右两侧显示不同指标，中间有对比箭头”
```

#### 反馈类元素
```
**消息提示**：
- “顶部成功提示条，绿色背景，3秒后自动消失”
- “右上角通知消息，带关闭按钮，支持手动关闭”
- “行内错误提示，红色文字，显示在输入框下方”
- “浮动提示框，跟随鼠标位置，悬停显示离开隐藏”

**加载状态**：
- “按钮加载状态，显示旋转动画和“加载中...”文字”
- “页面加载遮罩，半透明背景，中间显示加载动画”
- “骨架屏加载，用灰色块模拟内容结构，带闪烁动画”

**空状态**：
- “无数据状态，显示空状态图标、描述文字和操作按钮”
- “搜索无结果，显示“未找到相关结果”和重新搜索建议”
- “网络错误状态，显示错误图标和重试按钮”
```

### 6. 交互行为描述大全

#### 点击交互
```
**基础点击**：
- “点击按钮显示加载状态，成功后显示成功提示”
- “点击卡片切换到对应内容，当前卡片高亮显示”
- “点击表格行选中，背景变为浅蓝色，显示操作按钮”

**双击交互**：
- “双击表格行进入编辑模式，单元格变为输入框”
- “双击文件名重命名，文字变为可编辑状态”

**右键交互**：
- “右键点击显示上下文菜单，包含复制、删除、重命名选项”
- “右键菜单支持键盘快捷键显示（如Ctrl+C）”
```

#### 悬停交互
```
**悬停效果**：
- “悬停按钮显示阴影效果，颜色加深”
- “悬停表格行背景变为浅灰色，显示操作按钮”
- “悬停卡片整体上移2px，增加阴影效果”

**悬停提示**：
- “悬停图标显示文字提示，0.5秒延迟显示”
- “悬停用户头像显示用户信息卡片，包含姓名、部门、邮箱”
- “悬停数据点显示详细数值和趋势图”
```

#### 拖拽交互
```
**拖拽排序**：
- “列表项支持拖拽排序，拖拽时显示占位线”
- “表格列支持拖拽调整宽度，鼠标变为双向箭头”
- “模块块支持拖拽重新排列，拖拽时半透明显示”

**拖拽上传**：
- “拖拽文件到上传区域，区域边框变为虚线高亮”
- “拖拽过程中显示“释放以上传”提示文字”
```

#### 输入交互
```
**实时搜索**：
- “输入后300ms延迟触发搜索，防抖处理”
- “搜索结果下拉框，支持键盘上下选择，Enter确认”
- “搜索关键词高亮显示，支持模糊匹配”

**表单验证**：
- “实时验证，输入框失去焦点时验证，错误时边框变红”
- “密码强度指示器，实时显示弱/中/强三个级别”
- “表单提交前统一验证，错误字段自动聚焦”
```

### 7. 操作效果描述大全

#### 动画效果
```
**过渡动画**：
- “页面切换使用淡入淡出效果，持续300ms”
- “弹窗出现使用缩放动画，从中心向外扩展”
- “侧边栏折叠使用平移动画，支持缓动效果”

**加载动画**：
- “按钮加载时显示旋转动画，按钮禁用防止重复点击”
- “列表加载更多时底部显示进度条动画”
- “数据刷新时表格显示顶部进度条，类似YouTube风格”

**反馈动画**：
- “成功操作后按钮显示绿色勾号动画，2秒后恢复”
- “删除操作后列表项向右滑出消失，其他项上移填充”
- “错误提示使用抖动效果，左右抖动3次”
```

#### 状态变化
```
**按钮状态**：
- “按钮有默认、悬停、按下、禁用四种状态，颜色渐变”
- “加载状态按钮显示旋转图标，文字变为“处理中...””
- “成功状态按钮显示勾号图标，背景变绿色”

**表单状态**：
- “输入框有普通、聚焦、错误、禁用状态，边框颜色不同”
- “验证成功时输入框右侧显示绿色勾号”
- “验证失败时输入框右侧显示红色叉号”

**列表状态**：
- “表格行有普通、悬停、选中、编辑四种状态”
- “加载中的列表项显示骨架屏效果”
- “新增的列表项使用高亮动画引起注意”
```

#### 响应式效果
```
**移动端适配**：
- “移动端表格变为卡片列表，每张卡片显示主要信息”
- “移动端导航栏折叠为汉堡包菜单，点击展开”
- “移动端筛选条变为抽屉式，从底部向上滑出”

**屏幕适配**：
- “大屏幕显示3列布局，中屏2列，小屏1列”
- “超宽屏幕侧边栏固定显示，窄屏自动隐藏”
```

### 8. 复杂交互场景描述

#### 批量操作
```
**批量选择**：
- “表头全选复选框，支持全选/反选/清空三种状态”
- “按住Shift键点击可连续选中多行”
- “选中项数量实时显示：“已选中3项””

**批量操作栏**：
- “选中后顶部显示批量操作栏，包含删除、导出、修改状态按钮”
- “批量操作栏支持固定在顶部，不随页面滚动”
- “批量操作完成后自动隐藏操作栏，清空选中状态”
```

#### 内容编辑
```
**在线编辑**：
- “双击表格单元格进入编辑模式，显示输入框和确认/取消按钮”
- “编辑时支持Tab键切换到下一个单元格”
- “编辑完成后按Enter保存，Esc取消”

**富文本编辑**：
- “富文本编辑器，工具栏包含粗体、斜体、颜色、链接等功能”
- “支持图片拖拽上传和粘贴插入”
- “实时预览模式，左侧编辑右侧预览”
```

#### 数据筛选
```
**高级筛选**：
- “多条件筛选，支持且/或逻辑关系选择”
- “筛选条件以标签形式显示，可单独删除”
- “支持保存筛选方案，下次访问时快速应用”

**实时筛选**：
- “筛选条件变化时实时更新结果，显示加载状态”
- “筛选结果数量实时显示：“共找到125条结果””
- “筛选无结果时显示空状态和清空筛选建议”
```

### 9. 提示词优化技巧

#### 使用结构化格式
```
✅ 好的结构：
**页面标题**：用户管理系统
**主要功能**：
1. 用户列表展示
2. 新增/编辑用户
3. 批量操作
**UI要求**：...
**数据结构**：...

❌ 混乱的描述：
“做一个用户管理的页面，要有表格，还要能添加用户，用Bootstrap，要好看一点”
```

#### 提供具体的数值
```
✅ 具体数值：
- “表格每页显示20条数据”
- “输入框最大长度50个字符”
- “图片尺寸200x200像素”

❌ 模糊描述：
- “表格不要太多数据”
- “输入框不要太长”
```

### 10. 业务场景描述模板

#### 电商类原型
```
**商品管理**：
“创建电商商品管理后台，包含商品列表（商品图、名称、价格、库存、状态）、分类筛选、价格区间筛选、批量上架/下架、商品编辑弹窗（支持多图上传、富文本描述）”

**订单管理**：
“订单管理页面，显示订单号、客户信息、商品清单、订单状态（待付款/待发货/已发货/已完成）、操作按钮（查看详情、发货、退款），支持按日期、状态筛选”
```

#### 金融类原型
```
**投资组合**：
“投资组合管理页面，顶部显示总资产、今日收益、累计收益率卡片，中间显示资产分配饼图和收益走势线图，底部显示持仓明细表格（股票代码、名称、持仓数量、成本价、当前价、浮盈亏）”

**风控系统**：
“风险控制仪表板，包含风险等级指示器（低/中/高三级，不同颜色）、实时预警列表、风险事件时间线、各类风险占比统计图”
```

#### 教育类原型
```
**在线学习**：
“在线课程学习页面，左侧课程目录树（支持折叠展开）、中间视频播放区（支持倍速、全屏、进度条）、右侧笔记区域（支持时间戳笔记）、底部讨论区和作业提交”

**成绩管理**：
“学生成绩管理系统，包含学生列表、成绩录入表格（支持批量导入）、成绩统计图表（平均分、及格率、分数段分布）、成绩单打印功能”
```

#### 医疗类原型
```
**患者管理**：
“患者信息管理系统，包含患者基本信息、就诊记录时间线、检查报告上传查看、用药记录、费用清单，支持按科室、医生、日期筛选”

**预约系统**：
“在线预约挂号系统，显示科室列表、医生排班表（日历视图）、可预约时间段（绿色可选、红色已满）、预约记录查询和取消功能”
```

### 11. 常见错误避免

#### 避免的提示方式
```
❌ 过于简单：“做个表单”
❌ 过于复杂：一次性要求实现所有功能
❌ 缺乏上下文：不说明业务场景
❌ 没有数据结构：不说明字段和类型
❌ 忽略交互：不说明点击后的行为
```

### 12. 提示词快速生成器

#### 使用公式快速生成
```
**基础公式**：
[页面类型] + [业务场景] + [主要功能] + [UI要求] + [数据结构] + [交互行为]

**实例应用**：
“管理后台 + 电商平台 + 商品管理 + Bootstrap5响应式 + 商品信息字段 + 批量操作交互”

**快速扩展**：
- 加上特殊要求：+ 支持多语言
- 加上性能要求：+ 支持大数据量分页
- 加上集成要求：+ 集成第三方支付
```

#### 分类快速选择器
```
**页面类型选择**：
- 管理后台 | 用户前台 | 移动端App | 微信小程序
- 仪表板 | 表单页 | 列表页 | 详情页 | 登录页

**业务领域选择**：
- 电商平台 | 金融系统 | 教育平台 | 医疗系统
- OA办公 | CRM系统 | ERP系统 | 内容管理

**功能模块选择**：
- 用户管理 | 权限管理 | 数据统计 | 消息通知
- 文件管理 | 工作流 | 报表系统 | 系统设置
```

### 13. AI协作进阶技巧

#### 上下文保持技巧
```
**分步骤构建时的上下文保持**：
1. 第一步：“基于上一步的基础结构，现在添加...”
2. 第二步：“在当前页面的基础上，增加...”
3. 第三步：“保持现有功能不变，优化...”

**引用前面的设计**：
“按照之前的表格风格，创建一个新的...”
“使用相同的颜色方案和布局风格...”
```

#### 错误纠正技巧
```
**明确指出问题**：
“上一个版本的表格排序功能有问题，需要修正为...”
“按钮颜色不符合设计规范，请改为蓝色主色调”

**提供正确示例**：
“参考这个正确的交互效果：[描述正确的行为]”
“期望的效果是：[具体描述]，而不是现在的[错误行为]”
```

#### 性能优化请求
```
**大数据量处理**：
“表格需要支持显示10000+条数据，请使用虚拟滚动或分页加载”
“图片列表需要懒加载功能，只加载可视区域的图片”

**移动端优化**：
“移动端需要优化触摸交互，按钮大小不小于44px”
“支持手势操作：左滑删除、下拉刷新、上拉加载更多”
```

### 14. 实战案例对比

#### 案例1：用户管理页面

**低效提示**：
```
“做一个用户管理的页面”
```

**高效提示**：
```
创建一个企业用户管理后台页面，包含以下功能：

**主要功能**：
- 用户列表展示（表格形式，支持分页）
- 高级搜索（姓名、邮箱、部门、状态）
- 新增用户弹窗表单
- 批量操作（启用/禁用/删除）
- 用户详情查看和编辑

**数据结构**：
- name: 用户姓名
- email: 邮箱地址
- department: 部门（下拉选择）
- role: 角色（管理员/普通用户）
- status: 状态（活跃/禁用）
- created_date: 创建日期

**UI要求**：
- 使用Bootstrap 5框架
- 主色调为蓝色
- 响应式设计
- 表格每页显示15条数据

**交互行为**：
- 点击用户名可查看详情
- 多选框选中后显示批量操作按钮
- 搜索框支持实时筛选
- 表单提交成功后关闭弹窗并刷新列表
```

---

## 🚀 创建和发布原型

### 1. 创建HTML原型模板

在 `demos` 目录下创建 `template.html`：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>原型标题</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- 自定义CSS -->
    <link href="../assets/css/main.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h1><i class="fas fa-star text-primary"></i> 原型标题</h1>
        
        <!-- 你的原型内容 -->
        <div class="card">
            <div class="card-body">
                <p>这里是你的原型内容...</p>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- 自定义JS -->
    <script src="../assets/js/main.js"></script>
</body>
</html>
```

### 2. 本地预览

#### 使用VS Code Live Server
1. 在VS Code中打开HTML文件
2. 右键选择"Open with Live Server"
3. 浏览器会自动打开预览

#### 使用Python简单服务器
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# 访问 http://localhost:8000
```

### 3. 提交代码到GitHub

```bash
# 查看文件状态
git status

# 添加所有文件
git add .

# 提交更改
git commit -m "feat: add initial project structure and template"

# 推送到GitHub
git push origin main
```

### 4. 启用GitHub Pages

#### 方法1：使用GitHub CLI（推荐）
```bash
# 启用GitHub Pages
gh api repos/:owner/:repo/pages -X POST -f source.branch=main -f source.path=/

# 或使用更简单的命令（需要gh版本2.0+）
gh repo edit --enable-pages --pages-branch main

# 查看Pages状态
gh api repos/:owner/:repo/pages
```

#### 方法2：使用GitHub网页界面
1. 进入GitHub仓库页面
2. 点击 **Settings** 标签
3. 滚动到左侧菜单的 **Pages** 部分
4. 在 **Source** 下选择 **Deploy from a branch**
5. **Branch** 选择 **main**
6. **Folder** 选择 **/ (root)**
7. 点击 **Save**

### 5. 获取访问链接

等待1-2分钟后，访问链接格式为：
```
https://你的用户名.github.io/仓库名/
https://你的用户名.github.io/仓库名/demos/文件名.html
```

---

## 📝 日常开发流程

### 1. 创建新原型

```bash
# 复制模板
cp demos/template.html demos/new-prototype.html

# 编辑文件
code demos/new-prototype.html  # 使用VS Code打开
```

### 2. 开发和测试

```bash
# 启动本地服务器预览
python -m http.server 8000

# 或使用VS Code Live Server插件
```

### 3. 提交和发布

```bash
# 添加文件
git add .

# 提交（使用有意义的提交信息）
git commit -m "feat: add user management prototype"

# 推送到GitHub
git push origin main

# GitHub Pages会在1-2分钟内自动更新
```

### 4. 快速提交命令

#### 使用GitHub CLI的便捷操作
```bash
# 快速创建和发布新原型
gh repo create my-new-prototype --public --clone
cd my-new-prototype
echo "<h1>Hello World</h1>" > index.html
gh repo edit --enable-pages --pages-branch main
git add . && git commit -m "Initial prototype" && git push

# 查看仓库信息
gh repo view

# 在浏览器中打开仓库
gh repo view --web
```

#### 传统快捷命令
创建快捷命令（可选）：
```bash
# 在 ~/.bashrc 或 ~/.zshrc 中添加
alias gp="git add . && git commit -m 'Update prototype' && git push"

# 使用
gp
```

---

## 🎯 最佳实践

### 1. 目录结构规范

```
prototype-demos-2025/
├── README.md                 # 项目说明
├── index.html               # 导航首页
├── demos/                   # 原型文件
│   ├── template.html        # 模板文件
│   ├── user-management.html # 用户管理原型
│   ├── data-analysis.html   # 数据分析原型
│   └── mobile/              # 移动端原型
│       └── mobile-app.html
├── assets/                  # 静态资源
│   ├── css/
│   │   ├── main.css        # 全局样式
│   │   └── mobile.css      # 移动端样式
│   ├── js/
│   │   ├── main.js         # 全局脚本
│   │   └── utils.js        # 工具函数
│   └── images/             # 图片资源
│       ├── logo.png
│       └── screenshots/
└── docs/                   # 文档（可选）
    └── api.md
```

### 2. 命名规范

- **文件名**：使用小写字母和连字符，如 `user-management.html`
- **CSS类名**：使用BEM命名法或Bootstrap类
- **提交信息**：使用约定式提交格式
  ```bash
  feat: 添加新功能
  fix: 修复bug
  style: 样式调整
  docs: 文档更新
  ```

### 3. 代码规范

#### HTML结构
```html
<!-- 使用语义化标签 -->
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

<!-- 使用Bootstrap组件 -->
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <!-- 内容 -->
                </div>
            </div>
        </div>
    </div>
</div>
```

#### CSS样式
```css
/* 使用CSS变量 */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .mobile-hidden {
        display: none;
    }
}
```

#### JavaScript代码
```javascript
// 使用现代JavaScript语法
const initApp = () => {
    // 初始化代码
};

// 事件监听
document.addEventListener('DOMContentLoaded', initApp);

// 模块化代码
const Utils = {
    showToast: (message, type = 'info') => {
        // Toast显示逻辑
    }
};
```

### 4. 性能优化

- 使用CDN加载框架
- 压缩图片（推荐使用 [TinyPNG](https://tinypng.com/)）
- 避免内联大量CSS/JS
- 使用浏览器缓存

---

## 🔧 常见问题

### 1. Git和GitHub CLI相关问题

**Q: 推送时提示权限错误**
```bash
# 检查远程仓库地址
git remote -v

# 如果是HTTPS，改为SSH
git remote set-url origin git@github.com:用户名/仓库名.git

# 或使用GitHub CLI重新认证
gh auth login
```

**Q: 提交时提示用户信息未配置**
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

**Q: GitHub CLI命令失败**
```bash
# 检查登录状态
gh auth status

# 重新登录
gh auth logout
gh auth login

# 检查版本
gh --version

# 更新GitHub CLI
brew upgrade gh  # macOS
winget upgrade GitHub.cli  # Windows
```

**Q: GitHub CLI创建仓库失败**
```bash
# 检查是否有创建仓库的权限
gh auth status

# 使用详细模式查看错误
gh repo create test-repo --public --debug

# 检查仓库名是否已存在
gh repo list
```

### 2. GitHub Pages问题

**Q: 页面404错误**
- 检查文件路径是否正确
- 确保文件名大小写匹配
- 等待1-2分钟让GitHub Pages更新

**Q: 样式或脚本加载失败**
- 检查相对路径是否正确
- 使用CDN链接而非本地文件
- 检查文件是否已提交到仓库

### 3. 开发环境问题

**Q: VS Code Live Server无法启动**
```bash
# 安装Live Server插件
# 或使用Python服务器
python -m http.server 8000
```

**Q: 中文字符显示乱码**
- 确保HTML文件使用UTF-8编码
- 添加 `<meta charset="UTF-8">` 标签

---

## 📚 参考资源

### 官方文档
- [Git官方文档](https://git-scm.com/doc)
- [GitHub Pages文档](https://docs.github.com/en/pages)
- [Bootstrap文档](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### 在线工具
- [Bootstrap组件生成器](https://bootstrap.build/)
- [Font Awesome图标库](https://fontawesome.com/icons)
- [CSS渐变生成器](https://cssgradient.io/)
- [颜色搭配工具](https://coolors.co/)

### 学习资源
- [MDN Web文档](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Can I Use](https://caniuse.com/) - 浏览器兼容性查询

---

## ⏱️ 时间估算

| 步骤 | 首次操作 | 后续操作 |
|------|----------|----------|
| 环境配置 | 30-60分钟 | - |
| 创建仓库 | 5-10分钟 | - |
| 创建新原型 | 10-30分钟 | 5-15分钟 |
| 提交发布 | 2-5分钟 | 1-2分钟 |
| GitHub Pages生效 | 1-2分钟 | 1-2分钟 |

---

## 🎉 完整示例

### 使用GitHub CLI的完整流程（推荐）

```bash
# 1. 创建新仓库并克隆
gh repo create prototype-demos-2025 --public --description "HTML原型演示项目" --add-readme --clone
cd prototype-demos-2025

# 2. 创建项目结构
mkdir -p demos assets/css assets/js
echo "/* Global styles */" > assets/css/main.css
echo "// Global scripts" > assets/js/main.js

# 3. 创建原型文件
cat > demos/user-dashboard.html << 'EOF'
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户仪表板</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h1>📊 用户仪表板</h1>
        <div class="card">
            <div class="card-body">
                <p>这是一个用户仪表板原型。</p>
            </div>
        </div>
    </div>
</body>
</html>
EOF

# 4. 提交初始版本
git add .
git commit -m "feat: add initial project structure and user dashboard prototype"
git push origin main

# 5. 启用GitHub Pages
gh repo edit --enable-pages --pages-branch main

# 6. 查看仓库信息和链接
gh repo view
echo "访问链接: https://$(gh api user --jq .login).github.io/prototype-demos-2025/demos/user-dashboard.html"

# 7. 在浏览器中打开仓库
gh repo view --web
```

### 传统方式的完整流程

```bash
# 1. 克隆仓库
git clone https://github.com/username/prototype-demos-2025.git
cd prototype-demos-2025

# 2. 创建原型文件
cp demos/template.html demos/user-dashboard.html

# 3. 编辑文件（使用编辑器修改内容）

# 4. 本地预览
python -m http.server 8000
# 访问 http://localhost:8000/demos/user-dashboard.html

# 5. 提交发布
git add .
git commit -m "feat: add user dashboard prototype"
git push origin main

# 6. 访问线上版本（等待1-2分钟）
# https://username.github.io/prototype-demos-2025/demos/user-dashboard.html
```

---

## 📞 技术支持

如果在操作过程中遇到问题，可以：

1. 查看本文档的常见问题部分
2. 搜索相关错误信息
3. 联系团队技术负责人
4. 在团队群里提问

---

**祝你使用愉快！🚀**