// 인터페이스(Interface)

// 기본
/// 선택적 속성 - ?
/// 읽기전용 속성 - readonly

/// 인터페이스 이름은 변수명과의 구분을 위해 첫 글자 대문자로 시작하는 파스칼 케이스 사용
interface User {
  name: string
  readonly age: number // readonly 키워드를 붙이면 해당 속성에 값을 할당하는 것은 불가능
  isValid?: boolean // ? 기호를 붙이게 되면 선택적 속성으로 해당 속성은 있어도 되고 없어도 된다
}
const mike: User = {
  name: 'Mike',
  age: 85,
  isValid: true
}
mike.isValid = false
// mike.age = 22
const neo: User = {
  name: 'Neo',
  age: 102
}



// 함수 타입 - 호출 시그니처(Call Signature)
interface GetName {
  (param: string): string
}
/// 함수의 키 값으로 소괄호 안에 매개변수를 추가하고 타입을 지정
/// 매개변수의 이름은 동일하지 않아도 되고, 개수와 타입만 일치하면 된다
interface UserData1 {
  name: string
  age: number
  // getName: (message: string) => string
  getName: GetName
}
/// interface의 속성을 지정할 때 그 속성이 함수라면, 즉 메소드라면 화살표 함수로 타입을 지정할 수 있는데, 이렇게 지정한 타입을 재사용해야 할 때 호출 시그니처 방식으로 함수의 타입을 지정할 수 있다

const ros: UserData1 = {
  name: 'Ros',
  age: 25,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}
ros.getName('Hello~')



// 인덱스 가능 타입 - 인덱스 시그니처(Index signature)

/// 어떤 배열이나 객체 데이터에 대괄호 표기법으로 숫자를 넣거나 혹은 문자를 넣는 방식으로 인덱싱하고 그러한 데이터의 타입을 지정하는 것

/// 배열
interface Fruits {
  [item: number]: string
}
const fruitsArray: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruitsArray[1])

/// 객체
interface UserData2 {
  [key: string]: unknown
  name: string
  age: number
}
const lilly: UserData2 = {
  name: 'Lilly',
  age: 50
}
lilly['isValid'] = true
lilly['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
console.log(lilly)


interface Payload {
  [key: string]: unknown
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key])
  }
}

interface UserData3 {
  [key: string]: unknown
  name: string
  age: number
  isValid: boolean
}
const nick: UserData3 = {
  name: 'Nick',
  age: 20,
  isValid: false
}
logValues(nick)



// 확장(상속)
interface UserA {
  name: string
  age: number
}
interface UserB extends UserA {
  isValid: boolean
}

const nana: UserA = {
  name: 'Nana',
  age: 10
}
const haha: UserB = {
  name: 'Haha',
  age: 20,
  isValid: true
}

/// interface를 중복으로 작성 가능하지만, 중복되는 속성은 동일한 타입으로 명시해야 한다
interface FullName {
  firstName: string
  lastName: string
}
interface FullName {
  middleName: string
  lastName: string
}

const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
}