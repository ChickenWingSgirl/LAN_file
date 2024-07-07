# LAN_file
一个基于node.js和HTML5的跨平台局域网传输项目

## 项目概述

局域网文件传输项目是一个简单的基于Web的应用程序，允许用户在局域网内上传和下载文件。该项目使用Node.js和Express框架作为服务器端，并使用HTML5作为客户端。

## 文件结构

以下是项目的目录结构：

```
LANFileTransfer
├── public
│   └── index.html
├── server.js
├── package.json
└── files
    └── (在这里放置您共享的文件)
```

### 目录和文件描述

- **public/**: 包含服务器提供的静态文件，如Web界面的HTML文件。
  - **index.html**: 提供上传和下载文件的用户界面的主要HTML文件。
- **server.js**: 处理文件上传和提供静态文件及文件列表的主要服务器脚本。
- **package.json**: Node.js项目的配置文件，包括依赖项和脚本。
- **files/**: 存储上传文件和提供文件服务的目录。

---

## 使用说明

### 前提条件

- 系统上安装了Node.js。
- 需要一个Web浏览器来访问应用程序。

### 设置

 **安装依赖项**：

   确保你在项目目录（`LANFileTransfer`）中，并运行：

   ```bash
   npm install
   ```

### 启动服务器

在项目目录中运行以下命令以启动服务器：

```bash
npm start
```

你应该会看到如下输出，表示服务器正在运行：

```
Server is running at http://localhost:3000
Server is accessible at http://"你的ip地址":3000
```

### 访问应用程序

打开你的Web浏览器，并导航到：

```
http://localhost:3000
或者
http://"你的ip地址":3000
```

### 使用应用程序

1. **上传文件**：
   - 使用文件输入表单从本地计算机选择一个文件。
   - 点击“Upload”按钮将选定的文件上传到服务器。
   - 上传成功后，文件将显示在表单下方的文件列表中。

2. **下载文件**：
   - 文件列表显示服务器上`files/`目录中的所有文件。
   - 点击文件列表中的文件名即可下载文件。

### 注意事项

- 上传的文件存储在`files/`目录中。
- 确保`files/`目录存在于项目根目录中。如果没有，创建它：

  ```bash
  mkdir files
  ```

## 故障排除

- **错误：Cannot GET /files/<filename>**：确保`files`目录存在并且文件路径生成正确。
- **模块未找到**：运行`npm install`以确保所有依赖项已安装。
- **服务器未启动**：检查控制台中的错误，并确保正确安装了Node.js。

---

## 依赖项

- Node.js
- Express
- Multer

### 安装依赖项

所有必要的依赖项都列在`package.json`文件中。要安装它们，只需运行：

```bash
npm install
run start
```

---
