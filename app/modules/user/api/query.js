const userQuery = `query {
    user {
      id
      mobile
      country_id
      user_type
      name
      email
    }
  }`;

const authenticateUserMutation = `mutation AuthenticateUser($mobile:String!,$password:String!){
    authenticateUser(mobile:$mobile, password:$password){
      refresh_token
      token
      user{
        id
        mobile
        country_id
        user_type
        name
        email
      }
    }
  }`;

const createUserMutation = `mutation CreateUser($name:String!,$mobile:String!,$email:String!,$password:String!){
    createUser(name:$name,mobile:$mobile,email:$email,password:$password, country_id: 1){
      refresh_token
      token
      user{
        id
        mobile
        country_id
        user_type
        name
        email
      }
    }
  }`;

const refreshTokenMutation = `mutation RefreshToken {
    refreshToken {
      refresh_token
      token
    }
  }`;

export {
  userQuery,
  authenticateUserMutation,
  createUserMutation,
  refreshTokenMutation,
};
