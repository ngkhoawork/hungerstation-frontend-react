import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Price from 'components/Price';
import { Title } from 'components/Typography';
import BasketQuantity from './BasketQuantity';
import messages from './messages';
import { RestaurantProductPropType } from './constants';
import {
  List,
  Item,
  ContentContainer,
  Content,
  TitleContainer,
  titleStyle,
  Description,
  Img,
  PriceContainer,
  Footer,
  MobileFooter,
  AddBtn,
} from './StyledComponents';

const renderFooter = price => (
  <Fragment>
    <PriceContainer>
      <Price price={price} isPrimary hasTag />
    </PriceContainer>
    <AddBtn>
      {intl.formatMessage(messages.addToCart)} &nbsp;
      <Icon name="arrow-circled-right" size={15} />
    </AddBtn>
  </Fragment>
);

const RestaurantProducts = ({ products, cartItems, onProductClick }) => (
  <List>
    {products.map(product => (
      <Item key={product.id} onClick={() => onProductClick(product)}>
        <ContentContainer>
          <Img image={product.image} />
          <Content>
            <div>
              <TitleContainer>
                <BasketQuantity cartItems={cartItems} product={product} />
                <Title css={titleStyle}>{product.name}</Title>
              </TitleContainer>
              <Description>{product.description}</Description>
            </div>
            <Footer>{renderFooter(product.price)}</Footer>
          </Content>
        </ContentContainer>
        <MobileFooter>{renderFooter(product.price)}</MobileFooter>
      </Item>
    ))}
  </List>
);

RestaurantProducts.propTypes = {
  products: PropTypes.arrayOf(RestaurantProductPropType).isRequired,
  cartItems: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default RestaurantProducts;
