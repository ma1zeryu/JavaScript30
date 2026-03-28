## 基础知识

利用`npm install`和`npm start`来安装`package.json`跑起来前端项目，`http://localhost:3000`，因为有些浏览器api对权限有限制，必须用服务器跑起来才能调用一些api，

普通资源，比如图片、文件`img.src = URL.createObjectURL(file);`，媒体流比如摄像头，麦克风流`video.srcObject = stream;`原视频的写法貌似已经被摒弃了，啊啊啊视频已经旧到原方法被浏览器移除支持了hh

核心通过`let pixels = ctx.getImageData(0, 0, width, height);`获得图像的`RGBA`像素数组，`[R, G, B, A,  R, G, B, A,  R, G, B, A, ...]`然后对这些数据进行操作
