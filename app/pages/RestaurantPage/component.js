import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import CartContainer from 'containers/CartContainer';
import ViewCartButton from 'containers/ViewCartButton';
import RestaurantInfo from 'components/RestaurantInfo';
import TypeSelect from 'components/TypeSelect';
import RestaurantProducts from 'components/RestaurantProducts';
import MealOptions from 'components/MealOptions';
import { NavHeader } from 'utils/css/styledComponents';
import messages from './messages';
import {
  StyledPage,
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

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    const { menuGroups, id } = props.restaurant;
    this.state = {
      restaurantId: id, // eslint-disable-line react/no-unused-state
      selectedMenuGroup: menuGroups && menuGroups[0],
    };
  }

  static getDerivedStateFromProps({ restaurant }, { restaurantId }) {
    if (restaurant.id !== restaurantId) {
      return {
        selectedMenuGroup: restaurant.menuGroups[0],
        restaurantId: restaurant.id,
      };
    }

    return null;
  }

  handleAddClick = product => {
    const MealOptionsHOC = () => (
      <MealOptions purchase={{ product }} onSubmit={this.handleAddOptions} />
    );

    this.props.onShowModal(MealOptionsHOC);
  };

  handleBasketClick = () => this.props.onShowModal(CartContainer);

  handleMenuGroupSelect = selectedMenuGroup =>
    this.setState({ selectedMenuGroup });

  handleAddOptions = purchase => {
    this.props.onHideModal();
    this.props.onAddToCart(purchase);
  };

  renderContent = () => {
    const { cartItems, restaurant } = this.props;
    const { menuItems, menuGroups, ...info } = restaurant;
    const { selectedMenuGroup } = this.state;
    const shownProducts = menuItems.filter(
      ({ menuGroupId }) => menuGroupId === parseInt(selectedMenuGroup.id, 10),
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
            <TypeSelect
              types={menuGroups}
              active={selectedMenuGroup}
              onSelect={this.handleMenuGroupSelect}
            />
          </StyledProductTypes>
          <RestaurantProducts
            products={shownProducts}
            cartItems={cartItems}
            onProductClick={this.handleAddClick}
          />
        </ProductsContainer>
        <CartBtns>
          <BasketBtn onClick={this.handleBasketClick}>
            {intl.formatMessage(messages.checkBasket)}
          </BasketBtn>
          <ViewCartButton />
        </CartBtns>
      </Fragment>
    );
  };

  render() {
    const { isLoading, params } = this.props;

    return (
      <StyledPage>
        <NavHeader>
          <Back />
        </NavHeader>
        <ContentContainer>
          <LeftSide>
            {isLoading ? <Loading>Loading...</Loading> : this.renderContent()}
          </LeftSide>
          <RightSide>
            <CartContainer params={params} />
          </RightSide>
        </ContentContainer>
      </StyledPage>
    );
  }
}

RestaurantPage.propTypes = {
  isLoading: PropTypes.bool,
  cartItems: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  restaurant: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default withHeaderAndFooter(RestaurantPage);
