import React from 'react';
import intl from 'utils/intlService';

import StyledContainer from './StyledContainer';
import StyledLink from './StyledLink';
import messages from './messages';

const MenuLinks = () => {
  const links = [
    { id: 'about-us', label: intl.formatMessage(messages.aboutUs) },
    { id: 'contactus', label: intl.formatMessage(messages.contactUs) },
    // { id: 'help', label: intl.formatMessage(messages.help) },
    {
      id: 'privacy-policy',
      label: intl.formatMessage(messages.privacyPolicy),
    },
    { id: 'faqs', label: intl.formatMessage(messages.faqs) },
    // { id: 'terms-of-use', label: intl.formatMessage(messages.termsOfUse) },
    // {
    //   id: 'add-restaurants',
    //   label: intl.formatMessage(messages.addRestaruants),
    // },
    // { id: 'careers', label: intl.formatMessage(messages.careers) },
    // { id: 'blog', label: intl.formatMessage(messages.blog) },
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
