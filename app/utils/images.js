import Burger from 'images/burger.png';
import BurgerMedium from 'images/burger-medium.png';
import BurgerSmall from 'images/burger-small.png';
import Pizza from 'images/pizza.png';
import Networking from 'images/networking.png';
import Googleplay from 'icons/googleplay.svg';
import AppleStore from 'icons/appstore.svg';

const getImage = name => {
  switch (name) {
    case 'burger':
      return Burger;
    case 'burger-medium':
      return BurgerMedium;
    case 'burger-small':
      return BurgerSmall;
    case 'pizza':
      return Pizza;
    case 'networking':
      return Networking;
    case 'googleplay':
      return Googleplay;
    case 'applestore':
      return AppleStore;
    default:
      return null;
  }
};

export default getImage;
