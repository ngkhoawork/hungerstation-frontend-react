import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import Loader from 'components/Loader';
import OrderCard from 'pages/OrdersPage/OrderCard';
import { NavHeader } from 'utils/css/styledComponents';
import {
  desktopProfileNav,
  mobileProfileNav,
  ContentContainer,
  StyledOrderList,
  LeftSide,
  RightSide,
} from 'pages/OrdersPage/StyledComponents';
import CartContainer from './CartContainer';
import TrackingSteps from './TrackingSteps';
import { cartCss, OrderDetailSection } from './StyledComponents';
import messages from './messages';

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
          <ProfileNav active={path} css={desktopProfileNav} />
          <OrderDetailSection>
            {order ? (
              <Fragment>
                <LeftSide>
                  <Paragraph size={30}>
                    {intl.formatMessage(messages.orderDetails)}
                  </Paragraph>
                  <StyledOrderList>
                    <OrderCard
                      key={order.id}
                      order={order}
                      onRateClick={this.handleRateClick}
                    />
                  </StyledOrderList>
                  {order.tracking.activeStatus && (
                    <Fragment>
                      <TrackingSteps
                        steps={order.tracking.arrayOfStates}
                        currentStep={currentStep}
                      />
                      {order.deliveryProvider === 'hungerstation_delivery' &&
                        order.realTimeTracking && (
                        /* eslint-disable */
                        <Iframe
                          url={order.realTimeTracking.credentials.url}
                          width="100%"
                          height="241px"
                          id="trackingMap"
                          display="initial"
                          position="relative"
                        />)
                        /* eslint-enable */
                      }
                    </Fragment>
                  )}
                </LeftSide>
                <RightSide>
                  <CartContainer
                    params={params}
                    purchases={purchases}
                    orderAmount={orderAmount}
                    discount={discount}
                    deliveryFee={deliveryFee}
                    css={cartCss}
                  />
                </RightSide>
                <ProfileNav active={path} css={mobileProfileNav} />
              </Fragment>
            ) : (
              <Loader />
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
