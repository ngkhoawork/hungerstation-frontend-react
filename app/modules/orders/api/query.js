export const getOrdersQuery = `query {
  orders {
    id
    state
    address {
      address_details {
        description
      }
    }
    branch {
      name
      restaurant {
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
