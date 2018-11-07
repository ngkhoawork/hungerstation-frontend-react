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
      id
      delivery_fee
      delivery_estimation_time
      minimum_order
    }
    restaurant{
      id
      name
      logo
      rate_average
      kitchens{
        id
        name
        image_thumb
      }
    }
  }
}`;

export const getBranchMenuQuery = `query GetBranchMenu($branchId: Int!) {
  menu(branch_id: $branchId) {
    menugroups {
      id
      name
      display_mode
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
    }
    menuitems {
      id
      name
      short_name
      description
      price
      images
      menugroup_id
      modifier_group_ids
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
    }
    modifiers {
      id
      price
      name
    }
    modifier_groups {
      id
      name
      min_option
      max_option
      modifier_ids
    }
  }
}`;
