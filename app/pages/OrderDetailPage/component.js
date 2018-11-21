import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import CartContainer from './CartContainer';
import OrderCard from './OrderCard';
import TrackingSteps from './TrackingSteps';

import {
  NavHeader,
  ContentContainer,
  ProfileNavWrapper,
  OrderDetailSection,
  StyledOrderList,
  LeftSide,
  RightSide,
  Loading,
} from './StyledComponents';

const steps = [
  {
    index: 1,
    title: 'Submitted!',
    description: 'Great! Your order is being processed',
  },
  {
    index: 2,
    title: 'Finding a driver',
    description: 'Awaiting acceptance from driver',
  },
  {
    index: 3,
    title: 'Sent to restaurant',
    description: 'Your order has been sent to shwrmer',
  },
  {
    index: 4,
    title: 'In the kitchen',
    description: 'Shawrmer is preparing your order',
  },
  {
    index: 5,
    title: 'On the way',
    description: 'Your order is in delivery',
  },
];

const currentStep = 2;
class OrderDetailPage extends React.Component {
  handleRateClick = () => {
    // implement rate click function
  };

  render() {
    const { order, params, path } = this.props;
    let purchases = [];
    const orderAmount = order ? order.amount : undefined;
    const discount = order ? order.discount : undefined;
    const deliveryFee = order ? parseFloat(order.fee) : undefined;
    if (order) {
      purchases = order.orderItems.map((item, index) => ({
        id: index,
        product: {
          ...item.menuItem,
          price: item.amount,
        },
        // parentProduct: purchase.parentProduct,
        quantity: item.count,
        price: item.amount,
        additions: [],
      }));
    }
    return (
      <PageContent>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <ProfileNavWrapper>
            <ProfileNav active={path} />
          </ProfileNavWrapper>
          <OrderDetailSection>
            {order ? (
              <Fragment>
                <LeftSide>
                  <Paragraph size={30} margin="0 0 0 11px">
                    Order details
                  </Paragraph>
                  <StyledOrderList>
                    <OrderCard
                      key={order.id}
                      order={order}
                      onRateClick={this.handleRateClick}
                    />
                  </StyledOrderList>
                  {order.tracking.activeStatus && (
                    <TrackingSteps steps={steps} currentStep={currentStep} />
                  )}
                </LeftSide>
                <RightSide>
                  <CartContainer
                    params={params}
                    purchases={purchases}
                    orderAmount={orderAmount}
                    discount={discount}
                    deliveryFee={deliveryFee}
                  />
                </RightSide>
              </Fragment>
            ) : (
              <Loading>Loading...</Loading>
            )}
          </OrderDetailSection>
        </ContentContainer>
      </PageContent>
    );
  }
}

OrderDetailPage.propTypes = {
  order: PropTypes.object,
  params: PropTypes.object,
  path: PropTypes.string,
};

export default withHeaderAndFooter(OrderDetailPage);
