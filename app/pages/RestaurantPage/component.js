import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { getDeepProp } from 'utils/helpers';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import Back from 'containers/Back';
import CartContainer from 'containers/CartContainer';
import BasketCartButton from 'containers/BasketCartButton';
import RestaurantInfo from 'components/RestaurantInfo';
import TypeSelect from 'components/TypeSelect';
import RestaurantProducts from 'components/RestaurantProducts';
import MealOptions from 'components/MealOptions';
import { NavHeader, PageNotice } from 'utils/css/styledComponents';
// import { isDayTimeMatch } from 'utils/helpers';
import globalMessages from 'translations/messages';
import messages from './messages';
import {
  StyledPage,
  ContentContainer,
  LeftSide,
  RightSide,
  Header,
  RestaurantInfoContainer,
  ProductsContainer,
  StyledProductTypes,
  cartBtnsStyle,
} from './StyledComponents';

class RestaurantPage extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    const { menu, id } = props.restaurant;

    if (id !== state.restaurantId) {
      return {
        // selectedMenuGroup: menu.menugroups.find(isDayTimeMatch),
        selectedMenuGroup: menu.menugroups[0],
        restaurantId: id,
      };
    }

    return null;
  }

  handleAddClick = selectedProduct => {
    if (this.props.restaurant.status === 'closed') return;

    const product = selectedProduct.menuitems
      ? selectedProduct.menuitems[0]
      : selectedProduct;
    const parentProduct = selectedProduct.menuitems
      ? selectedProduct
      : undefined;

    const MealOptionsHOC = () => (
      <MealOptions
        purchase={{ product, parentProduct }}
        onSubmit={this.handleAddOptions}
      />
    );

    this.props.onShowModal(MealOptionsHOC);
  };

  handleMenuGroupSelect = selectedMenuGroup =>
    this.setState({ selectedMenuGroup });

  handleAddOptions = purchase => {
    this.props.onHideModal();
    this.props.onAddToCart(purchase);
  };

  renderContent = () => {
    const { cartItems, restaurant, params } = this.props;
    const { menu, ...info } = restaurant;
    const { selectedMenuGroup } = this.state;

    if (!getDeepProp(menu, ['menugroups', 'length'])) {
      return (
        <PageNotice>
          {intl.formatMessage(messages.noMenu, { name: info.restaurant.name })}
        </PageNotice>
      );
    }

    if (!selectedMenuGroup) return null;

    // const shownProducts = selectedMenuGroup.products.find(isDayTimeMatch);
    const shownProducts = selectedMenuGroup.products;

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
              types={menu.menugroups}
              active={selectedMenuGroup}
              onSelect={this.handleMenuGroupSelect}
            />
          </StyledProductTypes>
          <RestaurantProducts
            status={restaurant.status}
            products={shownProducts}
            cartItems={cartItems}
            onProductClick={this.handleAddClick}
          />
        </ProductsContainer>
        <BasketCartButton css={cartBtnsStyle} params={params} />
      </Fragment>
    );
  };

  render() {
    const { isLoading, params } = this.props;

    return (
      <StyledPage>
        <NavHeader isWithOffset>
          <Back />
        </NavHeader>
        <ContentContainer>
          <LeftSide>
            {isLoading ? (
              <PageNotice>
                {intl.formatMessage(globalMessages.loading)}
              </PageNotice>
            ) : (
              this.renderContent()
            )}
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
