export const userQuery = `query ($id: ID!,){
  User(id: $id) {
    id
    name
    email
  }
}`;

export const loginQuery = `query ($number:String!,$password:String!){
  User(number:$number, password:$password){
    accessToken
    refreshToken
  }
}`;
