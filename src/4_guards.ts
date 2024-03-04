// 타입 가드(Guards)

function logText(el: Element) {
  console.log(el.textContent)
}

const h1El = document.querySelector('h1')// as HTMLHeadingElement

// logText(h1El)

/// 데이터가 존재할 때만 내용이 동작하게 if 조건문 사용
// if (h1El) {
//   logText(h1El)
// }
if (h1El instanceof HTMLHeadingElement) {
  logText(h1El)
}


function addGuards(val: string | number | boolean) {
  let res = 'Result => '

  if (typeof val === 'number') {
    res += val.toFixed(2)
  } else if (typeof val === 'string') {
    res += val.toUpperCase()
  }
  console.log(res)
}
addGuards(3.141592)
addGuards('hello world')