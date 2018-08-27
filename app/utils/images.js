import Burger from 'images/burger.png';
import Pizza from 'images/pizza.png';
import Networking from 'images/networking.png';
import Googleplay from 'icons/googleplay.svg';
import AppleStore from 'icons/appstore.svg';

const getImage = name => {
  switch (name) {
    case 'burger':
      return Burger;
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
