# 白浩个人学术网站 | Hao Bai's Academic Website

## 📁 文件结构

```
academic-website/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript交互
├── images/         # 图片文件夹
│   └── profile.jpg # 个人照片（需要自行添加）
└── README.md       # 说明文档
```

## 🚀 使用方法

### 1. 添加个人照片
将您的个人照片命名为 `profile.jpg` 放入 `images/` 文件夹中。

建议：
- 照片尺寸：至少 400x400 像素
- 格式：JPG 或 PNG
- 比例：正方形（1:1）最佳

### 2. 本地预览
直接用浏览器打开 `index.html` 即可预览。

推荐使用 Live Server 扩展（VS Code）或其他本地服务器进行预览，以避免跨域问题。

### 3. 部署到服务器
将整个文件夹上传到您的 Web 服务器或使用以下免费托管服务：
- GitHub Pages
- Netlify
- Vercel

## ✏️ 自定义修改

### 修改个人信息
编辑 `index.html` 中的以下部分：
- 导航栏 Logo
- Hero 区域的姓名、职位、描述
- About Me 部分的统计数据和介绍文字
- Education 部分的学历信息
- Research 部分的研究项目
- Publications 部分的论文列表
- Contact 部分的联系方式

### 修改颜色主题
编辑 `styles.css` 开头的 CSS 变量：

```css
:root {
    --primary-color: #1a1a2e;      /* 主色调 */
    --secondary-color: #4f46e5;    /* 次要色调 */
    --accent-color: #06b6d4;       /* 强调色 */
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 添加新内容
参考现有的 HTML 结构添加新的：
- 研究项目卡片
- 论文条目
- 联系方式

## 📱 响应式设计

网站已适配以下设备：
- 桌面电脑 (1200px+)
- 平板电脑 (768px - 1024px)
- 手机 (480px - 768px)
- 小屏手机 (< 480px)

## 🎨 功能特性

- ✅ 响应式导航栏
- ✅ 平滑滚动
- ✅ 滚动动画效果
- ✅ 统计数字动画
- ✅ 论文筛选功能
- ✅ 返回顶部按钮
- ✅ 移动端适配菜单
- ✅ 粒子背景效果

## 🔧 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.x (图标)
- Google Fonts (Inter, Noto Sans SC)

## 📞 联系方式

如有问题，请联系：baihao@whu.edu.cn

---

© 2025 Hao Bai. All rights reserved.
