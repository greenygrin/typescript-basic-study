// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함

// 단언 키워드 - as
// Non-null 단언 연산자 - !

/// 느낌표를 사용하는 단언은 null이나 undefined가 아니라는 것을 명시할 때만 사용하고, 어떤 데이터가 별도의 type이라는 것을 단언할 때는 as 키워드 사용


// 1)
/// as
// const el = document.querySelector('body')
const elByAs = document.querySelector('body') as HTMLBodyElement

elByAs.textContent = 'Hello world?!'

/// !
const el = document.querySelector('body')

el!.textContent = 'Hello world?!'

// document에 query selector라는 메소드는 선택자를 제공해서 그 선택자로 요소를 찾지 못하면 null 데이터를 반환
// typescript는 스크립트 코드에서만 추론해서 type을 확인할 수 있기 때문에 body 태그가 실제로 html에 존재하는지는 typescript 입장에서는 알 수 있는 방법이 없다
// 개발자는 현재 프로젝트에 body 태그가 있다는 것을 명확하게 알고 있기 때문에 타입 단언을 해줌


/// body가 아닌 특정 클래스를 선택자로 사용할 경우는 if 조건문을 사용 (타입 가드)
const title = document.querySelector('.title')

if (title) {
  title.textContent = 'Hello world?!'
}


// 2)
/// as
function getNumberByAs(x: number | null | undefined) {
  // return Number(x.toFixed(2))
  return Number((x as number).toFixed(2))
}
getNumberByAs(3.1415926535)
getNumberByAs(null)

/// !
function getNumber(x: number | null | undefined) {
  return Number(x!.toFixed(2))
}
getNumber(3.1415926535)
getNumber(null)

// toFixed는 숫자 데이터에서만 사용할 수 있는 메소드이므로 null이나 undifined 데이터에서는 사용할 수 없기 때문에 에러 발생
// x를 숫자 데이터로 단언을 하면 에러는 사라지지만 실행했을 때 문제가 생기므로 아래와 같이 수정할 수 있다 (타입 가드)
function getNumberFixed(x: number | null | undefined) {
  if (x) {
    return Number(x!.toFixed(2))
  }
}
getNumberFixed(3.1415926535)
getNumberFixed(null)


// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    // return Number(x.toFixed(2))
    return Number((x as number).toFixed(2))
  }
  // return x.toUpperCase()
  return (x as string).toUpperCase()
}
getValue('hello world', false)  // 'HELLO WORLD'
getValue(3.1415926535, true)  // 3.14

// 문제가 없는 코드임에도 typescript에서는 에러가 발생하므로 타입 단언을 해줘야 함



// 할당 단언(Assertion)

// let numAss: number
let numAss!: number

console.log(numAss)
// 변수에 타입을 숫자로 지정하고 데이터를 할당하지 않으면 에러가 나지만, undifined를 출력하고 싶을 때 타입을 지정하는 콜론(:) 앞에 느낌표(!)를 추가해 할당 단언을 할 수 있다

numAss = 123