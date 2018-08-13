export const registerUserMutation = `mutation CreateUser($username:String!,$number:String!,$email:String!,$password:String!){
  createUser(username:$username,number:$number,email:$email,password:$password){
    // TODO: to figure out what will be returned back
  }
}`;

export const refreshTokenMutation = `mutation RefreshToken($refreshToken:String!){
  refreshToken(refreshToken:$refreshToken){
    accessToken
    refreshToken
  }
}`;
