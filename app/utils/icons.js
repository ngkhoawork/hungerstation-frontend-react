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
import Tick from 'icons/tick.svg';
import Delete from 'icons/delete.svg';
import ArrowRight from 'icons/arrow-right.svg';
import Check from 'icons/check.svg';
import Time from 'icons/time.svg';
import Delivery from 'icons/delivery.svg';
import Bag from 'icons/bag.svg';
import Star from 'icons/star.svg';
import ArrowDropdown from 'icons/arrow-dropdown.svg';

import AllCuisine from 'icons/all-cuisine.svg';
import AmericanCuisine from 'icons/american-cuisine.svg';
import ArabianCuisine from 'icons/arabian-cuisine.svg';
import AsianCuisine from 'icons/asian-cuisine.svg';
import BakeryCuisine from 'icons/bakery-cuisine.svg';
import BeveragesCuisine from 'icons/beverages-cuisine.svg';
import DeliveryCuisine from 'icons/delivery-cuisine.svg';
import DessertsCuisine from 'icons/desserts-cuisine.svg';
import FastCuisine from 'icons/fast-cuisine.svg';
import FoodBeverageCuisine from 'icons/foodbeverage-cuisine.svg';
import GrillsCuisine from 'icons/grills-cuisine.svg';
import IndianCuisine from 'icons/indian-cuisine.svg';
import ItalianCuisine from 'icons/italian-cuisine.svg';
import MexicanCuisine from 'icons/mexican-cuisine.svg';
import SandwichesCuisine from 'icons/sandwiches-cuisine.svg';
import SeaCuisine from 'icons/sea-cuisine.svg';
import TurkishCuisine from 'icons/turkish-cuisine.svg';

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
    case 'tick':
      return Tick;
    case 'delete':
      return Delete;
    case 'arrow-right':
      return ArrowRight;
    case 'all':
      return AllCuisine;
    case 'american':
      return AmericanCuisine;
    case 'arabian':
      return ArabianCuisine;
    case 'asian':
      return AsianCuisine;
    case 'bakery':
      return BakeryCuisine;
    case 'beverages':
      return BeveragesCuisine;
    case 'deliveryfood':
      return DeliveryCuisine;
    case 'desserts':
      return DessertsCuisine;
    case 'fast':
      return FastCuisine;
    case 'foodbeverage':
      return FoodBeverageCuisine;
    case 'grills':
      return GrillsCuisine;
    case 'indian':
      return IndianCuisine;
    case 'italian':
      return ItalianCuisine;
    case 'mexican':
      return MexicanCuisine;
    case 'sandwiches':
      return SandwichesCuisine;
    case 'sea':
      return SeaCuisine;
    case 'turkish':
      return TurkishCuisine;
    case 'check':
      return Check;
    case 'time':
      return Time;
    case 'delivery':
      return Delivery;
    case 'bag':
      return Bag;
    case 'star':
      return Star;
    case 'arrowdown':
      return ArrowDropdown;
    default:
      return null;
  }
};

export default getIcon;
