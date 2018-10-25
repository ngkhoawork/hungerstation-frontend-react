const localsShape = `
  id
  name
  city {
    id
    name
  }
`;

const listCitiesQuery = `query ($country_id: Int!) {
  cities(country_id: $country_id) {
    id
    name
    locals {
      id
      name
    }
  }
}`;

const getDistrictBySlugQuery = `query ($slug: String, $citySlug: String) {
  local(slug: $slug, city_slug: $citySlug) {
    ${localsShape}
  }
}`;

const getLocalQuery = `query ($lat:Float!, $lng:Float!) {
  locals(lat: $lat, lng: $lng) {
    ${localsShape}
  }
}`;

export { listCitiesQuery, getLocalQuery, getDistrictBySlugQuery };
