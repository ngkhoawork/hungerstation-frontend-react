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

const getMsg = (type, params = {}) =>
  `• ${intl.formatMessage(messages.status[type], params)}`;

const getTime = minutes => {
  const now = new Date();
  now.setHours(Math.floor(minutes / 60), minutes % 60);

  return intl.formatTime(now);
};

const renderStatus = (status, { start_minute, end_minute } = {}) => {
  if (status === 'ready' && end_minute !== undefined) {
    return (
      <Status color="success">
        {getMsg('ready', { time: getTime(end_minute) })}
      </Status>
    );
  }

  if (status === 'soon' && start_minute !== undefined) {
    return (
      <Fragment>
        <Status color="error">{getMsg('closed')}</Status>
        <Status>{getMsg('soon', { time: getTime(start_minute) })}</Status>
      </Fragment>
    );
  }

  if (status === 'busy') {
    return <Status color="error">{getMsg('busy')}</Status>;
  }

  if (status === 'closed') return <Status>{getMsg('closed')}</Status>;

  return null;
};

const RestaurantInfo = ({ restaurant, status, working_time }) => {
  const workingTime = ((working_time || restaurant.working_time || {})
    .weektimes || [])[0];

  return (
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
        </StyledDetails>
      </StyledDetailsContainer>
      <StatusContainer>{renderStatus(status, workingTime)}</StatusContainer>
    </StyledRestaurantInfo>
  );
};

RestaurantInfo.propTypes = {
  status: PropTypes.string,
  working_time: PropTypes.object,
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
