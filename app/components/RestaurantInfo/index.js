import React from 'react';
import PropTypes from 'prop-types';
import { getDeepProp } from 'utils/helpers';
import { alto } from 'utils/css/colors';
import { Mobile, Desktop } from 'utils/css/styledComponents';
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
  StyledDetailsContainer,
  RatingContainer,
  deliveryInfoStyle,
  desktopStyle,
  mobileStyle,
} from './StyledComponents';

const RestaurantInfo = ({ restaurant, ...props }) => {
  const renderName = () => (
    <Name>
      {restaurant.name}
      <RatingContainer>
        <Icon size={10} name="star" />
        {restaurant.rate_average}
      </RatingContainer>
    </Name>
  );

  const renderDetails = () => (
    <React.Fragment>
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
        {...getDeepProp(props, ['delivery_conditions', 0])}
        css={deliveryInfoStyle}
      />
    </React.Fragment>
  );

  const renderMobile = () => (
    <Mobile css={mobileStyle}>
      <StyledDetailsContainer>
        <StyledMobileLogo>
          <BrandLogo src={restaurant.logo} size={45} />
        </StyledMobileLogo>
        {renderName()}
      </StyledDetailsContainer>
      <StyledDetails>{renderDetails()}</StyledDetails>
      <Status {...props} restaurant={restaurant} />
    </Mobile>
  );

  const renderDesktop = () => (
    <Desktop css={desktopStyle}>
      <StyledLogo>
        <BrandLogo src={restaurant.logo} size={45} />
      </StyledLogo>
      <StyledDetailsContainer>
        <StyledDetails>
          {renderName()}
          {renderDetails()}
        </StyledDetails>
      </StyledDetailsContainer>
      <Status {...props} restaurant={restaurant} />
    </Desktop>
  );

  return (
    <div>
      {renderMobile()}
      {renderDesktop()}
    </div>
  );
};

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
