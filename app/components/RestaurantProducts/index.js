import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Price from 'components/Price';
import messages from './messages';
import {
  List,
  Item,
  ContentContainer,
  Content,
  Title,
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
      <Icon name="arrow-circled-right" offsetY="-1" size={15} />
    </AddBtn>
  </Fragment>
);

const RestaurantProducts = ({ products, onProductClick }) => (
  <List>
    {products.map(product => (
      <Item key={product.id} onClick={() => onProductClick(product)}>
        <ContentContainer>
          <Img image={product.image} />
          <Content>
            <div>
              <Title>{product.name}</Title>
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default RestaurantProducts;
