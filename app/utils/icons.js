import Back from 'icons/close.svg';
import ArrowDown from 'icons/twitter.svg';
import LocateYourself from 'icons/locate-yourself.svg';
import Basket from 'icons/facebook.svg';

const getIcon = name => {
  switch (name) {
    case 'back':
      return Back;
    case 'arrow-down':
      return ArrowDown;
    case 'location-pin':
      return ArrowDown;
    case 'locate-yourself':
      return LocateYourself;
    case 'basket':
      return Basket;
    default:
      return null;
  }
};

export default getIcon;
