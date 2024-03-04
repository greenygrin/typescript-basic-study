// 타입 종류

/// 문자
let str: string
let red: string = 'Red'
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourClor: string = 'Your color is' + green


/// 숫자
let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

num = 1
console.log(num)


/// 불린
let isBoolean: boolean
let isDone: boolean = false


/// Null / Undefined (거의 사용X)
let nul: null
let und: undefined

nul = null
console.log(nul)
console.log(und)


/// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const unionArr: (string | number)[] = ['Apple', 1, 2, 'Banana', 3]
//// 소괄호 없이 string|number[] 로 표기하면 문자 타입 또는 숫자 배열 타입으로 해석됨


/// 객체
//// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () { }

//// object 타입은 명확하지 않으므로 거의 사용하지 않고, 속성별로 타입을 지정하여 사용
const userA: {
  name: string,
  age: number,
  isValid: boolean
} = {
  name: 'Heropy',
  age: 85,
  isValid: true
}
const userB: {
  name: string,
  age: number,
  isValid: boolean
} = {
  name: 'Neo',
  age: 22,
  isValid: false
}

//// 반복되는 타입형은 interface로 재사용
interface UserInfo {  // 일반 변수들과 구분하기 위해 대문자로 시작
  name: string,
  age: number,
  isValid: boolean
}
const userC: UserInfo = {
  name: 'Heropy',
  age: 85,
  isValid: true
}
const userD: UserInfo = {
  name: 'Neo',
  age: 22,
  isValid: false
}


/// 함수
// const add: (x: number, y: number) => number = function (x, y) {
//   return x + y
// }
const add = function (x: number, y: number): number {
  return x + y
}
const a: number = add(1, 2)
//// 함수 타입은 변수에 타입을 명시하지 않더라도 함수 자체에서 매개변수와 혹은 반환하는 데이터의 타입을 명시할 수 있음

// const hello: () => void = function () {
//   console.log('Hello world~')
// }
const hello = function (): void {
  console.log('Hello world~')
}
const h: void = hello()
//// 함수에 return 키워드가 없으면 결국 쓸만한 데이터가 없는 거니까 void라는 타입을 통해서 이 함수를 실행하고 나서 반환되는 데이터를 변수에 할당하는 것은 별 의미가 없다는 것을 명시적으로 나타내는 타입


/// Any (아무거나; 타입스크립트를 사용하는 의미가 없으므로 되도록 사용하지 않는 것이 좋음)
let helloAny: any = 'Hello world'

helloAny = 123
helloAny = false
helloAny = null
helloAny = {}
helloAny = []
helloAny = function () {}


/// Unknown (알수없음; 어떤 데이터가 할당 될 지 알 수 없을 때 많이 사용)
const anything: any = 123
const unknown: unknown = 123

// const any: any = anything
// const boolean: boolean = anything
// const number: number = anything
// const array: string[] = anything
// const object: { x: string, y: number } = anything

const any: any = unknown
// const boolean: boolean = unknown
// const number: number = unknown
// const array: string[] = unknown
// const object: { x: string, y: number } = unknown
//// 데이터의 타입을 무엇으로 지정할지 모르는 상황에서 Any 타입의 유혹을 많이 받게 되지만, Unknown 타입을 지정하게 되면 Any보다 훨씬 엄격하게 가능하거나 가능하지 않은 상황을 알려줄 수가 있음


/// Tuple (배열에 정확한 개수와 순서까지 명시; 배열 데이터의 명확한 아이템의 순서가 존재할 때 사용)
const tuple: [string, number, boolean] = ['a', 1, false]
const users: [number, string, boolean][] = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]]


/// Void (return 키워드를 작성하지 않은 함수 안에서 반환되는 타입)
function helloVoid(msg: string): void {
  console.log(`hollo ${msg}`)
}
const hi: void = helloVoid('world')


/// Never (직접 사용할 일은 없음)
const nev: [] = []
//// 눈에 보이지는 않지만 const nev: [never] = [] 이렇게 never라는 타입이 지정되어 어떠한 값도 할당할 수 없는 상태
// nev.push(3)


/// Union
let union: string | number

union = 'Hello type!'
union = 123

/// Intersection
interface UserInfo {
  name: string
  age: number
}
interface Validation {
  isValid: boolean
}
const heropy: UserInfo & Validation = {
  name: 'Neo',
  age: 85,
  isValid: true
}