//获取dom节点
const panel = document.querySelector(".panel");
const zoomArea = document.querySelector(".zoomArea");
const bigImageArea = document.querySelector(".bigImageArea");
const bigImage = document.querySelector(".bigImage");

panel.onmousemove = function (event) {
  //鼠标进入展示需要放大的区域和放大后的图片
  zoomArea.style.display = "block";
  bigImageArea.style.display = "block";

  //获取展示区域的坐标
  let imageX = event.offsetX;
  let imageY = event.offsetY;

  //计算出展示区的偏移量
  let left = imageX - zoomArea.offsetWidth / 2;
  let top = imageY - zoomArea.offsetHeight / 2;
  //判断，如果超出图片范围进行设置
  if (left >= zoomArea.offsetWidth) {
    left = zoomArea.offsetWidth;
  }
  if (left <= 0) {
    left = 0;
  }
  if (top >= zoomArea.offsetHeight) {
    top = zoomArea.offsetHeight;
  }
  if (top <= 0) {
    top = 0;
  }
  //修改偏移量
  zoomArea.style.left = left + "px";
  zoomArea.style.top = top + "px";
  bigImage.style.left = -2 * left + "px";
  bigImage.style.top = -2 * top + "px";
};
//当鼠标离开隐藏展示区
panel.onmouseleave = function () {
  zoomArea.style.display = "none";
  bigImageArea.style.display = "none";
};
