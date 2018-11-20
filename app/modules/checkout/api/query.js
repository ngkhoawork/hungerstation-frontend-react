export const getDeliveryOptionsQuery = `query GetDeliveryOptions(
  $branchId: Int!,
  $lat: Float!,
  $lng: Float!,
) {
  delivery_options(branch_id: $branchId, lat: $lat, lng: $lng) {
    options {
      key
      name
      description
      icon
      price
      estimation_delivery_time
    }
    default_option
  }
}`;

export const getCreditCardsQuery = `query GetCreditCards {
  credit_cards {
    id
    name
    status
    number
    type
    gateway_type
    verifiable
    error
    gateway_error
  }
}`;

export const validateOrderMutation = `mutation ValidateOrder (
  $branchId: Int!,
  $districtId: Int!,
  $addressId: Int!,
  $deliveryOptionId: Int!,
  $coupon: String,
  $note: String,
) {
  validateOrder(
    note: $note
    address_id: $addressId
    branch_id: $branchId
    local_id: $districtId
    delivery_option: $deliveryOptionId
    coupon: $coupon
    orderitems: $orderItems
  ) {
    errors_with_keys {
      key
      value
    }
    fee
    discount
    total_without_fee_without_discount
    preferred_payment_method {
      method
      credit_card_id
    }
    promotion {
      message
      terms_and_conditions
    }
    coupon
    coupon_message
    coupon_terms_and_conditions {
      message
      terms_and_conditions
    }
  }
}`;

export const createOrderMutation = `mutation CreateOrder (
  $branchId: Int!,
  $districtId: Int!,
  $addressId: Int!,
  $deliveryOptionId: Int!,
  $coupon: String,
  $note: String,
) {
  createOrder(
    note: $note
    address_id: $addressId
    branch_id: $branchId
    local_id: $districtId
    delivery_option: $deliveryOptionId
    coupon: $coupon
    orderitems: $orderItems
  ) {
    id
    state
    branch_id
    amount
    deliverydelay
    user_id
    payment_method
    fee
    discount
    TotalWithoutFee
    TotalWithoutFeeWithoutDiscount
    failure_cause_description
    delivery_provider
    orderitems {
      id
      menuitem_id
      amount
    }
  }
}`;
