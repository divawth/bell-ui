// 数字键 48-57
// 大键盘 .(190) -(189)
// 小键盘 .(110) -(109)
// 删除键 8
// shift 16
// ctrl 17
// alt 18
// capslock 20
// cmd 91、93
// 方向键 37-40
export function isHelper(keyCode: number) {
  return keyCode >= 37 && keyCode <= 40
  || keyCode >= 16 && keyCode <= 18
  || keyCode === 8
  || keyCode === 20
  || keyCode === 91
  || keyCode === 93
}

export function isDot(keyCode: number) {
  return keyCode === 110 || keyCode === 190
}

export function isMinus(keyCode: number) {
  return keyCode === 109 || keyCode === 189
}

export function isNumber(keyCode: number) {
  return keyCode >= 48 && keyCode <= 57
}