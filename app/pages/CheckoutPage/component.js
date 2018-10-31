import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import CartContainer from 'containers/CartContainer';
import AddressesContainer from 'containers/AddressesContainer';
import Back from 'containers/Back';
import Step from 'components/Step';
import messages from './messages';
import {
  Container,
  NavHeader,
  ContentContainer,
  LeftSide,
  RightSide,
} from './StyledComponents';

const CheckoutPage = ({ isLoading }) => {
  const renderContent = () => (
    <React.Fragment>
      <Step stepNo={1} stepCount={3} title={intl.formatMessage(messages.step1)}>
        <AddressesContainer />
      </Step>
      <Step stepNo={2} stepCount={3} title={intl.formatMessage(messages.step2)}>
        <div>Step 2</div>
      </Step>
      <Step stepNo={3} stepCount={3} title={intl.formatMessage(messages.step3)}>
        <div>Step 3</div>
      </Step>
    </React.Fragment>
  );

  return (
    <Container>
      <NavHeader>
        <Back />
      </NavHeader>
      <ContentContainer>
        <LeftSide>{isLoading ? null : renderContent()}</LeftSide>
        <RightSide>
          <CartContainer />
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

CheckoutPage.propTypes = {
  isLoading: PropTypes.bool,
};

export default withHeaderAndFooter(CheckoutPage);
