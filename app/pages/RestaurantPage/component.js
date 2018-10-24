import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import CartContainer from 'containers/CartContainer';
import { ViewCartButton } from 'components/Cart';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantProductTypes from 'components/RestaurantProductTypes';
import RestaurantProducts from 'components/RestaurantProducts';
import MealOptions from 'components/MealOptions';
import { maxModalHeight } from 'utils/css/variables';
import messages from './messages';
import {
  StyledPage,
  NavHeader,
  ContentContainer,
  Loading,
  LeftSide,
  RightSide,
  Header,
  RestaurantInfoContainer,
  ProductsContainer,
  StyledProductTypes,
  CartBtns,
  BasketBtn,
} from './StyledComponents';

const types = ['Featured', 'Burgers', 'Desserts', 'Drinks'];

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProductType: types[0],
      totalOrder: {},
    };
  }

  handleAddClick = product => {
    const MealOptionsHOC = () => (
      <MealOptions
        meal={product}
        onSubmit={this.handleAddOptions}
        onCancel={this.props.onHideModal}
        style={{ maxHeight: maxModalHeight }}
      />
    );

    this.props.onShowModal(MealOptionsHOC);
  };

  handleBasketClick = () => this.props.onShowModal(CartContainer);

  handleProductTypeClick = selectedProductType =>
    this.setState({ selectedProductType });

  handleAddOptions = (product, quantity, additions, price) => {
    const { totalOrder } = this.state;
    const order = totalOrder[product.id]
      ? totalOrder[product.id]
      : { product, quantity: 0, price: 0 };

    order.quantity += quantity;
    order.price += price;
    order.additions = (order.additions || []).concat(additions);
    totalOrder[product.id] = order;

    this.setState({ totalOrder });
    this.props.onHideModal();
    this.props.onAddToCart({ product, quantity, additions, price });
  };

  renderContent = () => {
    const { menuItems, ...info } = this.props.restaurant;
    const { selectedProductType, totalOrder } = this.state;
    const shownProducts = menuItems;
    // const shownProducts = menuItems.filter(
    //   ({ type }) => type === selectedProductType,
    // );
    const totalQuantity = Object.keys(totalOrder).reduce(
      (sum, key) => sum + totalOrder[key].quantity,
      0,
    );
    const totalPrice = Object.keys(totalOrder).reduce(
      (sum, key) => sum + totalOrder[key].price,
      0,
    );

    return (
      <Fragment>
        <Header>
          <RestaurantInfoContainer>
            <RestaurantInfo {...info} />
          </RestaurantInfoContainer>
        </Header>
        <ProductsContainer>
          <StyledProductTypes>
            <RestaurantProductTypes
              types={types}
              active={selectedProductType}
              onClick={this.handleProductTypeClick}
            />
          </StyledProductTypes>
          <RestaurantProducts
            products={shownProducts}
            onProductClick={this.handleAddClick}
          />
        </ProductsContainer>
        <CartBtns>
          <BasketBtn onClick={this.handleBasketClick}>
            {intl.formatMessage(messages.checkBasket)}
          </BasketBtn>
          <ViewCartButton quantity={totalQuantity} price={totalPrice} />
        </CartBtns>
      </Fragment>
    );
  };

  render() {
    const { menuItems } = this.props.restaurant;

    return (
      <StyledPage>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <LeftSide>
            {menuItems ? this.renderContent() : <Loading>Loading...</Loading>}
          </LeftSide>
          <RightSide>
            <CartContainer />
          </RightSide>
        </ContentContainer>
      </StyledPage>
    );
  }
}

RestaurantPage.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default withHeaderAndFooter(RestaurantPage);
