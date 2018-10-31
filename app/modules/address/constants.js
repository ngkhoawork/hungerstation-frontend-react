import keyBy from 'lodash/keyBy';

export const unchangeableAddressTypes = ['home', 'work', 'hangout', 'camp'];

export const otherAddressType = 'old_style';

export const addressTypes = [
  { key: 'home', icon: 'home' },
  { key: 'work', icon: 'work' },
  { key: 'hangout', icon: 'hangout' },
  { key: 'camp', icon: 'camp' },
  { key: otherAddressType, icon: 'gluten-free' },
];

export const addressTypesObj = keyBy(addressTypes, 'key');
