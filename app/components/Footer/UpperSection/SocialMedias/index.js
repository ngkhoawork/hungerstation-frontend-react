import React from 'react';

import Icon from 'components/Icon';
import StyledLink from './StyledLink';

const SocialMedias = () => {
  const medias = [
    { id: 'google', to: 'https://www.google.com' },
    { id: 'facebook', to: 'https://www.facebook.com/HungerStation/' },
    { id: 'twitter', to: 'https://twitter.com/hungerstation' },
    { id: 'instagram', to: 'https://www.instagram.com/hungerstation/' },
  ];
  const openWindow = link => {
    window.open(link);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {medias.map(media => (
        <StyledLink key={media.id}>
          <Icon
            name={media.id}
            size={32}
            onClick={() => openWindow(media.to)}
          />
        </StyledLink>
      ))}
    </div>
  );
};

export default SocialMedias;
