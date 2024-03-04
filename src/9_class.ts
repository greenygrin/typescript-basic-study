// 클래스

// 접근 제어자(Access Modifiers)
/// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능 (매개변수에서는 생략 불가)
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클래스에서만 접근 가능

class UserA {
  /// this로 접근할 수 있는 각각의 속성들은 constructor 함수가 만들어지기 전에 클래스 바디 부분에서 타입이 지정되어야 한다 (초기 데이터를 지정해서 초기화할 수도 있음)
  // public first: string     // public 생략 가능
  // protected last: string = ''
  // private age: number = 0
  // constructor(first: string, last: string, age: number) {
  //   this.first = first
  //   this.last = last
  //   this.age = age
  // }

  /// 위 중복되는 코드를 축약하면
  constructor(
    public first: string,    // public 생략 부락
    protected last: string = '',
    private _age: number = 0
  ) {
    // ... constructor 함수 내부에 별다른 내용을 작성할 필요가 없어짐
  }
  protected getName() {
    return `${this.first} ${this.last} is ${this._age}`
  }

  /// 구글링 참조
  /// private 속성이나 메서드를 getter와 setter를 사용해 외부에서 가져오는 방법
  get getAge () {
      return this._age
  }
  set getAge (value: number) {
      this._age = value
  }
  getAgeInfo = (): void => {
    console.log(`${this.first} ${this.last} is ${this._age}`)
  }
}
class UserB extends UserA {
  getName() {
    // return `${this.first} ${this.last} is ${this._age}`  // private는 하위 클래스에서 사용 불가
    return `${this.first} ${this.last}`
  }
}
class UserC extends UserB {
  getName() {
    return `${this.first} ${this.last}`
  }
}

const anderson = new UserA('Neo', 'Anderson', 102)
console.log(anderson.first)
// console.log(anderson.last)  // protected 속성은 클래스 외부에서 사용 불가
// console.log(anderson._age)   // private 속성은 클래스 외부에서 사용 불가
// anderson.getName()           // protected 메소드는 클래스 외부에서 사용 불가

let lime = new UserA('Lime', 'Green', 50)
lime.getAgeInfo()