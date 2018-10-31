export const getAddressesQuery = `query GetAddresses($branchId: Int!) {
  addresses(branch_id: $branchId) {
    id
    address_details {
      id
      name
      description
      latitude
      longitude
      specific_type
      local {
        id
        name
        city {
          id
          name
        }
      }
      dynamic_field {
        building_number
        street
        apartment_number
        line1
        floor_number
        block
      }
    }
  }
}`;

export const createAddressMutation = `mutation CreateAddress(
  $district: Int!,
  $lat: Float!,
  $lng: Float!,
  $name: String,
  $description: String,
  $mobile: String,
  $specific_type: String!,
  $street: String!,
  $building_number: String,
  $line1: String,
) {
  createAddress(
    local_id: $district
    latitude: $lat
    longitude: $lng
    name: $name
    description: $description
    mobile: $mobile
    specific_type: $specific_type
    street: $street
    building_number: $building_number
    line1: $line1
  ) {
    address_details {
      id
      name
      description
      latitude
      longitude
      specific_type
      local {
        id
        name
        city {
          id
          name
        }
      }
      dynamic_field {
        building_number
        street
        apartment_number
        line1
        floor_number
        block
      }
    }
  }
}`;

export const updateAddressMutation = `mutation UpdateAddress(
  $id: Int!,
  $district: Int,
  $lat: Float,
  $lng: Float,
  $name: String,
  $description: String,
  $mobile: String,
  $specific_type: String,
  $street: String,
  $building_number: String,
  $line1: String,
) {
  updateAddress(
    id: $id
    local_id: $district
    latitude: $lat
    longitude: $lng
    name: $name
    description: $description
    mobile: $mobile
    specific_type: $specific_type
    street: $street
    building_number: $building_number
    line1: $line1
  ) {
    address_details {
      id
      name
      description
      latitude
      longitude
      specific_type
      local {
        id
        name
        city {
          id
          name
        }
      }
      dynamic_field {
        building_number
        street
        apartment_number
        line1
        floor_number
        block
      }
    }
  }
}`;
