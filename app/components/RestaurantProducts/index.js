import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Price from 'components/Price';
import { Title } from 'components/Typography';
import messages from './messages';
import {
  List,
  Item,
  ContentContainer,
  Content,
  TitleContainer,
  titleIconStyle,
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

const RestaurantProducts = ({ products, cartProducts, onProductClick }) => (
  <List>
    {products.map(product => (
      <Item key={product.id} onClick={() => onProductClick(product)}>
        <ContentContainer>
          <Img image={product.image} />
          <Content>
            <div>
              <TitleContainer>
                {cartProducts.find(({ id }) => id === product.id) ? (
                  <Icon name="vegan" size={18} css={titleIconStyle} />
                ) : null}
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

const RestaurantProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
});

RestaurantProducts.propTypes = {
  products: PropTypes.arrayOf(RestaurantProductPropType).isRequired,
  cartProducts: PropTypes.arrayOf(RestaurantProductPropType).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default RestaurantProducts;
