import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import Price from 'components/Price';
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
} from './StyledComponents';

const renderFooter = price => (
  <Fragment>
    <PriceContainer>
      <Price price={price} isPrimary hasTag />
    </PriceContainer>
    <span role="button">
      Add to cart &nbsp;
      <Icon name="arrow-circled-right" offsetY="-1" size={15} />
    </span>
  </Fragment>
);

const RestaurantProducts = ({ products, onProductClick }) => (
  <List>
    {products.map(product => (
      <Item key={product.id} onClick={() => onProductClick(product)}>
        <ContentContainer>
          <Img src={product.img} />
          <Content>
            <div>
              <Title>{product.title}</Title>
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
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  onProductClick: PropTypes.func.isRequired,
};

export default RestaurantProducts;
