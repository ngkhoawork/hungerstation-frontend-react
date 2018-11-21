import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSteps,
  StyledStep,
  StyledIcon,
  StyledWrapper,
} from './StyledSteps';

const TrackingSteps = ({ steps, currentStep }) => (
  <StyledWrapper>
    <StyledSteps current={currentStep} direction="vertical">
      {steps.map(step => (
        <StyledStep
          icon={
            <StyledIcon isProgress={step.index > currentStep + 1}>
              {step.index}
            </StyledIcon>
          }
          key={step.index}
          title={step.title}
          description={step.description}
        />
      ))}
    </StyledSteps>
  </StyledWrapper>
);

TrackingSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number,
};

export default TrackingSteps;
