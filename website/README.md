# 学术个人网站项目

这是一个现代化、响应式的学术个人网站，采用模块化设计，便于维护和扩展。

## 📁 项目结构

```
academic-website/
├── index.html          # 主页面文件
├── css/
│   └── styles.css      # 样式文件
├── js/
│   └── script.js       # JavaScript功能文件
├── images/             # 图片资源文件夹
│   └── profile.jpg     # 个人照片
└── README.md          # 项目说明文档
```

## 🚀 快速开始

### 1. 下载项目文件

创建以下文件结构并复制相应内容：

- `index.html` - 从第一个代码块复制
- `css/styles.css` - 从第二个代码块复制  
- `js/script.js` - 从第三个代码块复制

### 2. 个性化内容

#### 修改个人信息
在 `index.html` 中更新以下内容：

```html
<!-- 个人姓名和标题 -->
<h1>张三博士</h1>
<div class="subtitle">计算机科学研究员</div>

<!-- 个人照片 -->
<img src="images/profile.jpg" alt="张三博士" class="profile-img">

<!-- 联系信息 -->
<div class="contact-value">your-email@university.edu</div>
<div class="contact-value">+86 138-0000-0000</div>
<div class="contact-value">您的实际地址</div>
<a href="https://github.com/your-username">github.com/your-username</a>
```

#### 更新研究成果和论文
根据您的实际研究成果修改相应部分的内容。

### 3. 添加个人照片

1. 将您的个人照片重命名为 `profile.jpg`
2. 放置在 `images/` 文件夹中
3. 或者直接修改 `index.html` 中的图片链接

## 🌐 部署到GitHub Pages

### 方法一：使用GitHub网页界面

1. **创建仓库**
   - 登录GitHub
   - 点击"New repository"
   - 仓库名设置为：`your-username.github.io`
   - 设置为Public
   - 点击"Create repository"

2. **上传文件**
   - 点击"uploading an existing file"
   - 拖拽所有文件到页面
   - 输入提交信息："Initial commit"
   - 点击"Commit changes"

3. **启用GitHub Pages**
   - 进入仓库Settings页面
   - 滚动到"Pages"部分
   - Source选择"Deploy from a branch"
   - Branch选择"main"
   - 点击"Save"

### 方法二：使用Git命令行

```bash
# 克隆仓库
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io

# 添加文件
# 复制所有项目文件到此目录

# 提交并推送
git add .
git commit -m "Initial commit: Academic website"
git push origin main
```

## 🎨 自定义样式

### 修改颜色主题

在 `css/styles.css` 文件的CSS变量部分修改：

```css
:root {
    --primary-color: #2c3e50;    /* 主色调 */
    --secondary-color: #3498db;  /* 辅助色 */
    --accent-color: #e74c3c;     /* 强调色 */
    --text-color: #2c3e50;       /* 文字颜色 */
    --light-bg: #f8f9fa;         /* 浅色背景 */
}
```

### 修改字体

```css
body {
    font-family: 'Your-Preferred-Font', 'Segoe UI', sans-serif;
}
```

## 📱 响应式设计

网站已针对以下设备进行优化：
- 🖥️ 桌面电脑 (1200px+)
- 💻 笔记本电脑 (768px - 1199px)
- 📱 平板电脑 (480px - 767px)
- 📱 手机 (< 480px)

## ⚡ 性能优化

### 已实现的优化：
- CSS和JavaScript文件分离
- 滚动事件节流处理
- 图片懒加载友好
- 最小化动画性能影响

### 进一步优化建议：
- 压缩CSS和JS文件
- 优化图片格式和大小
- 使用CDN加速
- 添加Service Worker

## 🔧 自定义功能

### 添加新的页面部分

1. 在 `index.html` 中添加新的section
2. 在 `css/styles.css` 中添加对应样式
3. 如需要，在 `js/script.js` 中添加交互功能

### 添加联系表单

如需要工作的联系表单，可以集成：
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

## 🛠️ 浏览器兼容性

支持的浏览器：
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📞 技术支持

如果您在使用过程中遇到问题：

1. 检查浏览器控制台是否有错误信息
2. 确认文件路径是否正确
3. 验证HTML、CSS语法是否有误
4. 确保所有文件都已正确上传

## 📝 更新日志

### v1.0.0 (2025-06-03)
- 初始版本发布
- 响应式设计
- 模块化文件结构
- 滚动动画效果
- GitHub Pages兼容

## 📄 许可证

本项目采用 MIT 许可证，您可以自由使用、修改和分发。

---

🎓 祝您的学术网站建设顺利！