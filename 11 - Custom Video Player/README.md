自定义视频播放器

## 如何关掉video自带控件

`<video src="xxx.mp4" controls></video>`去掉`controls`属性即可，`<video id="video" src="xxx.mp4"></video>`

## 自定义播放器架构

```html
<div class="player">
  <video id="video" src="xxx.mp4"></video>

  <div class="controls">
    <button id="play">播放</button>
    <input id="progress" type="range" value="0" />
    <button id="fullscreen">全屏</button>
  </div>
</div>
```

## JS控制API

本质就是操控`HTMLVideoElement`

1. 播放/暂停

```javascript
const video = document.getElementById("video");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
```

2. 进度条控制

更新进度（视频->UI）

```javascript
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
});
```

## hook是什么

在一个事后插入一段你的逻辑，比如click时间后执行的代码就是一个hook
