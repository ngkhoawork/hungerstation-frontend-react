import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import Button from 'components/Button';
import Icon from 'components/Icon';
import StyledBanner from './StyledBanner';
import ActionText from './ActionText';
import IconWrapper from './IconWrapper';

const AddRestaurantBanner = ({ isVisible, toggleVisibility }) => {
  if (isVisible)
    return (
      <StyledBanner>
        <ActionText>Would you like to Join Us?</ActionText>
        <Button
          label="Add restaurant"
          type="button"
          width={129}
          primary={false}
        />
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
