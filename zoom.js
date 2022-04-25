//获取dom节点
const panel = document.querySelector(".panel");
const zoomArea = document.querySelector(".zoomArea");
const bigImageArea = document.querySelector(".bigImageArea");
const bigImage = document.querySelector(".bigImage");

panel.onmousemove = function (event) {
  zoomArea.style.display = "block";
  bigImageArea.style.display = "block";

  let imageX = event.offsetX;
  let imageY = event.offsetY;

  let left = imageX - zoomArea.offsetWidth / 2;
  let top = imageY - zoomArea.offsetHeight / 2;
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
  zoomArea.style.left = left + "px";
  zoomArea.style.top = top + "px";
  bigImage.style.left = -2 * left + "px";
  bigImage.style.top = -2 * top + "px";
};
panel.onmouseleave = function () {
  zoomArea.style.display = "none";
  bigImageArea.style.display = "none";
};
