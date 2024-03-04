// 타입 가져오기
import { getFullName, User } from './user'

const alice: User = {
  firstName: 'Alice',
  lastName: 'Kim',
  age: 85,
  isValid: true
}
const fullName = getFullName(alice)

console.log(fullName)
console.log(alice.isValid)