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
  display: flex;
  justify-content: space-evenly;

  > * {
    margin: 0 10px;
  }
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
      <Icon name="google" size={32} />
      <Icon name="facebook" size={32} />
      <Icon name="twitter" size={32} />
    </CenteredContent>

    <ForgotPasswordFormContainer />
  </StyledPage>
);

export default ForgotPasswordPage;
