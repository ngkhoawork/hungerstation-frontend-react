export const getOrdersQuery = `query {
  orders {
    id
    state
    created_at
    delivered_at
    delivery_eta
    active_tracking_button
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
        name
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
    tracking {
      active_status
      array_of_states {
        index
        key
        title
        description
      }
      current_state_key
      trackable
    }
    real_time_tracking {
      protocol
      credentials {
        css
        url
      }
    }
  }
}`;
