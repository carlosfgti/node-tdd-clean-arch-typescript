import { SingUpController } from '@/controllers/signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        // name: 'example name',
        email: 'carlos@example.com',
        password: '65432312312',
        passwordConfirmation: '65432312312'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('name is required'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        name: 'example name',
        // email: 'carlos@example.com',
        password: '65432312312',
        passwordConfirmation: '65432312312'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('email is required'))
  })
})
