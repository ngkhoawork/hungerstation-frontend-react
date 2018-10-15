const getDeliveryFiltersQuery = `query {
  delivery_filters{
    kitchens {
      id
			name
			image_thumb
			image_original
    }
    delivery_options{
      id
      name
    }
  }
}`;

const getDeliveriesQuery = `query GetDeliveries($lat:Float, $lng:Float, $localId: Int, $deliveryType: String) {
  deliveries(lat: $lat, lng: $lng, local_id: $localId, delivery_type: $deliveryType) {
      id
      branch{
        id
        delivery_provider
        status
        restaurant{
          id
          name
          rate_average
          kitchens{
            id
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
