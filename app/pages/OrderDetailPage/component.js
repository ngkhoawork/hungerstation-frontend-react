import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import { findIndex } from 'lodash';
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
    let currentStep = 0;
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
      if (order.tracking && order.tracking.activeStatus) {
        currentStep = findIndex(order.tracking.arrayOfStates, [
          'key',
          order.tracking.currentStateKey,
        ]);
      }
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
                    <TrackingSteps
                      steps={order.tracking.arrayOfStates}
                      currentStep={currentStep}
                    />
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
