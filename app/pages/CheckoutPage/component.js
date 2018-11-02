import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import CartContainer from 'containers/CartContainer';
import AddressesContainer from 'containers/AddressesContainer';
import DeliveryOptionsContainer from 'containers/DeliveryOptionsContainer';
import PaymentOptionsContainer from 'containers/PaymentOptionsContainer';
import Back from 'containers/Back';
import Step from 'components/Step';
import Note from 'components/Note';
import { border } from 'utils/css/variables';
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
        <DeliveryOptionsContainer />
      </Step>
      <Step stepNo={3} stepCount={3} title={intl.formatMessage(messages.step3)}>
        <PaymentOptionsContainer />
      </Step>
      <Note style={{ borderTop: border, padding: '20px 0' }} />
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
