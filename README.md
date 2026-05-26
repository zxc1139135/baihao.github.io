# Hao Bai Academic Homepage

这是一个适用于 GitHub Pages 的静态学术主页版本，整体改为简约、克制、科研学术风。

## 修改重点

- 去掉原来的粒子背景、浮动卡片、强渐变和过多图标，降低视觉噪音。
- 采用论文/研究者主页常见的信息结构：About、Research、Publications、Education、Contact。
- 优化首屏层级：姓名、身份、研究方向、快捷入口和照片摘要更直观。
- Publication 区域改为清晰的论文条目，强调年份、作者、期刊/会议、CCF 信息。
- Contact 区域保留邮箱、GitHub 和地址，弱化不必要的私人信息展示。
- 保留移动端响应式导航和论文筛选功能。

## 文件结构

```
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── profile.jpg
│   ├── profile_blue.jpg
│   └── demo.jpg
└── README.md
```

## 使用方法

直接上传到 GitHub Pages 仓库根目录即可。也可以在本地用浏览器打开 `index.html` 预览。

## 后续可替换内容

- 将 `Publications` 中的 `#` 链接替换成真实 PDF、代码仓库、Google Scholar 或 DOI。
- 如需公开 Google Scholar，将导航和首屏按钮处补充 Scholar 链接即可。
- 如需中文主页，可把主要段落翻译为中文，当前版本以国际学术主页常用英文为主。
