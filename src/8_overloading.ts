// 함수 - 오버로딩(Overloading)


// 1)
function add1(a: string, b: string) {
  return a + b
}
function add2(a: number, b: number) {
  return a + b
}
add1('hello ', 'world~')  // 'hello world~'
add2(1, 2)  // 3
// error
// add1('hello ', 2)
// add2('hello ', 2)


// 2)
function add3(a: string, b: string): string // 타입 선언1
function add3(a: number, b: number): number // 타입 선언2
function add3(a: any, b: any) { // 함수 구현
  return a + b
}
add3('hello ', 'world~')  // 'hello world~'
add3(1, 2)  // 3
// error
// add3('hello ', 2)
// add3(1, 'world~ ')

/// add3이라는 함수는 타입 선언 1과 2의 방법으로 사용됨
/// 함수 구현 부분의 any는 무엇이든 들어올 수 있다는 개념이 아니라 위쪽에 선언된 타입 선언 1과 2의 내용이 어떤 방식으로든 할당될 수 있다는 의미

/// 함수를 여러 개 만들지 않더라도 함수의 타입 선언부를 함수의 구현부 위에 여러 개 만들어 주면 같은 함수라도 타입을 사용하는 방법을 여러 개로 관리할 수 있다