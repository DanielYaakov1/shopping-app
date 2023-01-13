import AWS from 'aws-sdk';

export type CognitoConfig = {
  region: string | undefined;
  accessKeyId: string | undefined;
  accessSecretKey: string | undefined;
  apiVersion?: string;
};

const AWSConfig: CognitoConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_COGNITO_REGION,
};
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider(AWSConfig);
export const awsCognitoProvider = cognitoIdentityServiceProvider;
