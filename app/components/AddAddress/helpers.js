const secondBestStreetParams = ['premise', 'sublocality'];

function getSecondBestStreetLocation(addressComponents) {
  return addressComponents
    .filter(({ types }) =>
      types.find(type => secondBestStreetParams.indexOf(type) > -1),
    )
    .map(({ long_name }) => long_name)
    .join(' ');
}

export function getStreet({ address_components, formatted_address }) {
  let street = address_components.find(
    ({ types }) => types.indexOf('street_address') > -1,
  );

  street = street
    ? street.long_name
    : getSecondBestStreetLocation(address_components);

  return street || formatted_address;
}

export function getBuildingNumber({ address_components }) {
  const number = address_components.find(
    ({ types }) => types.indexOf('street_number') > -1,
  );

  return number && number.long_name;
}
