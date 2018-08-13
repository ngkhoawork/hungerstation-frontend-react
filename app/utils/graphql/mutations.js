export const authenticateUserMutation = `mutation AuthenticateUser($number:String!,$password){
  authenticateUser(number:$number,password:$password){
    refresh_token
    token
    user_id
  }
}`;

export const createUserMutation = `mutation CreateUser($username:String!,$number:String!,$email:String!,$password:String!){
  createUser(username:$username,number:$number,email:$email,password:$password){
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
