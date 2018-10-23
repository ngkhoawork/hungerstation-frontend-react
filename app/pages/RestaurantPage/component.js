import React from 'react';
import PropTypes from 'prop-types';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import CartContainer from 'containers/CartContainer';
import { ViewCartButton } from 'components/Cart';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantProductTypes from 'components/RestaurantProductTypes';
import RestaurantProducts from 'components/RestaurantProducts';
// import MealOptions from 'components/MealOptions';
import {
  StyledPage,
  NavHeader,
  ContentContainer,
  LeftSide,
  RightSide,
  Header,
  RestaurantInfoContainer,
  ProductsContainer,
  StyledProductTypes,
  CartBtns,
  BasketBtn,
} from './StyledComponents';

const RestaurantPage = ({
  restaurant,
  onAddToCart,
  // onShowModal,
  // onHideModal,
}) => {
  const { info, types, products } = restaurant;

  return (
    <StyledPage>
      <NavHeader>
        <Back />
      </NavHeader>
      <ContentContainer>
        <LeftSide>
          <Header>
            <RestaurantInfoContainer>
              <RestaurantInfo {...info} />
            </RestaurantInfoContainer>
          </Header>
          <ProductsContainer>
            <StyledProductTypes>
              <RestaurantProductTypes types={types} active={types[0]} />
            </StyledProductTypes>
            <RestaurantProducts
              products={products}
              onProductClick={onAddToCart}
            />
          </ProductsContainer>
          <CartBtns>
            <BasketBtn onClick={() => console.log('check basket')}>
              Check basket
            </BasketBtn>
            <ViewCartButton quantity={2} price={120} />
          </CartBtns>
        </LeftSide>
        <RightSide>
          <CartContainer />
        </RightSide>
      </ContentContainer>
    </StyledPage>
  );
};

RestaurantPage.propTypes = {
  restaurant: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default withHeaderAndFooter(RestaurantPage);
