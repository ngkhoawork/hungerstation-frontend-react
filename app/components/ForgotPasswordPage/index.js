/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ForgotPasswordFormContainer from 'containers/ForgotPasswordFormContainer';

import TextItem from 'components/TextItem';
import Icon from 'components/Icon';
import StyledPage from 'components/StyledFormPage';

import messages from './messages';

const CenteredContent = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

const ForgotPasswordPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <CenteredContent>
      <Icon name="google" />
      <Icon name="facebook" />
      <Icon name="twitter" />
    </CenteredContent>

    <ForgotPasswordFormContainer />
  </StyledPage>
);

export default ForgotPasswordPage;
