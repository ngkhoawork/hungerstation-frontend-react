import React from 'react';
import { restaurantPropTypes } from 'prop-types';
import { getPathname } from 'utils/location';
import intl from 'utils/intlService';
import BrandLogo from 'components/BrandLogo';
import Row from 'components/Row';
import DeliveryInfo from 'components/DeliveryInfo';
import { StatusContent } from 'utils/css/styledComponents';
import CardTitle from './CardTitle';
import Rating from './Rating';
import KitchensNames from './KitchensNames';
import Promoted from './Promoted';
import {
  StyledRestaurantCard,
  StyledUpperPart,
  StyledBottomPart,
} from './Styled';
import messages from './messages';

const RestaurantCard = ({
  branchId,
  name,
  is_promoted,
  is_exclusive,
  // deliveryTime,
  minOrder,
  rateAverage,
  deliveryFee,
  status,
  logo,
  coverPhoto,
  kitchensNames,
}) => {
  const renderTag = () => {
    if (is_promoted) return <Promoted />;

    if (is_exclusive) {
      return (
        <StatusContent color="success">
          {intl.formatMessage(messages.exclusive)}
        </StatusContent>
      );
    }

    return null;
  };

  return (
    <StyledRestaurantCard
      to={`${getPathname()}/restaurant/${branchId}`}
      cover={coverPhoto}
    >
      <StyledUpperPart>
        <BrandLogo src={logo} size={60} />
        {renderTag()}
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
};

RestaurantCard.propTypes = {
  ...restaurantPropTypes,
};

export default RestaurantCard;
