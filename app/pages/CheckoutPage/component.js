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

const CheckoutPage = ({ params, deliveryOptions = [], ...props }) => {
  const hasDeliverySection = deliveryOptions.length > 1;

  const renderContent = () => (
    <React.Fragment>
      <Step stepNo={1} stepCount={3} title={intl.formatMessage(messages.step1)}>
        <AddressesContainer onOrderChange={props.onOrderChange} />
      </Step>
      {hasDeliverySection ? (
        <Step
          stepNo={2}
          stepCount={3}
          title={intl.formatMessage(messages.step2)}
        >
          <DeliveryOptionsContainer onOrderChange={props.onOrderChange} />
        </Step>
      ) : (
        <DeliveryOptionsContainer onOrderChange={props.onOrderChange} />
      )}
      <Step
        stepNo={hasDeliverySection ? 3 : 2}
        stepCount={hasDeliverySection ? 3 : 2}
        title={intl.formatMessage(messages.step3)}
      >
        <PaymentOptionsContainer onOrderChange={props.onOrderChange} />
      </Step>
      <Note
        style={{ borderTop: border, padding: '20px 0' }}
        note={props.note}
        onChange={props.onNoteChange}
      />
    </React.Fragment>
  );

  return (
    <Container>
      <NavHeader>
        <Back />
      </NavHeader>
      <ContentContainer>
        <LeftSide>{props.isLoading ? null : renderContent()}</LeftSide>
        <RightSide>
          <CartContainer params={params} onOrderCreate={props.onOrderCreate} />
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

CheckoutPage.propTypes = {
  note: PropTypes.string,
  onNoteChange: PropTypes.func.isRequired,
  onOrderCreate: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  deliveryOptions: PropTypes.array,
  params: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

export default withHeaderAndFooter(CheckoutPage);
