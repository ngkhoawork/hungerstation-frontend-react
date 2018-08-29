import Location from 'icons/location.svg';
import LocationBig from 'icons/location-big.svg';
import ChefBig from 'icons/chef-big.svg';
import PaymentBig from 'icons/payment-big.svg';
import PhoneBig from 'icons/phone-big.svg';
import Pin from 'icons/pin.svg';
import District from 'icons/district.svg';
import Basket from 'icons/basket.svg';
import Facebook from 'icons/facebook.svg';
import Twitter from 'icons/twitter.svg';
import Google from 'icons/google.svg';
import Instagram from 'icons/instagram.svg';
import Toggle from 'icons/toggle.svg';
import Close from 'icons/close.svg';
import Plus from 'icons/+.svg';

const getIcon = name => {
  switch (name) {
    case 'location':
      return Location;
    case 'location-big':
      return LocationBig;
    case 'chef-big':
      return ChefBig;
    case 'payment-big':
      return PaymentBig;
    case 'phone-big':
      return PhoneBig;
    case 'pin':
      return Pin;
    case 'district':
      return District;
    case 'basket':
      return Basket;
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'google':
      return Google;
    case 'twitter':
      return Twitter;
    case 'toggle':
      return Toggle;
    case 'close':
      return Close;
    case 'plus':
      return Plus;
    default:
      return null;
  }
};

export default getIcon;
