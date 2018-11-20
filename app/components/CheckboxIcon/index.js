import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { lightGray } from 'utils/css/colors';

const CheckboxEmpty = styled.div`
  border: solid 1px ${lightGray};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
`;

const CheckboxIcon = ({ isChecked, onClick, isDisabled }) => {
  const iconStyle = {
    cursor: isDisabled ? 'default' : 'pointer',
  };

  if (isChecked) {
    return (
      <Icon name="toggle-green" style={iconStyle} size={20} onClick={onClick} />
    );
  }

  return <CheckboxEmpty onClick={onClick} isDisabled={isDisabled} />;
};

CheckboxIcon.propTypes = {
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckboxIcon;
