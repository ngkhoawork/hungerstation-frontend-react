import { unchangeableAddressTypes } from './constants';

export function isChangeableType(type) {
  return unchangeableAddressTypes.indexOf(type) === -1;
}
