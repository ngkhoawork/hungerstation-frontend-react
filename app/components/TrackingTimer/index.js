import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { gold } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { StyledWrapper, StyledMinuteLabel } from './StyledSteps';

const pad = num => `0${num}`.slice(-2);

class TrackingTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      time: '00:00',
    };
  }

  tick = () => {
    const { startAt, endAt } = this.props;
    const total = endAt - startAt;
    const now = new Date().getTime() / 1000;
    if (now >= endAt) {
      clearInterval(this.intervalHandle);
      this.setState({
        percentage: 100,
        time: '00:00',
      });
      return;
    }
    const current = now - startAt;
    const percentage = (current * 100) / total;
    const remaining = Math.round(total - current);
    const minutes = Math.floor(remaining / 60);
    const secs = remaining % 60;
    const time = `${pad(minutes)}:${pad(secs)}`;
    if (minutes === 0 && secs === 0) {
      clearInterval(this.intervalHandle);
    }

    this.setState({
      percentage,
      time,
    });
  };

  componentDidMount() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const { percentage, time } = this.state;
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
  }
}

TrackingTimer.propTypes = {
  startAt: PropTypes.number.isRequired,
  endAt: PropTypes.number.isRequired,
};

export default TrackingTimer;
