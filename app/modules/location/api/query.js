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
    id
    name
  }
}`;

const getLocalQuery = `query ($lat:Float!, $lng:Float!) {
  locals(lat: $lat, lng: $lng) {
    name
    id
    city {
      name
      id
    }
  }
}`;

export { listCitiesQuery, getLocalQuery, getDistrictBySlugQuery };
