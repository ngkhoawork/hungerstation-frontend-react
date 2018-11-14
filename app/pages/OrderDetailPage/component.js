import React from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import OrderCard from './OrderCard';
import {
  NavHeader,
  ContentContainer,
  ProfileNavWrapper,
  OrderDetailSection,
  StyledOrderList,
} from './StyledComponents';

class OrdersPage extends React.Component {
  handleDetailClick = () => {
    // implement view order detail
  };

  render() {
    const { order } = this.props;
    return (
      <PageContent>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <ProfileNavWrapper>
            <ProfileNav active={this.props.path} />
          </ProfileNavWrapper>
          <OrderDetailSection>
            <Paragraph size={30} margin="0 0 0 11px">
              Order details
            </Paragraph>
            <StyledOrderList>
              <OrderCard
                key={order.id}
                order={order}
                onOrderClick={this.handleDetailClick}
              />
            </StyledOrderList>
          </OrderDetailSection>
        </ContentContainer>
      </PageContent>
    );
  }
}

OrdersPage.propTypes = {
  order: PropTypes.object.isRequired,
  path: PropTypes.string,
};

export default withHeaderAndFooter(OrdersPage);
