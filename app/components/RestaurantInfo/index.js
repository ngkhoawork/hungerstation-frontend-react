import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { alto } from 'utils/css/colors';
import BrandLogo from 'components/BrandLogo';
import Paragraph from 'components/Paragraph';
import Group from 'components/Group';
import Icon from 'components/Icon';
import messages from './messages';
import {
  Name,
  StyledLogo,
  StyledMobileLogo,
  StyledCuisine,
  StyledDetails,
  StyledRestaurantInfo,
  StyledDetailsContainer,
  StatusContainer,
  Status,
  RatingContainer,
} from './StyledComponents';

const renderStatus = status => {
  const getMsg = type => `• ${intl.formatMessage(messages.status[type])}`;

  if (status === 'openTill') {
    return <Status color="success">{getMsg('openTill')}</Status>;
  }

  if (status === 'opensAt') {
    return (
      <Fragment>
        <Status color="error">{getMsg('closed')}</Status>
        <Status>{getMsg('opensAt')}</Status>
      </Fragment>
    );
  }

  if (status === 'busy') {
    return <Status color="error">{getMsg('busy')}</Status>;
  }

  if (status === 'closed') return <Status>{getMsg('closed')}</Status>;

  return null;
};

const RestaurantInfo = ({ logo, name, status, rateAverage, cuisines }) => (
  <StyledRestaurantInfo>
    <StyledLogo>
      <BrandLogo src={logo} size={45} />
    </StyledLogo>
    <StyledDetailsContainer flex={0.7} justify="flex-start">
      <StyledMobileLogo>
        <BrandLogo src={logo} size={45} />
      </StyledMobileLogo>
      <StyledDetails>
        <Name>
          {name}
          <RatingContainer>
            <Icon size={10} name="star" offsetY="-1" />
            {rateAverage}
          </RatingContainer>
        </Name>
        <Group>
          {cuisines.map(({ id, name, image }) => (
            <StyledCuisine key={id}>
              <img src={image} alt={name} height="14" />
              <Paragraph size={12} color={alto}>
                {name}
              </Paragraph>
            </StyledCuisine>
          ))}
        </Group>
      </StyledDetails>
    </StyledDetailsContainer>
    <StatusContainer>{renderStatus(status)}</StatusContainer>
  </StyledRestaurantInfo>
);

RestaurantInfo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  rateAverage: PropTypes.number,
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ),
};

export default RestaurantInfo;
