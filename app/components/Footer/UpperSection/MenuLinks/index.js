import React from 'react';

import StyledContainer from './StyledContainer';
import StyledLink from './StyledLink';

const MenuLinks = () => {
  const links = [
    { id: 'about-us', label: 'About us' },
    { id: 'contact-us', label: 'Contact us' },
    { id: 'help', label: 'Help' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'terms-of-use', label: 'Terms of use' },
    { id: 'add-restaurants', label: 'Add Restaurants' },
    { id: 'privacy-policy', label: 'Privacy Policy' },
    { id: 'careers', label: 'Careers' },
    { id: 'blog', label: 'Blog' },
  ];
  return (
    <StyledContainer>
      {links.map(link => (
        <StyledLink key={link.id} to={`/${link.id}`}>
          {link.label}
        </StyledLink>
      ))}
    </StyledContainer>
  );
};

export default MenuLinks;
