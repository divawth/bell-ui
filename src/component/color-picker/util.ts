import { DOCUMENT, NULL } from '../constant'
import { toNumber } from '../util'

export const MODE_HEX = 'hex'
export const MODE_RGB = 'rgb'
export const COLOR_DEFAULT = '#000'

// 0 ≤ hue ＜ 360
export function normalizeHue(hue: number) {
  return 359.9999 * (hue > 1 ? 1 : hue < 0 ? 0 : hue)
}

// 0 ≤ saturation ≤ 100
export function normalizeSaturation(saturation: number) {
  return 100 * (saturation > 1 ? 1 : saturation < 0 ? 0 : saturation)
}

// 0 ≤ value ≤ 100
export function normalizeValue(value: number) {
  return normalizeSaturation(value)
}

export function normalizeAlpha(alpha: number) {
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha
}

export function getColorByName(color: string) {
  const ctx = DOCUMENT
    .createElement('canvas')
    .getContext('2d') as CanvasRenderingContext2D
  ctx.fillStyle = color
  return ctx.fillStyle
}

export function getModeByColor(color: string) {
  if (typeof color === 'string') {
    if (/^\s*#/.test(color)) {
      return MODE_HEX
    }
    if (/rgb/i.test(color)) {
      return MODE_RGB
    }
  }
}

export function hsv2rgb(h: number, s: number, v: number) {

	s /= 100
	v /= 100

	let r = 0
	let g = 0
	let b = 0

	if (s === 0) {
		r = g = b = v
	}
  else {
		let _h = h / 60
		let i = Math.floor(_h)
		let f = _h - i
		let p = v * (1 - s)
		let q = v * (1 - f * s)
		let t = v * (1 - (1 - f) * s)
		switch (i) {
			case 0:
				r = v
				g = t
				b = p
				break
			case 1:
				r = q
				g = v
				b = p
				break
			case 2:
				r = p
				g = v
				b = t
				break
			case 3:
				r = p
				g = q
				b = v
				break
			case 4:
				r = t
				g = p
				b = v
				break
			case 5:
				r = v
				g = p
				b = q
				break
		}
	}

	return [
    r * 255,
    g * 255,
    b * 255
  ]

}

export function rgb2hsv(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  let h = 0
  let v = max
  let s = max === 0 ? 0 : diff / max

  if (max === min) {
    h = 0
  }
  else if (max === r && g >= b) {
    h = 60 * ((g - b) / diff)
  }
  else if (max === r && g < b) {
    h = 60 * ((g - b) / diff) + 360
  }
  else if (max === g) {
    h = 60 * ((b - r) / diff) + 120
  }
  else if (max === b) {
    h = 60 * ((r - g) / diff) + 240
  }

  return [
    h,
    s * 100,
    v * 100,
  ]
}

/**
 * rgb2hex
 *
 * @param {number} r 红色颜色值 0~255
 * @param {number} g 绿色颜色值 0~255
 * @param {number} b 蓝色颜色值 0~255
 * @param {number|void} a 透明度 0~1，默认 1
 */
export function rgb2hex(r: number, g: number, b: number, a: number | void) {
  let alphaStr = ''
  if (typeof a === 'number') {
    a = Math.round(255 * a)
    alphaStr = (a | 1 << 8).toString(16).slice(1)
  }
  const colorStr = ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1)
  return '#' + colorStr.toUpperCase() + alphaStr.toUpperCase()
}

/**
 * hex2rgb
 *
 * @param {string} hex hex颜色值 eg: #000、#325312、#b2c343
 */
export function hex2rgb(hex: string) {

  hex = hex.replace(/^#/, '')

  let alpha = -1

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255
    hex = hex.slice(0, 6)
  }

  if (hex.length === 4) {
    alpha = parseInt(new Array(3).join(hex.slice(3, 4)), 16) / 255
    hex = hex.slice(0, 3)
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const num = parseInt(hex, 16)
  const r = num >> 16
  const g = (num >> 8) & 255
  const b = num & 255
  const rgb = [r, g, b]

  if (alpha >= 0) {
    rgb.push(alpha)
  }

  return rgb
}

export function stringifyRgb(rgb: number[], alpha: number | void) {

  const separator = ', '

  let name = 'rgb'
  let value = [
    Math.floor(rgb[0]),
    Math.floor(rgb[1]),
    Math.floor(rgb[2]),
  ].join(separator)

  if (typeof alpha === 'number') {
    name = 'rgba'
    value += separator + (Math.floor(alpha * 100) / 100)
  }

  return `${name}(${value})`

}

function parseRgb(rgb: string) {
  return rgb.replace(/ *rgba?\(([^)]+)\) */i, '$1').split(',').map(
    function (value: string) {
      return toNumber(value)
    }
  )
}

const converts = {
  rgb: {
    hex(color: string) {
      const value = parseRgb(color)
      return rgb2hex(value[0], value[1], value[2], value[3])
    }
  },
  hex: {
    rgb(color: string) {
      const rgba = hex2rgb(color)
      return stringifyRgb(rgba, rgba[4])
    }
  },
}

export function parseColor(value: string, alphaEnabled: boolean) {

  let mode = getModeByColor(value)
  if (!mode) {
    mode = MODE_HEX
    if (/^[a-zA-Z]+$/.test(value)) {
      value = getColorByName(value)
    }
    else {
      value = COLOR_DEFAULT
    }
  }

  let color = value
  if (mode !== MODE_RGB) {
    color = converts[mode][MODE_RGB](value)
  }

  const rgba = parseRgb(color)
  const hsv = rgb2hsv(rgba[0], rgba[1], rgba[2])

  return {
    hsv,
    rgb: [rgba[0], rgba[1], rgba[2]],
    alpha: alphaEnabled && rgba[3] != NULL ? rgba[3] : 1,
  }
}