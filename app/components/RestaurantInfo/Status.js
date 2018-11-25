import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { getDeepProp, daysUntilOpen, getTime } from 'utils/helpers';
import { StatusContent } from 'utils/css/styledComponents';
import { StatusContainer } from './StyledComponents';
import messages from './messages';

const getMsg = (type, params = {}) =>
  `• ${intl.formatMessage(messages.status[type], params)}`;

const renderStatus = (status, working_time) => {
  if (status === 'busy') {
    return <StatusContent color="error">{getMsg('busy')}</StatusContent>;
  }

  if (status === 'closed') {
    return <StatusContent>{getMsg('closed')}</StatusContent>;
  }

  const weektimes = getDeepProp(working_time, ['weektimes', 0]);
  // const isCurrentlyOpen = isDayTimeMatch({ working_time });

  if (!weektimes) return null;

  const { start_minute, end_minute } = weektimes;

  // if (status === 'ready' && isCurrentlyOpen) {
  if (status === 'ready' && typeof end_minute === 'number') {
    return (
      <StatusContent color="success">
        {getMsg('ready', { time: getTime(end_minute) })}
      </StatusContent>
    );
  }

  // if (status === 'soon' && !isCurrentlyOpen) {
  if (status === 'soon' && typeof start_minute === 'number') {
    const daysDiff = daysUntilOpen(weektimes);
    let message;

    if (daysDiff === 1) {
      message = getMsg('tomorrow', { time: getTime(start_minute) });
    } else {
      const date = new Date();
      date.setDate(date.getDate() + daysDiff);

      message = getMsg('soon', {
        time: getTime(start_minute),
        day: intl.formatDate(date, { weekday: 'short' }),
      });
    }

    return (
      <Fragment>
        <StatusContent color="error">{getMsg('closed')}</StatusContent>
        <StatusContent style={{ marginLeft: 5 }}>{message}</StatusContent>
      </Fragment>
    );
  }

  return null;
};

const Status = ({ restaurant, status, working_time }) => {
  const workingTime = working_time || restaurant.working_time;

  return <StatusContainer>{renderStatus(status, workingTime)}</StatusContainer>;
};

Status.propTypes = {
  status: PropTypes.string,
  working_time: PropTypes.object,
  restaurant: PropTypes.object,
};

export default Status;
