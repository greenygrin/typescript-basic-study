// 제네릭(Generic)

/// 함수
interface Obj {
  x: number
}
type Arr = [number, number]

// function toArray(a: string, b: string): string[]
// function toArray(a: number, b: number): number[]
// function toArray(a: boolean, b: boolean): boolean[]
// function toArray(a: Obj, b: Obj): Obj[]
// function toArray(a: Arr, b: Arr): Arr[]
// function toArray(a: any, b: any) {
//   return [a, b]
// }
/// toArray라는 함수를 사용하는 방법이 굉장히 여러 개가 있을 수 있는데, 그때마다 오버로딩 개념을 계속 추가하기는 어렵다 -> 제네릭 문법으로 개선

function toArray<T>(a: T, b: T) {
  return [a, b]
}
// 타입 변수 <T> : 타입 정보를 가지고 있어서 a와 b 데이터의 타입 명시 (통상적으로 Type을 축약한 대문자 T 사용)

console.log(
  toArray('Neo', 'Anderson'), // 첫 번째 데이터가 string이므로 typescript는 두 번째 데이터도 string이어야 한다는 것을 추론할 수 있음 (타입추론)
  toArray<string>('Neo', 'Anderson'), // 명시적으로 type을 표시할 수도 있지만, 타입추론을 최대한 활용하는 것이 좋음
  toArray(1, 2),
  toArray(true, false),
  toArray({ x: 1 }, { x: 2 }),
  toArray([1, 2], [3, 4, 5]),  // number[]
  // 타입추론을 통해서 인식되는 것이 의도했던 튜플 타입이 아니므로 이런 경우는 명시적으로 타입을 작성해야 함
  toArray<Arr>([1, 2], [3, 4])  // [number, number]

)


/// 클래스
class UserClass<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload
  }
}

interface UserAType {
  name: string
  age: number
  isValid: boolean
}
interface UserBType {
  name: string
  age: number
  emails: string[]
}

const lillian = new UserClass<UserAType>({
  name: 'Lillian',
  age: 25,
  isValid: true
})
const tj = new UserClass<UserBType>({
  name: 'TJ',
  age: 25,
  emails: ['tj@gmail.com']
})


/// 인터페이스, 제약 조건(Constraints)
interface MyData<T extends string | number> { // extents - 타입의 제약 조건 추가
  name: string
  value: T
}

const dataA: MyData<string> = {
  name: 'Data A',
  value: 'Hello world'
}
const dataB: MyData<number> = {
  name: 'Data B',
  value: 123
}
// const dataC: MyData<boolean> = {
//   name: 'Data C',
//   value: true
// }
// const dataD: MyData<number[]> = {
//   name: 'Data D',
//   value: [1, 2, 3, 4]
// }
/// 제약 조건 외 다른 타입은 사용 불가