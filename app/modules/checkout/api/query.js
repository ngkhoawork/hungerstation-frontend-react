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

export const validateCouponQuery = `query ValidateCoupon($code: String!) {
  coupon_validate(coupon: $code) {
    id
    title
    offer_type
    country_id
    description
    start_date
    end_date
    restaurants
    available
    cutbacks {
      id
      cutback_amount
      minimum
      percentage
      delivery_fee_percentage_discount
      maximum
      offer_id
    }
    discounts {
      id
      percentage
      to_menu_thing_id
      from_menu_thing_id
      from_menu_thing_type
      threshold_from
      threshold_to
      limit_count_per_order
      offer_id
    }
  }
}`;

// const paymentInfoType = `type PaymentInfo {
//   payment_method: String!
//   payment_type: String
//   id: Int
//   gateway_type: String
//   token: String
// }`;

// const orderItemLinkCheckOptionType = `type OrderItemLinkCheckOption {

// }`;

// const orderItemOptionsType = `type OrderItemOption {
//   radiooptionitem_id: [Strings]
//   checkoption_id: [Strings]
//   orderitemlinkcheckoptions: [OrderItemLinkCheckOption]
// }`;

// const orderItemType = `type OrderItem {
//   menuitem_id: Int!
//   count: Int!
//   note: String
//   orderitemlinkradiooptionitems: [OrderItemOption]
// }`;

// $paymentInfo: [PaymentInfo!]!,
//   $orderItems: [OrderItem!]!,

// $orderItems: [{
//   menuitem_id: Int!
//   count: Int!
//   orderitem_link_modifiers: [Int]
//   total_cost: Float
// }!]!

// orderitems: [{
//   menuitem_id: 106299
//   count: 2
//   orderitem_link_modifiers: []
// }]

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
