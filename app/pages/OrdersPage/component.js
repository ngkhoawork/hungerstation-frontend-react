import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import Loader from 'components/Loader';
import { NavHeader } from 'utils/css/styledComponents';
import NotFound from './NotFound';
import OrderCard from './OrderCard';
import {
  pageCss,
  ContentContainer,
  desktopProfileNav,
  mobileProfileNav,
  OrdersSection,
  StyledOrderList,
  StyledList,
} from './StyledComponents';
import messages from './messages';

class OrdersPage extends React.Component {
  handleDetailClick = orderId => {
    this.props.history.push(`/my-orders/${orderId}`);
  };

  renderOrders() {
    const { orders } = this.props;

    return (
      <OrdersSection>
        <Paragraph size={30}>{intl.formatMessage(messages.myOrders)}</Paragraph>
        <StyledOrderList>
          {orders.length ? (
            <StyledList>
              {orders.map(order => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onOrderClick={this.handleDetailClick}
                />
              ))}
            </StyledList>
          ) : (
            <NotFound />
          )}
        </StyledOrderList>
      </OrdersSection>
    );
  }

  render() {
    const { isLoading, path } = this.props;

    return (
      <PageContent css={pageCss}>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <ProfileNav active={path} css={desktopProfileNav} />
          {isLoading ? <Loader /> : this.renderOrders()}
          <ProfileNav active={path} css={mobileProfileNav} />
        </ContentContainer>
      </PageContent>
    );
  }
}

OrdersPage.propTypes = {
  isLoading: PropTypes.bool,
  orders: PropTypes.array.isRequired,
  path: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default withHeaderAndFooter(OrdersPage);
