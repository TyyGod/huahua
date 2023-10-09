const baseSize = 24
function setRem () {
  const scale = document.documentElement.clientWidth / 1920
  let fontSize = (baseSize * Math.min(scale, 2))>12 ? (baseSize * Math.min(scale, 2)): 12
  document.documentElement.style.fontSize = fontSize + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
