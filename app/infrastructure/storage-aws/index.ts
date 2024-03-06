import AWS from 'aws-sdk';

export const Init = (): AWS.S3 => {
  AWS.config.update({
    accessKeyId: process?.env?.AWS_ACCESS_KEY ?? "AKIAQ3EGSUHHI4ZOKNID",
    secretAccessKey: process?.env?.AWS_SECRET_KEY ?? "88FwevGLiIdksh5t+x2OeACcmS3S4HQeMsU4Ppyk",
    region: 'ap-southeast-2', // e.g., 'us-east-1'
  });

  return new AWS.S3()
}