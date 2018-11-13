export const getOrdersQuery = `query GetOrders {
  id
  state
  branch_id
  amount
  fee
  orderitems {
    id
    order_id
    menuitem_id
    amount
  }
}`;
