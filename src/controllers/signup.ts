export class SingUpController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('name is required')
    }
  }
}
