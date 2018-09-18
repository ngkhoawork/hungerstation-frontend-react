import Info from 'icons/info.svg';

const getIcon = name => {
  try {
    /* eslint-disable */
    return require(`icons/${name}.svg`);
    /* eslint-enable */
  } catch (err) {
    return Info;
  }
};

export default getIcon;
