export const getBranchQuery = `query GetBranch($id: Int!) {
  branch(id: $id) {
    id
    name
    status
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
      display_mode
      working_times {
        id
        day
        opening
        closing
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
        id
        day
        opening
        closing
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
