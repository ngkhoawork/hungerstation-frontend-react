import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import CartContainer from 'containers/CartContainer';
import BasketCartButton from 'containers/BasketCartButton';
import AddressesContainer from 'containers/AddressesContainer';
import DeliveryOptionsContainer from 'containers/DeliveryOptionsContainer';
import PaymentOptionsContainer from 'containers/PaymentOptionsContainer';
import Back from 'containers/Back';
import Step from 'components/Step';
import Note from 'components/Note';
import { NavHeader } from 'utils/css/styledComponents';
import { border } from 'utils/css/variables';
import messages from './messages';
import {
  Container,
  ContentContainer,
  LeftSide,
  RightSide,
  cartBtnsStyle,
  footerCss,
} from './StyledComponents';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBasketCartBtnVisible: true };
    this.cartRef = React.createRef();
    this.cartEndRef = React.createRef();
    this.intersectObserver = new IntersectionObserver(this.handleIntersect);
  }

  componentDidMount() {
    this.intersectObserver.observe(this.cartEndRef.current);
  }

  componentWillUnmount() {
    this.intersectObserver.disconnect();
  }

  handleIntersect = entries =>
    this.setState({ isBasketCartBtnVisible: !entries[0].isIntersecting });

  handleBasketClick = () => this.cartRef.current.scrollIntoView();

  renderContent = () => {
    const { deliveryOptions = [], note, onOrderChange } = this.props;
    const hasDeliverySection = deliveryOptions.length > 1;

    return (
      <React.Fragment>
        <Step
          stepNo={1}
          stepCount={3}
          title={intl.formatMessage(messages.step1)}
        >
          <AddressesContainer onOrderChange={onOrderChange} />
        </Step>
        {hasDeliverySection ? (
          <Step
            stepNo={2}
            stepCount={3}
            title={intl.formatMessage(messages.step2)}
          >
            <DeliveryOptionsContainer onOrderChange={onOrderChange} />
          </Step>
        ) : (
          <DeliveryOptionsContainer onOrderChange={onOrderChange} />
        )}
        <Step
          stepNo={hasDeliverySection ? 3 : 2}
          stepCount={hasDeliverySection ? 3 : 2}
          title={intl.formatMessage(messages.step3)}
        >
          <PaymentOptionsContainer onOrderChange={onOrderChange} />
        </Step>
        <Note
          style={{ borderTop: border, padding: '20px 0' }}
          note={note}
          onChange={this.props.onNoteChange}
        />
      </React.Fragment>
    );
  };

  render() {
    const { isLoading, params } = this.props;
    const { isBasketCartBtnVisible } = this.state;

    return (
      <Container>
        <NavHeader isWithOffset>
          <Back />
        </NavHeader>
        <ContentContainer>
          <LeftSide>{isLoading ? null : this.renderContent()}</LeftSide>
          <RightSide innerRef={this.cartRef}>
            <CartContainer
              params={params}
              onOrderCreate={this.props.onOrderCreate}
            />
            <div style={{ height: '0.00001px' }} ref={this.cartEndRef} />
          </RightSide>
          <BasketCartButton
            css={cartBtnsStyle}
            params={params}
            onBasketClick={this.handleBasketClick}
            innerStyle={{ opacity: isBasketCartBtnVisible ? 1 : 0 }}
          />
        </ContentContainer>
      </Container>
    );
  }
}

CheckoutPage.propTypes = {
  note: PropTypes.string,
  onNoteChange: PropTypes.func.isRequired,
  onOrderCreate: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  deliveryOptions: PropTypes.array,
  params: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

export default withHeaderAndFooter(CheckoutPage, {
  footerProps: { css: footerCss },
});
