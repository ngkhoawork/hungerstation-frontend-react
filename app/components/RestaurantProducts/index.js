import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import {
  List,
  Item,
  ContentContainer,
  Content,
  Title,
  Description,
  Img,
  PriceContainer,
  Price,
  Footer,
  MobileFooter,
} from './StyledComponents';

const renderFooter = price => (
  <Fragment>
    <PriceContainer>
      <Icon name="price-tag" />
      <Price>
        {intl.formatNumber(price, { style: 'currency', currency: 'SAR' })}
      </Price>
    </PriceContainer>
    <span role="button">
      Add to cart &nbsp;
      <Icon name="arrow-back" size={15} />
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
