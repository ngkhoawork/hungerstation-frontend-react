export const userQuery = `query ($id: ID!){
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

export const listCitiesQuery = `query ($country_id: Int!) {
  listCities(country_id: $country_id) {
    id
    name
    districts {
      id
      name
    }
  }
}`;

export const listDistricts = `query ($city_id: String) {
  listDistrcits(cityId: $city_id) {
    id
    name
  }
}`;
