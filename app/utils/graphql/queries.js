export const loginQuery = `query ($number:String!,$password:String!){
  User(number:$number, password:$password){
    accessToken
    refreshToken
  }
}`;

export const listDistricts = `query ($city_id: String) {
  listDistrcits(cityId: $city_id) {
    id
    name
  }
}`;
