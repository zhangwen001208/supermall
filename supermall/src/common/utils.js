/* 防抖函数 */
export function debounce(func,delay) {
  let timer= null
  return function (...args){
    if(timer) clearImmediate(timer)
    timer = setImmediate(() => {
      func.apply(this,args)
    },delay)
  }
}
