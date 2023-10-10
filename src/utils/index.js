import { Message, MessageBox } from 'element-ui'
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
export const msgCopy = (value) => {
  if (!value) {
    Message.error('无复制内容')
    return
  }
  // 动态创建 textarea 标签
  const textarea = document.createElement('textarea')
  // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
  textarea.readOnly = true
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  // 将要 copy 的值赋给 textarea 标签的 value 属性
  textarea.value = value
  // 将 textarea 插入到 body 中
  document.body.appendChild(textarea)
  // 选中值并复制
  textarea.select()
  // textarea.setSelectionRange(0, textarea.value.length);
  const result = document.execCommand('Copy')
  if (result) {
    Message.success('复制成功')
  }
  document.body.removeChild(textarea)
}
// time number 时间戳
export const formatDate = (time) => {
  const addZero = (m) => (m < 10 ? `0${m}` : m)
  if ((`${time}`).length === 10) {
    time *= 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  return (
    `${d.getFullYear()}.${addZero(d.getMonth() + 1)}.${addZero(d.getDate())}`
  )
}

export const formatDate2 = (time) => {
  const addZero = (m) => (m < 10 ? `0${m}` : m)
  if ((`${time}`).length === 10) {
    time *= 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  return (
    `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())}`
  )
}

export function formatTime(time) {
  const addZero = (m) => (m < 10 ? `0${m}` : m)
  if ((`${time}`).length === 10) {
    time *= 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  return (
    `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())} ${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(d.getSeconds())}`
  )
}

export function formatMinute(time) {
  const addZero = (m) => (m < 10 ? `0${m}` : m)
  if ((`${time}`).length === 10) {
    time *= 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  return (
    `${d.getFullYear()}.${addZero(d.getMonth() + 1)}.${addZero(d.getDate())} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`
  )
}
// 数组去重
export const unique = (arr) => {
  return Array.from(new Set(arr))
}
// 判断一个元素是否在数组中
export const contains = (arr, val) => {
  return arr.indexOf(val) !== -1
}
// 验证URL网址
export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s)
}
// 手机号校验：
export const isMobile = (phone) => {
  return /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(phone)
}
