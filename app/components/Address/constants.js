import keyBy from 'lodash/keyBy';
import intl from 'utils/intlService';
import messages from './messages';

export const addressTypes = [
  { key: 'home', name: intl.formatMessage(messages.home), icon: 'home' },
  { key: 'work', name: intl.formatMessage(messages.work), icon: 'work' },
  {
    key: 'hangout',
    name: intl.formatMessage(messages.hangout),
    icon: 'hangouts',
  },
  { key: 'camp', name: intl.formatMessage(messages.camp), icon: 'camp' },
  {
    key: 'other',
    name: intl.formatMessage(messages.other),
    icon: 'gluten-free',
  },
];

export const addressTypesObj = keyBy(addressTypes, 'key');
