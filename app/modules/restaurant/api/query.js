export const getBranchDeliveryConditionsQuery = `query GetBranchDeliveryConditions(
  $branchId: Int!,
  $districtId: Int,
) {
  branch_delivery(branch_id: $branchId, local_id: $districtId) {
    id
    delivery_estimation_time
    minimum_order
    delivery_fee
 }
}`;

export const getBranchQuery = `query GetBranch($id: Int!) {
  branch(id: $id) {
    id
    name
    status
    latitude
    longitude
    accept_cash_on_delivery
    accept_credit_card
    working_time {
      weektimes {
        start_minute
        end_minute
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
    }
    restaurant {
      id
      name
      logo
      cover_photo
      rate_average
      offers {
        id
        title
        description
      }
      kitchens {
        id
        name
        image_thumb
      }
      working_time {
        weektimes {
          start_minute
          end_minute
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
    }
    menu {
      menugroups {
        id
        name
        weight
        working_times {
          start_minute
          end_minute
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        products {
          id
          name
          description
          images
          list_price
          weight
          menuitems {
            id
            name
            short_name
            description
            price
            list_price
            images
            weight
            working_times {
              start_minute
              end_minute
              monday
              tuesday
              wednesday
              thursday
              friday
              saturday
              sunday
            }
            modifier_groups {
              id
              name
              weight
              min_option
              max_option
              modifiers {
                id
                price
                name
                weight
              }
            }
          }
        }
        menuitems {
          id
          name
          short_name
          description
          price
          list_price
          images
          weight
          working_times {
            start_minute
            end_minute
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
          modifier_groups {
            id
            name
            weight
            min_option
            max_option
            modifiers {
              id
              price
              name
              weight
            }
          }
        }
      }
    }
  }
}`;
