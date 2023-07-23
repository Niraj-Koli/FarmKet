import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "UPID", // AWS Cognito User ID //
    ClientId: "ACID", // AWS Cognito App Client ID //
};

const pool = new CognitoUserPool(poolData);

export default pool;
