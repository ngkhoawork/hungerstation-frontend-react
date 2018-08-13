import Back from 'icons/back.png';

const getIcon = name => {
  switch (name) {
    case 'back':
      return Back;
    default:
      return null;
  }
};

export default getIcon;
