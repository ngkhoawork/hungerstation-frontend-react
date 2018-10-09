import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import Button from 'components/Button';
import Icon from 'components/Icon';
import intl from 'utils/intlService';
import StyledBanner from './StyledBanner';
import ActionText from './ActionText';
import IconWrapper from './IconWrapper';
import ButtonWrapper from './ButtonWrapper';

import messages from './messages';

const AddRestaurantBanner = ({ isVisible, toggleVisibility }) => {
  if (isVisible)
    return (
      <StyledBanner>
        <ActionText>{intl.formatMessage(messages.actionText)}</ActionText>
        <ButtonWrapper>
          <Button
            label={intl.formatMessage(messages.buttonLabel)}
            type="button"
            primary={false}
            lift={false}
          />
        </ButtonWrapper>
        {isVisible && (
          <IconWrapper onClick={toggleVisibility}>
            <Icon name="close" size={10} />
          </IconWrapper>
        )}
      </StyledBanner>
    );
  return null;
};

AddRestaurantBanner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

const enhance = compose(
  withState('isVisible', 'setVisibility', true),
  withHandlers({
    toggleVisibility: props => () => {
      props.setVisibility(!props.isVisible);
    },
  }),
);

export default enhance(AddRestaurantBanner);
