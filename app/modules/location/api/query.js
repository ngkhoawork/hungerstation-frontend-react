const listCitiesQuery = `query ($country_id: Int!) {
  listCities(country_id: $country_id) {
    id
    name
    districts {
      id
      name
    }
  }
}`;

export { listCitiesQuery };
