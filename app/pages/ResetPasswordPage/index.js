import React from 'react';
import { FormattedMessage } from 'react-intl';
import intl from 'utils/intlService';
import { StyledPage, StyledLink } from 'utils/css/styledComponents';
import ResetPasswordFormContainer from 'containers/ResetPasswordFormContainer';
import { withDarkHeaderOnly } from 'hocs/withInsertLayout';
import TextItem from 'components/TextItem';
import Back from 'components/Back';
import messages from './messages';

const ForgotPasswordPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <ResetPasswordFormContainer />
    <StyledLink to="/forgot-password" style={{ marginBottom: 30 }}>
      {intl.formatMessage(messages.noAccountAccess)}
    </StyledLink>
    <Back to="/" label={intl.formatMessage(messages.backToHome)} />
  </StyledPage>
);

export default withDarkHeaderOnly(ForgotPasswordPage);
