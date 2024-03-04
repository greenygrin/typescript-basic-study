// npm i lodash - 패키지 설치
/// javascript로 만들어져 있는 패키지는 type 선언이 필요

// 방법1)
/// lodash.d.ts - dts 파일 생성, lodash 패키지의 type 명시

/// 파일 내용
//// declare module 'lodash' { // declare 라는 키워드를 통해 타입 선언, 타입의 module 이름은 lodash
////   interface Lodash {
////      camelCase: (str: string) => string
////      snakeCase: (str: string) => string
////      kebabCase: (str: string) => string
////    }
////    const _: Lodash
////    export default _
////  }

/// 파일명을 패키지명이 아닌 다른 이름을 사용했을 때는, 삼중 slash 지시자 필요
/// import 위에 명시 '/// <reference path="./module.d.ts" />'

/// lodash라는 패키지의 내용을 사용할 때마다 사용되는 속성의 타입을 dts 파일에 따로 명시해야 정상 동작


// 방법2)
/// DefinitelyTyped 깃허브 저장소 (https://github.com/DefinitelyTyped/DefinitelyTyped)
/// 자바스크립트의 기능들의 타입을 전세계 개발자들이 직업 선언
/// dts 파일을 직업 만들어 선언할 필요 X

/// 패키지 존재 여부 확인
/// npm info @types/lodash

/// 설치
/// npm i @types/lodash -D

import _ from 'lodash'

const str = 'the brown fox jumps over the lazy dog.'

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))