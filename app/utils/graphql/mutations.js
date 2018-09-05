export const authenticateUserMutation = `mutation AuthenticateUser($mobile:String!,$password:String!){
  authenticateUser(mobile:$mobile, password:$password){
    refresh_token
    token
    user_id
  }
}`;

export const createUserMutation = `mutation CreateUser($name:String!,$mobile:String!,$email:String!,$password:String!){
  createUser(name:$name,mobile:$mobile,email:$email,password:$password, country_id: 1){
    refresh_token
    token
    user_id
  }
}`;

export const refreshTokenMutation = `mutation RefreshToken($refreshToken:String!){
  refreshToken(refreshToken:$refreshToken){
    refresh_token
    token
  }
}`;
