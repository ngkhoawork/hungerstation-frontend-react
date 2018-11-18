import React from 'react';
import PropTypes from 'prop-types';
import { alto } from 'utils/css/colors';
import { getDeepProp } from 'utils/helpers';
import BrandLogo from 'components/BrandLogo';
import Paragraph from 'components/Paragraph';
import Group from 'components/Group';
import Icon from 'components/Icon';
import DeliveryInfo from 'components/DeliveryInfo';
import Status from './Status';
import {
  Name,
  StyledLogo,
  StyledMobileLogo,
  StyledCuisine,
  StyledDetails,
  StyledRestaurantInfo,
  StyledDetailsContainer,
  RatingContainer,
} from './StyledComponents';

const RestaurantInfo = ({ restaurant, ...props }) => (
  <StyledRestaurantInfo>
    <StyledLogo>
      <BrandLogo src={restaurant.logo} size={45} />
    </StyledLogo>
    <StyledDetailsContainer flex={0.7} justify="flex-start">
      <StyledMobileLogo>
        <BrandLogo src={restaurant.logo} size={45} />
      </StyledMobileLogo>
      <StyledDetails>
        <Name>
          {restaurant.name}
          <RatingContainer>
            <Icon size={10} name="star" />
            {restaurant.rate_average}
          </RatingContainer>
        </Name>
        <Group>
          {restaurant.kitchens.map(({ id, name, image_thumb }) => (
            <StyledCuisine key={id}>
              <img src={image_thumb} alt={name} height="14" />
              <Paragraph size={12} color={alto}>
                {name}
              </Paragraph>
            </StyledCuisine>
          ))}
        </Group>
        <DeliveryInfo
          {...getDeepProp(restaurant, ['delivery_conditions', 0])}
          style={{ margin: '10px 0' }}
        />
      </StyledDetails>
    </StyledDetailsContainer>
    <Status {...props} restaurant={restaurant} />
  </StyledRestaurantInfo>
);

RestaurantInfo.propTypes = {
  status: PropTypes.string,
  restaurant: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    rate_average: PropTypes.number,
    kitchens: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image_thumb: PropTypes.string,
      }),
    ),
  }),
};

export default RestaurantInfo;
