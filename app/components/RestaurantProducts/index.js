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
  IconContainer,
} from './StyledComponents';

const renderFooter = (price, status) => (
  <Fragment>
    <PriceContainer>
      <Price price={price} isPrimary hasTag />
    </PriceContainer>
    {status !== 'closed' ? (
      <AddBtn>
        {intl.formatMessage(messages.addToCart)} &nbsp;
        <IconContainer>
          <Icon name="arrow-circled-right" size={15} />
        </IconContainer>
      </AddBtn>
    ) : null}
  </Fragment>
);

const RestaurantProducts = ({ status, products, cartItems, ...props }) => (
  <List>
    {products.map(product => (
      <Item key={product.id} onClick={() => props.onProductClick(product)}>
        <ContentContainer>
          <Img images={product.images} />
          <Content>
            <div>
              <TitleContainer>
                <BasketQuantity cartItems={cartItems} product={product} />
                <Title css={titleStyle}>{product.name}</Title>
              </TitleContainer>
              <Description>{product.description}</Description>
            </div>
            <Footer>{renderFooter(product.list_price, status)}</Footer>
          </Content>
        </ContentContainer>
        <MobileFooter>{renderFooter(product.list_price, status)}</MobileFooter>
      </Item>
    ))}
  </List>
);

RestaurantProducts.propTypes = {
  status: PropTypes.string,
  products: PropTypes.arrayOf(RestaurantProductPropType).isRequired,
  cartItems: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default RestaurantProducts;
