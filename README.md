```JSON
{
  // 컴파일러 옵션 지정 (현재 표기된 값은 기본값)
  "compilerOptions": {
    // 컴파일될 ES(JS) 버전 명시 - "ES2015" 권장 (ES6와 동일하나 년도 방식으료 표기 권장)
    "target": "ES3",
    // 모듈 시스템 지정 - "CommonJS", "AMD", "ESNext"
    "module": "CommonJS",
    // 모듈 해석 방식 지정 - "Node", "Classic"
    "moduleResolution": "Node",
    // ESM 모듈 방식 호환성 활성화 여부
    "esModuleInterop": false,
    // 모든 파일을 모듈로 컴파일, import 혹은 export 키워드 필수
    "isolatedModules": false,
    // 모듈 해석에 사용할 기준 경로 지정
    "baseUrl": "./",
    // 컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
    "typeRoots": ["./node_modules/@types"],
    // 컴파일에서 사용할 라이브러리 지정 - "ESNext", "DOM"
    "lib": [],
    // 더 엄격한 타입 검색 활성화 (true로 변경하면 하위 옵션의 기본값이 모두 true로 변경됨)
    "strict": false,
    // 암시적 any 타입 검사 활성화
    "noImpLicitThis": false,
    // 엄격한 Nullish 타입 검사 활성화
    "strictNullCheckes": false,
    // 엄격한 함수의 매개변수 타입 검사 활성화
    "strictFunctionTypes": false,
    // 엄격한 클래스의 속성 초기화 검사 활성화
    "strictPropertyInitialization": false,
    // 엄격한 Bind, Call, Apply 메소드의 인수 검사 활성화
    "strictBindCallApply": false
  },
  // 컴파일할 파일 경로 목록
  "include": [
    "src/**/*.ts"
  ],
  // 컴파일에서 제외할 파일 경로 목록
  "exclude": [
    "node_modules"
  ]
}
```