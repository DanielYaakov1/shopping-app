import { awsCognitoProvider } from '../../config/aws/cognito.config';
const CLIENT_ID = '5jd6ua6lb3f9a17l6omkunsd77';

export class AwsCognitoHandler {
  async login(USERNAME: string, PASSWORD: string): Promise<any> {
    const res = awsCognitoProvider
      .initiateAuth({
        ClientId: CLIENT_ID,
        AuthFlow: 'USER_PASSWORD_AUTH',
        AuthParameters: {
          USERNAME,
          PASSWORD,
        },
      })
      .promise();
    return res;
  }
  async register(Username: string, Password: string) {
    const res = await awsCognitoProvider
      .signUp({
        ClientId: CLIENT_ID,
        Username,
        Password,
      })
      .promise();
    return res;
  }

  async verifyIdToken(token: string): Promise<any> {
    if (token) {
      //check here if token is valid
    }
  }
  async confirmSignup(Username: string, ConfirmationCode: string): Promise<any> {
    const confirmSignupResult = await awsCognitoProvider
      .confirmSignUp({
        ClientId: CLIENT_ID,
        Username,
        ConfirmationCode,
      })
      .promise();

    return confirmSignupResult;
  }
}
