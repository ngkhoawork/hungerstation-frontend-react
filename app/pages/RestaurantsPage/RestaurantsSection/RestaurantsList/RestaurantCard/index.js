import React from 'react';
import { restaurantPropTypes } from 'prop-types';

import intl from 'utils/intlService';
import BrandLogo from 'components/BrandLogo';
import Row from 'components/Row';
import CardTitle from './CardTitle';
import Rating from './Rating';
import IconAndText from './IconAndText';
import KitchensNames from './KitchensNames';
import Promoted from './Promoted';
import {
  StyledRestaurantCard,
  StyledUpperPart,
  StyledBottomPart,
} from './Styled';
import messages from './messages';

const RestaurantCard = ({
  name,
  // deliveryTime,
  minOrder,
  rateAverage,
  deliveryFee,
  status,
  logo,
  kitchensNames,
  hasPromotion,
}) => (
  <StyledRestaurantCard>
    <StyledUpperPart>
      <BrandLogo src={logo} />
      {hasPromotion && <Promoted />}
    </StyledUpperPart>

    <StyledBottomPart>
      <Row justify="space-between" align="center" maxWidth>
        <CardTitle name={name} status={status} />
        <Rating rating={rateAverage} />
      </Row>

      <KitchensNames names={kitchensNames} />

      <Row>
        {/* <IconAndText
        iconName="time"
        text={intl.formatMessage(messages.time, {
          max: deliveryTime,
        })}
      /> */}
        <IconAndText
          iconName="delivery"
          text={intl.formatMessage(messages.currency, {
            value: deliveryFee,
          })}
        />
        <IconAndText
          iconName="bag"
          text={intl.formatMessage(messages.minValue, {
            min: intl.formatMessage(messages.currency, {
              value: minOrder,
            }),
          })}
        />
      </Row>
    </StyledBottomPart>
  </StyledRestaurantCard>
);

RestaurantCard.propTypes = {
  ...restaurantPropTypes,
};

export default RestaurantCard;
