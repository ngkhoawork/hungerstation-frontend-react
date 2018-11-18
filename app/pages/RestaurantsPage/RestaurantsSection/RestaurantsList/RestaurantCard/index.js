import React from 'react';
import { restaurantPropTypes } from 'prop-types';
import { getPathname } from 'utils/location';
import BrandLogo from 'components/BrandLogo';
import Row from 'components/Row';
import DeliveryInfo from 'components/DeliveryInfo';
import CardTitle from './CardTitle';
import Rating from './Rating';
import KitchensNames from './KitchensNames';
import Promoted from './Promoted';
import {
  StyledRestaurantCard,
  StyledUpperPart,
  StyledBottomPart,
} from './Styled';

const RestaurantCard = ({
  branchId,
  name,
  // deliveryTime,
  minOrder,
  rateAverage,
  deliveryFee,
  status,
  logo,
  coverPhoto,
  kitchensNames,
  hasPromotion,
}) => (
  <StyledRestaurantCard
    to={`${getPathname()}/restaurant/${branchId}`}
    cover={coverPhoto}
  >
    <StyledUpperPart>
      <BrandLogo src={logo} size={60} />
      {!hasPromotion && <Promoted />}
    </StyledUpperPart>

    <StyledBottomPart>
      <Row justify="space-between" align="center" maxWidth>
        <CardTitle name={name} status={status} />
        <Rating rating={rateAverage} />
      </Row>

      <KitchensNames names={kitchensNames} />

      <DeliveryInfo minimum_order={minOrder} delivery_fee={deliveryFee} />
    </StyledBottomPart>
  </StyledRestaurantCard>
);

RestaurantCard.propTypes = {
  ...restaurantPropTypes,
};

export default RestaurantCard;
