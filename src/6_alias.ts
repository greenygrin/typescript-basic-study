// 타입 별칭(Alias)

type TypeA = string
type TypeB = string | number | boolean
type UserType = {
  name: string
  age: number
  isValid: boolean
} | [string, number, boolean]

const userE: UserType = {
  name: 'Neo',
  age: 85,
  isValid: true
}
const userF: UserType = ['Evan', 36, false]

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2) // toFixed는 문자 데이터를 반환
    default:
      return 'Boolean!'
  }
}

/// 타입 별칭은 interface를 대신해서 쓸 수도 있는데, 두 가지의 차이는 할당 연산자(=)의 필요 여부
/// 기능적으로 차이는 없고 취향에 맞게 쓸 수 있지만, 굳이 권장을 하자면 interface 방식을 권장 -> 타입 별칭은 객체 데이터의 타입을 만드는 구조라기보다는 다양한 타입의 별칭을 지정하는 용도라서 조금 더 사용 범위가 넓은데, interface의 경우 함수나 배열 데이터의 타입도 지정할 수 있지만 기본적으로 객체 데이터를 전제로 하기 때문에 굳이 사용한다고 하면 interface가 좀더 낫지 않을까
type TypeUser = {
  name: string
  age: number
  isValid: boolean
}
const lee: TypeUser = {
  name: 'Lee',
  age: 33,
  isValid: true
}

interface InterfaceUser {
  name: string
  age: number
  isValid: boolean
}
const lauren: InterfaceUser = {
  name: 'Lauren',
  age: 33,
  isValid: true
}