const getDeliveryFiltersQuery = `query {
  delivery_filters{
    kitchens {
      id
			name
			image_thumb
			image_original
    }
    delivery_providers{
      id
      name
      type
    }
  }
}`;

const getDeliveriesQuery = `query GetDeliveries($lat:Float, $lng:Float, $localId: Int, $deliveryType: String) {
  deliveries(lat: $lat, lng: $lng, local_id: $localId, delivery_type: $deliveryType) {
      id
      branch{
        id
        accept_credit_card
        accept_cash_on_delivery
        accept_voucher
        delivery_provider
        status
        has_discount
        restaurant{
          id
          name
          logo
          cover_photo
          rate_average
          kitchens{
            id
            name
          }
        }
      }
      delivery_estimation_time
      deliveryfeepercentage
      delivery_fee
      minimum_order
      weight
      delivery_provider
      delivery_time_rule_id
    }
}`;

export { getDeliveriesQuery, getDeliveryFiltersQuery };
