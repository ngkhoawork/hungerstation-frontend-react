import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Price from 'components/Price';
import { Title } from 'components/Typography';
import messages from './messages';

import {
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
  DeliveryLocation,
  IconPosition,
} from '../StyledComponents';

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

const OrderCard = ({ id, image, name, description, price, onOrderClick }) => (
  <Item key={id} onClick={() => onOrderClick(id)}>
    <ContentContainer>
      <Img image={image} />
      <Content>
        <div>
          <TitleContainer>
            <Title css={titleStyle}>{name}</Title>
            <DeliveryLocation>
              <IconPosition>
                <Icon name="pin" />
              </IconPosition>
              {`Dammam, Dammam University`}
            </DeliveryLocation>
          </TitleContainer>
          <Description>{description}</Description>
        </div>
        <Footer>{renderFooter(price)}</Footer>
      </Content>
    </ContentContainer>
    <MobileFooter>{renderFooter(price)}</MobileFooter>
  </Item>
);

OrderCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  onOrderClick: PropTypes.func.isRequired,
};
export default OrderCard;
