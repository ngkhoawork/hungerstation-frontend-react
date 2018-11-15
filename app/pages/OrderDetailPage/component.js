import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import ProfileNav from 'components/ProfileNav';
import Paragraph from 'components/Paragraph';
import CartContainer from 'containers/CartContainer';
import OrderCard from './OrderCard';
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
                </LeftSide>
                <RightSide>
                  <CartContainer params={params} />
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
