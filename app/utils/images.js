import Burger from 'images/burger.png';
import Pizza from 'images/pizza.png';
import Networking from 'images/networking.png';

const getImage = name => {
  switch (name) {
    case 'burger':
      return Burger;
    case 'pizza':
      return Pizza;
    case 'networking':
      return Networking;
    default:
      return null;
  }
};

export default getImage;
