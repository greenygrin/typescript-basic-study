// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}
const cat: Cat = {
  name: 'Lucy',
  age: 3
}

function helloCat(this: Cat, message: string) {
  console.log( `Hello ${this.name}, ${message}`)
}
helloCat.call(cat, 'You are pretty awesome!')