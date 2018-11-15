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
    delivery_conditions {
      delivery_fee
      delivery_estimation_time
      minimum_order
    }
    restaurant {
      id
      name
      logo
      cover_photo
      rate_average
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
        name_en
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
          name_en
          description
          images
          list_price
          weight
          menuitems {
            id
            name
            short_name
            name_en
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
              name_en
              weight
              min_option
              max_option
              modifiers {
                id
                price
                name
                name_en
                weight
              }
            }
          }
        }
        menuitems {
          id
          name
          short_name
          name_en
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
            name_en
            weight
            min_option
            max_option
            modifiers {
              id
              price
              name
              name_en
              weight
            }
          }
        }
      }
    }
  }
}`;
