import intl from 'utils/intlService';
import messages from './messages';

const questions = [
  {
    id: '1',
    title: intl.formatMessage(messages.whoWeAre),
    content: [
      {
        id: '1',
        label: intl.formatMessage(messages.ourprivacyPolicyQ),
        answer: intl.formatMessage(messages.ourprivacyPolicyA),
      },
      {
        id: '2',
        label: intl.formatMessage(messages.OtherWebsitesQ),
        answer: intl.formatMessage(messages.OtherWebsitesA),
      },
      {
        id: '3',
        label: intl.formatMessage(messages.ContactQ),
        answer: intl.formatMessage(messages.ContactA),
      },
    ],
  },
  {
    id: '2',
    title: intl.formatMessage(messages.CollectData),
    content: [
      {
        id: '6',
        label: intl.formatMessage(messages.ColletInformationQ),
        answer: intl.formatMessage(messages.ColletInformationA),
      },
      {
        id: '7',
        label: intl.formatMessage(messages.CookiesQ),
        answer: intl.formatMessage(messages.CookiesA),
      },
      {
        id: '8',
        label: intl.formatMessage(messages.StorageSecurityQ),
        answer: intl.formatMessage(messages.StorageSecurityA),
      },
      {
        id: '9',
        label: intl.formatMessage(messages.UseInformationQ),
        answer: intl.formatMessage(messages.UseInformationA),
      },
      {
        id: '10',
        label: intl.formatMessage(messages.AccessInformationQ),
        answer: intl.formatMessage(messages.AccessInformationA),
      },
    ],
  },
];

export default questions;
