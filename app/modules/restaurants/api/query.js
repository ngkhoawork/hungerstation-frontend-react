const getDeliveryFiltersQuery = `query {
  delivery_filters{
    kitchens {
      id
      name
    }
    delivery_options{
      id
      name
    }
  }
}`;

const getDeliveriesQuery = `query GetDeliveries($lat:Float!, $lng:Float!, $deliveryType:String!) {
  deliveries(lat: $lat, lng: $lng, delivery_type: $deliveryType) {
      id
      branch{
        id
        delivery_provider
        restaurant{
          id
          name
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
