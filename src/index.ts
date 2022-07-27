import './configs/module-alias'

class User {
  sayHello (name?: string): string {
    return 'Hello'
  }
}

const user = new User()
user.sayHello('Carlos')
user.sayHello()
