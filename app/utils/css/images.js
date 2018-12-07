import Googleplay from 'images/google-play.png';
import Googleplay2x from 'images/google-play-2x.png';
import Googleplay3x from 'images/google-play-3x.png';
import AppleStore from 'icons/appstore.svg';
import privacy_policy from 'images/privacy_policy.png';
import aboutUs from 'images/aboutUs.png';

const getImage = name => {
  switch (name) {
    case 'googleplay':
      return Googleplay;
    case 'googleplay-2x':
      return Googleplay2x;
    case 'googleplay-3x':
      return Googleplay3x;
    case 'applestore':
      return AppleStore;
    case 'privacy_policy':
      return privacy_policy;
    case 'aboutUs':
      return aboutUs;
    default:
      return null;
  }
};

export default getImage;
