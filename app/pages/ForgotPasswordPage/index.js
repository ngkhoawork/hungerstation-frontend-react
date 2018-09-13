/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import ForgotPasswordFormContainer from 'containers/ForgotPasswordFormContainer';

import TextItem from 'components/TextItem';
import { StyledPage } from 'utils/styledComponents';
import SocialAuth from 'components/SocialAuth';

import messages from './messages';

const ForgotPasswordPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <SocialAuth />
    <ForgotPasswordFormContainer />
  </StyledPage>
);

export default ForgotPasswordPage;
