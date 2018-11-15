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
    total
    orderitems {
      order_id
      amount
      note
      # count
      menuitem {
        id
        name
        price
      }
    }
  }
}`;
