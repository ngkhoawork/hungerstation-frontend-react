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

const RestaurantInfo = ({
  logo,
  name,
  status,
  working_times,
  rateAverage,
  cuisines,
}) => (
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
            <Icon size={10} name="star" />
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
    <StatusContainer>{renderStatus(status, working_times)}</StatusContainer>
  </StyledRestaurantInfo>
);

RestaurantInfo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  working_times: PropTypes.object,
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
