import Back from 'icons/back.png';
import ArrowDown from 'icons/arrow-down.png';
import LocationPin from 'icons/location-pin.png';
import LocateYourself from 'icons/locate-yourself.png';

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
    default:
      return null;
  }
};

export default getIcon;
