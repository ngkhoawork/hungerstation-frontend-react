import Back from 'icons/back.png';
import ArrowDown from 'icons/arrow-down.png';
import LocationPin from 'icons/location-pin.png';
import LocateYourself from 'icons/locate-yourself.png';
import Basket from 'icons/basket.png';
import Twitter from 'icons/twitter.svg';
import Facebook from 'icons/facebook.svg';
import Google from 'icons/google.svg';
import Plus from 'icons/+.svg';

const getIcon = name => {
  switch (name) {
    case 'back':
      return Back;
    case 'arrow-down':
      return ArrowDown;
    case 'location-pin':
      return LocationPin;
    case 'locate-yourself':
      return LocateYourself;
    case 'basket':
      return Basket;
    case 'twitter':
      return Twitter;
    case 'facebook':
      return Facebook;
    case 'google':
      return Google;
    case 'plus':
      return Plus;
    default:
      return null;
  }
};

export default getIcon;
