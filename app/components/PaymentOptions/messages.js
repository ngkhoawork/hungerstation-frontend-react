import { defineMessages } from 'react-intl';

export default defineMessages({
  cards: {
    id: 'app.components.PaymentOptions.cards',
    defaultMessage: 'Your credit cards',
  },
  otherOptions: {
    id: 'app.components.PaymentOptions.otherOptions',
    defaultMessage: 'Other payment options',
  },
  cashOnDelivery: {
    id: 'app.components.PaymentOptions.cashOnDelivery',
    defaultMessage: 'Cash on delivery',
  },
  haveCoupon: {
    id: 'app.components.PaymentOptions.haveCoupon',
    defaultMessage: 'Have a coupon?',
  },
  addCoupon: {
    id: 'app.components.PaymentOptions.addCoupon',
    defaultMessage: 'Add coupon',
  },
  deleteCoupon: {
    id: 'app.components.PaymentOptions.deleteCoupon',
    defaultMessage: 'Delete',
  },
  couponError: {
    id: 'app.components.PaymentOptions.couponError',
    defaultMessage: `The coupon is not valid or expired.
      Please try again and insert coupon again.`,
  },
  couponSuccess: {
    id: 'app.components.PaymentOptions.couponSuccess',
    defaultMessage: `Your coupon has been successfully added! Your total order price was adjusted.`,
  },
});
