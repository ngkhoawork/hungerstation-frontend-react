export const getAddressesQuery = `query GetAddresses($branchId: Int!) {
  addresses(branch_id: $branchId) {
    id
    branch_eligibility
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

export const validateAddressQuery = `mutation ValidateAddress(
  $branchId: Int!,
  $lat: Float!,
  $lng: Float!,
) {
  validateAddress(
    branch_id: $branchId
    latitude: $lat
    longitude: $lng
  ) {
    message
  }
}`;

export const createAddressMutation = `mutation CreateAddress(
  $latitude: Float!,
  $longitude: Float!,
  $description: String!,
  $mobile: String,
  $specific_type: String!,
  $street: String!,
  $building_number: String,
  $line1: String,
) {
  createAddress(
    latitude: $latitude
    longitude: $longitude
    description: $description
    mobile: $mobile
    specific_type: $specific_type
    street: $street
    building_number: $building_number
    line1: $line1
  ) {
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

export const updateAddressMutation = `mutation UpdateAddress(
  $id: ID!,
  $latitude: Float,
  $longitude: Float,
  $description: String!,
  $mobile: String,
  $specific_type: String,
  $street: String,
  $building_number: String,
  $line1: String,
) {
  updateAddress(
    id: $id
    latitude: $latitude
    longitude: $longitude
    description: $description
    mobile: $mobile
    specific_type: $specific_type
    street: $street
    building_number: $building_number
    line1: $line1
  ) {
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
