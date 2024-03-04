// 타입 추론(Inference)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.

// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 변환 값이 있는 함수

let number = 12

// number = 'Hello type!'
number = 1

// javascript 코드릴 typescript가 이해하기에는 number 변수에 숫자 데이터가 들어가고 있기 때문에 이 number 변수의 type은 숫자다라고 추론을 해서 나중에 재할당이 될 때 문자 데이터를 할당하려고 하면 에러를 발생시킴


// 기본값이 지정된 매개 변수 `b` + 반환 값이 확실한 함수 `add`
// function addNumber(a: number, b:number = 2): number {
function addNumber(a: number, b = 2) {
  return a + b
}


// 결론: 매번 따로 type을 명시할 필요 없이 typescript가 충분히 코드를 잘 이해할 수 있기 때문에 typescript가 추론하지 못하는 곳에서만 꼭 필요하게 type을 지정해 주면 됨
// - 타입 추론을 사용해서 최소한의 타입만 적는 것이 타입을 엄격하게 사용하는 것과 반대되는 개념이 절대 아님
// - 타입 추론을 적극 활용하면 훨씬 더 좋은 코드의 가독성을 제공할 수 있음