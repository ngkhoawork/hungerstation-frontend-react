const MAPS_API_URL = 'http://maps.googleapis.com/maps/api/geocode/';

export const getUserPosition = (option = { enableHighAccuracy: true }) =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, option);
  });

export const getSettlementDetails = coors => {
  const { latitude, longitude } = coors;
  return fetch(
    `${MAPS_API_URL}json?latlng=${latitude},${longitude}&sensor=true`,
  ).then(res => res.json());
};

export const getUnit = (addressComponents, type) =>
  addressComponents.find(component => component.types.indexOf(type) > -1);
