import React from 'react';

import { FormattedMessage } from 'react-intl';
import RegistrationFormContainer from 'containers/RegistrationFormContainer';
import { withDarkHeaderOnly } from 'hocs/withInsertLayout';

import SocialAuth from 'components/SocialAuth';
import ButtonLink from 'components/ButtonLink';
import TextItem from 'components/TextItem';
import { StyledPage } from 'utils/css/styledComponents';

import messages from './messages';

const RegistrationPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <SocialAuth />
    <RegistrationFormContainer />
    <TextItem>
      <FormattedMessage {...messages.haveAccount} />&nbsp;
      <ButtonLink to="/login">
        <FormattedMessage {...messages.logIn} />
      </ButtonLink>
    </TextItem>
  </StyledPage>
);

export default withDarkHeaderOnly(RegistrationPage);
