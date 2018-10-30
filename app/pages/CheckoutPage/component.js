import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import CartContainer from 'containers/CartContainer';
import AddressesContainer from 'containers/AddressesContainer';
import Back from 'containers/Back';
import Button from 'components/Button';
import Step from './Step';
import IneligibleAddress from './IneligibleAddress';
import messages from './messages';
import {
  Container,
  NavHeader,
  ContentContainer,
  LeftSide,
  RightSide,
} from './StyledComponents';

const CheckoutPage = ({ showModal }) => {
  const handleIneligibleAddress = () => {
    const IneligibleAddressHOC = () => (
      <IneligibleAddress onEditClick={() => {}} onSearchClick={() => {}} />
    );
    showModal(IneligibleAddressHOC);
  };

  return (
    <Container>
      <NavHeader>
        <Back />
      </NavHeader>
      <ContentContainer>
        <LeftSide>
          <Step
            stepNo={1}
            stepCount={3}
            title={intl.formatMessage(messages.step1)}
          >
            <AddressesContainer />
          </Step>
          <Step
            stepNo={2}
            stepCount={3}
            title={intl.formatMessage(messages.step2)}
          >
            <Button inline onClick={handleIneligibleAddress}>
              Open Ineligible Modal
            </Button>
          </Step>
          <Step
            stepNo={3}
            stepCount={3}
            title={intl.formatMessage(messages.step3)}
          >
            <div>Step 3</div>
          </Step>
        </LeftSide>
        <RightSide>
          <CartContainer />
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

CheckoutPage.propTypes = {
  // user: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default withHeaderAndFooter(CheckoutPage);
