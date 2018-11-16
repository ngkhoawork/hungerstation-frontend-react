export const getOrdersQuery = `query {
  orders {
    id
    state
    address {
      address_details {
        description
        local {
          id
          name
          city {
            id
            name
          }
        }
      }
    }
    branch {
      id
      name
      latitude
      longitude
      restaurant {
        id
        logo
      }
    }
    amount
    delivered_at
    due_at
    delivery_provider
    fee
    discount
    total
    orderitems {
      order_id
      amount
      note
      count
      menuitem {
        id
        name
        price
        list_price
        modifier_groups {
          id
          max_option
          min_option
          name
          modifiers {
            id
            name
            price
          }
        }
      }
    }
  }
}`;
