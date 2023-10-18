/* 深拷贝 */
export function deep(obj, loop = 1) {
  if (typeof obj !== 'object' || loop >= 7) {
    return obj
  }
  loop++
  let res = {}
  for (const key in obj) {
    res[key] = deep(obj[key], loop)
  }
  return res
}

/* 防抖 */
export function antishake(fn, time = 1000) {
  let timer
  return (() => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, time)
  })()
}

/* 监听 */
export function watchhandle(obj, fn) {
  function watch(object) {
    if (typeof object !== 'object') return object
    return new Proxy(object, {
      set: (obj1, prop, value) => {
        obj1[prop] = watch(value)
        fn(obj)
        return true
      },
      get: function (obj1, prop) {
        return prop in obj1 ? obj1[prop] : 0
      }
    })
  }
  return watch(obj)
}

/* 平均值 */
export function average(arr) {
  if (arr && Array.isArray(arr)) {
    let res = 0
    let length = arr.length
    let total = 0
    for (let i = 0; i < length; i++) {
      const item = arr[i]
      total += item
    }
    res = total / length ? total / length : 0
    return res
  }
}
