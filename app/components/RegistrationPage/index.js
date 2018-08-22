/**
 *
 * RegistrationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import RegistrationFormContainer from 'containers/RegistrationFormContainer';
import TextLink from 'components/TextLink';
import TextItem from 'components/TextItem';
import StyledPage from 'components/LoginPage/StyledPage';
import Group from 'components/LoginPage/Group';

import messages from './messages';

const RegistrationPage = ({ onSubmit }) => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15}>
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <RegistrationFormContainer onSubmit={onSubmit} />
    <Group>
      <TextItem>
        <FormattedMessage {...messages.haveAccount} />&nbsp;
      </TextItem>
      <TextLink to="/login">
        <FormattedMessage {...messages.logIn} />
      </TextLink>
    </Group>
  </StyledPage>
);

RegistrationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationPage;
