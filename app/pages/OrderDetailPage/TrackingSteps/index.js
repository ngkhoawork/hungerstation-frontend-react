import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import {
  StyledSteps,
  StyledStep,
  StyledIcon,
  StyledWrapper,
  TrackButton,
} from './StyledSteps';

const TrackButtonWrapper = ({ disabled, onClick }) => (
  <TrackButton disabled={disabled} onClick={onClick}>
    <span>Track</span>
    <Icon name="car" style={{ marginLeft: '10px' }} />
  </TrackButton>
);

TrackButtonWrapper.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const TrackingSteps = ({ steps, currentStep, enableTrackCar, onTrackCar }) => (
  <StyledWrapper>
    <StyledSteps current={currentStep} direction="vertical">
      {steps.map(step => (
        <StyledStep
          icon={
            <StyledIcon isProgress={step.index > currentStep}>
              {step.index + 1}
            </StyledIcon>
          }
          key={step.index}
          title={step.title}
          description={step.description}
        />
      ))}
    </StyledSteps>
    {enableTrackCar && (
      <TrackButtonWrapper
        disabled={steps[2].index >= currentStep}
        onClick={onTrackCar}
      />
    )}
  </StyledWrapper>
);

TrackingSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number,
  enableTrackCar: PropTypes.bool,
  onTrackCar: PropTypes.func,
};

export default TrackingSteps;
