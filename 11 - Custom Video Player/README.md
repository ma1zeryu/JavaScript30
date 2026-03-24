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

## 知识点

- `video`对象的属性、方法和事件
  - `paused`
  - `play()`
  - `pause()`
  - `currentTime`

## hook是什么

在一个事后插入一段你的逻辑，比如click时间后执行的代码就是一个hook

`const skipButtons = player.querySelectorAll('[data-skip]');`这样拿下来的是一个`NodeList`，想绑定事件需要forEach

## 优化

增加了一个直接随着拖动更改进度条的函数，避免一卡一卡的，但是我代码里的逻辑提炼的不是很好，有一些重复操作可以单独抽出来，懒了就不改了

```javascript
function updateProgress(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  const percent = (scrubTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
```

防止用户鼠标离开进度条区域再松开，导致mousedown变量错误

```javascript
progress.addEventListener("mouseleave", () => (mousedown = false));
```
