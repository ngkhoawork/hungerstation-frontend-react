import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { gold } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { StyledWrapper, StyledMinuteLabel } from './StyledSteps';

const pad = num => `0${num}`.slice(-2);

const calculatePercent = (startAt, endAt) => {
  const total = endAt - startAt;
  const current = endAt - new Date().getTime() / 1000;
  const percentage = (current * 100) / total;
  let secs = total - current;
  let minutes = Math.floor(secs / 60);
  secs %= 60;
  const hours = Math.floor(minutes / 60);
  minutes %= 60;
  return {
    percentage,
    time: `${pad(hours)}:${pad(minutes)}`,
  };
};

const TrackingTimer = ({ startAt, endAt }) => {
  const { percentage, time } = calculatePercent(startAt, endAt);
  return (
    <StyledWrapper>
      <CircularProgressbar
        percentage={percentage}
        text={time}
        styles={{
          background: {
            fill: '#3e98c7',
            stroke: '#fff',
          },
          text: {
            fill: '#000',
            fontSize: '24px',
            fontFamily: fontFamilyRegular,
          },
          path: {
            stroke: gold,
          },
          trail: { stroke: 'transparent' },
        }}
      />
      <StyledMinuteLabel>min</StyledMinuteLabel>
    </StyledWrapper>
  );
};

TrackingTimer.propTypes = {
  startAt: PropTypes.number.isRequired,
  endAt: PropTypes.number.isRequired,
};

export default TrackingTimer;
