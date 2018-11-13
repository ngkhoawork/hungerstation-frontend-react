import React from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import NotFound from './NotFound';
import OrderCard from './OrderCard';
import {
  NavHeader,
  ContentContainer,
  Loading,
  ProfileNavWrapper,
  OrdersSection,
  StyledOrderList,
  StyledList,
} from './StyledComponents';

class MyOrderPage extends React.Component {
  handleDetailClick = () => {
    // implement view order detail
  };

  renderOrders() {
    const { orders } = this.props;
    return (
      <OrdersSection>
        <Paragraph size={30} margin="0 0 0 11px">
          My orders
        </Paragraph>

        <StyledOrderList>
          {orders.length > 0 ? (
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
    const { isLoading } = this.props;

    return (
      <PageContent>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <ProfileNavWrapper>
            <ProfileNav active={this.props.path} />
          </ProfileNavWrapper>
          {isLoading ? <Loading>Loading...</Loading> : this.renderOrders()}
        </ContentContainer>
      </PageContent>
    );
  }
}

MyOrderPage.propTypes = {
  isLoading: PropTypes.bool,
  orders: PropTypes.array.isRequired,
  path: PropTypes.string,
};

export default withHeaderAndFooter(MyOrderPage);
